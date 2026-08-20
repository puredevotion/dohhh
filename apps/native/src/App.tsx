import {
  activeQuestion,
  canAnswer,
  canChooseDifficulty,
  canDraw,
  categoryById,
  createIdentity,
  DIFFICULTY_ORDER,
  DIFFICULTY_TIERS,
  scoreboard,
  SEED_PACK,
  type Difficulty,
  type GameState,
  type Identity,
} from '@dohhh/engine';
import { GameSession, type SessionSnapshot } from '@dohhh/net';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

/**
 * The React Native surface. Tier 2, and honest about it.
 *
 * Why this exists at all: the brief asked for React Native, and the review's
 * answer (R-7) was that React Native and HeroUI cannot share a component tree,
 * so the rules were pushed down into `@dohhh/engine` - pure TypeScript, no
 * DOM, no platform imports - and each surface gets its own thin shell. This file
 * is the proof that the split works: it imports the same engine and the same
 * session as the PWA and renders with React Native primitives only.
 *
 * What it is not: finished. The PWA is the shipping surface, because a game you
 * join by scanning a QR code cannot ask for an App Store install in the middle
 * of the invitation. This shell renders the live game and takes answers; the
 * lobby, camera scanning and code entry are still to build, and they are marked
 * below rather than faked.
 */

const PACK = SEED_PACK;

export function App(): React.ReactElement {
  const [identity] = useState<Identity>(() => createIdentity('Player'));
  const [session, setSession] = useState<GameSession | null>(null);
  const [snapshot, setSnapshot] = useState<SessionSnapshot | null>(null);

  useEffect(() => {
    if (session === null) return;
    return session.subscribe(setSnapshot);
  }, [session]);

  useEffect(() => () => session?.leave(), [session]);

  const state = snapshot?.state ?? null;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Dohhh</Text>
        <Text style={styles.subtitle}>
          {state === null ? 'No game yet' : `${state.name} - round ${state.roundIndex + 1}`}
        </Text>

        {state === null ? (
          <Placeholder
            onDemo={() => {
              // TODO(native): lobby, QR scanning via expo-camera, and word-code
              // entry. The engine and session need nothing new for any of them -
              // see apps/pwa/src/screens for the flows this has to mirror.
              setSession(
                new GameSession({
                  identity,
                  pack: PACK,
                  // A code the host would have shown; typed or scanned in the
                  // finished shell.
                  gameId: 'game_0000000000',
                  joinCode: 'abalone-abbey-acacia-adder',
                  gossipIntervalMs: 5_000,
                }),
              );
            }}
          />
        ) : (
          <Game state={state} me={identity.id} session={session} />
        )}
      </ScrollView>
    </View>
  );
}

function Placeholder({ onDemo }: { onDemo: () => void }): React.ReactElement {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Shared engine, native shell</Text>
      <Text style={styles.body}>
        This build reuses the same rules engine and peer-to-peer session as the web app. Joining
        flows (camera and four-word code) are not wired up here yet; the web app is the surface to
        play on today.
      </Text>
      <Pressable style={styles.primary} onPress={onDemo}>
        <Text style={styles.primaryText}>Connect to a game</Text>
      </Pressable>
    </View>
  );
}

function Game({
  state,
  me,
  session,
}: {
  state: GameState;
  me: string;
  session: GameSession | null;
}): React.ReactElement {
  const question = activeQuestion(state, PACK);
  const category = state.active === null ? undefined : categoryById(state.active.categoryId);

  return (
    <View style={styles.stack}>
      {scoreboard(state).map((row) => (
        <View key={row.team.id} style={[styles.row, row.isActing && styles.rowActing]}>
          <Text style={styles.rowName}>{row.team.name}</Text>
          <Text style={styles.rowScore}>{row.score}</Text>
        </View>
      ))}

      {state.active === null ? (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Between turns</Text>
          {canDraw(state, me) && (
            <Pressable style={styles.primary} onPress={() => noteUnwired('deal')}>
              <Text style={styles.primaryText}>Deal a category</Text>
            </Pressable>
          )}
        </View>
      ) : question === null ? (
        <View style={styles.card}>
          <Text style={styles.cardLabel}>{category?.name ?? state.active.categoryId}</Text>
          {canChooseDifficulty(state, me) &&
            DIFFICULTY_ORDER.map((difficulty: Difficulty) => (
              <Pressable
                key={difficulty}
                style={styles.tier}
                onPress={() => noteUnwired('difficulty')}
              >
                <Text style={styles.tierText}>
                  {DIFFICULTY_TIERS[difficulty].label} +{DIFFICULTY_TIERS[difficulty].award} /{' '}
                  {DIFFICULTY_TIERS[difficulty].penalty}
                </Text>
              </Pressable>
            ))}
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.cardLabel}>{category?.name ?? ''}</Text>
          <Text style={styles.prompt}>{question.question.prompt}</Text>
          {question.options.map((option) => (
            <Pressable
              key={option}
              disabled={!canAnswer(state, me)}
              style={styles.option}
              onPress={() => noteUnwired('answer')}
            >
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <Text style={styles.footer}>
        {session === null ? 'offline' : `log: ${session.log.size} events`}
      </Text>
    </View>
  );
}

/**
 * Deliberately inert. Wiring these up is one `session.commit(...)` each, using
 * the same command builders the web app uses - but a half-wired action that
 * silently does nothing is worse than one that says so.
 */
function noteUnwired(action: string): void {
  console.warn(`[dohhh] native shell: "${action}" is not wired up yet`);
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#18182b' },
  scroll: { padding: 20, paddingTop: 60, gap: 16 },
  stack: { gap: 12 },
  title: { color: '#f5f5ff', fontSize: 28, fontWeight: '600' },
  subtitle: { color: '#9a9ab5', fontSize: 14 },
  card: { backgroundColor: '#20203a', borderRadius: 16, padding: 16, gap: 12 },
  cardTitle: { color: '#f5f5ff', fontSize: 18, fontWeight: '600' },
  cardLabel: { color: '#9a9ab5', fontSize: 13 },
  body: { color: '#c8c8dd', fontSize: 14, lineHeight: 20 },
  prompt: { color: '#f5f5ff', fontSize: 18, lineHeight: 25 },
  primary: { backgroundColor: '#5b7cfa', borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  primaryText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  option: {
    borderColor: '#3a3a5c',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  optionText: { color: '#e8e8f5', fontSize: 15 },
  tier: { borderColor: '#3a3a5c', borderWidth: 1, borderRadius: 12, padding: 12 },
  tierText: { color: '#e8e8f5', fontSize: 15 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#2c2c4a',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
  rowActing: { borderColor: '#5b7cfa' },
  rowName: { color: '#e8e8f5', fontSize: 15 },
  rowScore: { color: '#e8e8f5', fontSize: 15, fontVariant: ['tabular-nums'] },
  footer: { color: '#6c6c8a', fontSize: 12, textAlign: 'center' },
});
