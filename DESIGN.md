# DESIGN — Everyday Things, Two Lines (rain lane)

## The entry (winner C)

> Rain is someone tipping a tray of ice cubes off a balcony, the cubes melting into drops before they reach the ground.
>
> The tray matches how the drops start up high and arrive as water, but it leaves out that clouds make the drops from water vapour, not from melting ice.

269 chars (line 1: 117, line 2: 151), two lines, one sentence each,
no trailing newline. Gate: UTF-8, 1–400 chars — passes with room.

## Why rain

Flood-check 24 Nov ~23:57 WIB, 211 live submissions: toaster flooded
(sunbed, elevator, sun in a metal box, tanning bed — dozens); queue
flooded (caterpillar, human train, ants, beads, snake); traffic jam
flooded (river, frozen river, parking lot, ketchup bottle, zipper,
snail, hose). Rain had only ~3 entries — "sky wrings out a towel",
"giant sponge cloud letting go", "rain on a cold spoon" — all avoided.
Rain is the freest lane, and every child has stood in it.

## Why this analogy

Tray, ice cubes, balcony: things a 10-year-old can see, hold and stand
on — the brief's own test of concreteness. The join is fresh: nobody
tips a tray of ice off a balcony in ordinary speech, yet the picture
lands at once — solid things up high turning into drops on the way
down, which is what rain looks like to a child watching it. It
explains, not decorates: where drops come from (up high) and what they
arrive as (water). It plants no wrong idea line 2 must undo.

## What line 2 maps and leaves out

Maps: drops begin high (balcony) and arrive as water (melted cubes).
Leaves out: the mechanism. Clouds do not melt ice; they build drops
from water vapour, droplets joining until too heavy to stay up. A real
limit, not praise.

## Candidates (rain lane; full texts in BUILD-REPORT.md)

| ID | Analogy (line 1) | Line 2: maps / leaves out |
|---|---|---|
| A | giant wet dog shaking itself dry | shake matches flying drops / drops fall straight down |
| B | thousand water balloons popping on your head | pop matches cold splash / drops never burst |
| C | tray of ice cubes tipped off a balcony, melting into drops | drops start high, arrive as water / clouds make drops from vapour |
| D | shaken fizzy-drink can cracked open above your town | spray matches sudden start / drops fall straight down |
| E | leaky roof as big as the sky | drip matches drops keep coming / roof broken vs air can't hold water |
| F | shower head as wide as the sky | steady fall from above / a shower has a tap, rain has none |
| G | box of glass marbles tipped off a rooftop | marbles match scattering / drops soft, vanish; marbles hard, roll away |
| H | tap left running above the whole town | pours without stopping / a tap has a handle, rain has no switch |

## Tournament (round robin, 28 games; brief's 5 criteria in order)

| Pair | Winner, margin | Decided by |
|---|---|---|
| C–G | C, 1 | C1 origin vs landing only |
| C–A | C, 2 | C1 dog shakes sideways — wrong direction |
| C–B | C, 2 | C1 rain never pops; picture is wrong |
| C–D | C, 2 | C1 origin vs sudden start only |
| C–E | C, 2 | C2 roof familiar; ice tray fresh |
| C–F | C, 3 | C2 shower head most familiar of all |
| C–H | C, 2 | C2 tap familiar; C1 also favours C |
| G–A | G, 1 | C2 marbles off a rooftop fresher |
| G–B | G, 2 | C1 popping is wrong; C2 favours G |
| G–D | G, 1 | C2 marbles fresher than shaken can |
| G–E | G, 2 | C2 roof familiar; marbles not |
| G–F | G, 3 | C2 shower head stalest image here |
| G–H | G, 2 | C2 tap familiar; marbles not |
| A–B | A, 1 | C1 shake flings real drops; pop never happens |
| A–D | A, 1 | C2 wet dog more surprising |
| A–E | A, 2 | C2 roof familiar; dog not |
| A–F | A, 2 | C2 shower head stale; dog not |
| A–H | A, 2 | C2 tap familiar; dog not |
| B–D | B, 1 | C2 balloons on your head fresher |
| B–E | B, 2 | C2 roof familiar; balloons not |
| B–F | B, 2 | C2 shower head stale; balloons not |
| B–H | B, 2 | C2 tap familiar; balloons not |
| D–E | D, 1 | C2 shaken can fresher than roof |
| D–F | D, 2 | C2 shower head stale; can not |
| D–H | D, 1 | C2 shaken can fresher than tap |
| E–F | E, 1 | C2 even, then C4: E's limit sharper |
| E–H | E, 1 | C2 even, then C4: E names mechanism |
| H–F | H, 1 | C2 tap above town beats shower head |

Standings: C 7–0, G 6–1, A 5–2, B 4–3, D 3–4, E 2–5, H 1–6, F 0–7.
Winner: C, the ice-cube tray — beat every candidate head-to-head, on
criterion 1 (explains rain's origin, plants no wrong idea) and
criterion 2 (freshest concrete join among the explainers).

## Determinism

`main.ts` holds the entry as one string constant. No clock, no random
source, no network; the only environment read is `MAKEFUN_OUTPUT_DIR`
(fallback `/output`). Two runs must write byte-identical `entry.txt`.
