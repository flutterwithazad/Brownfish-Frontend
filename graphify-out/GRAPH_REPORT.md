# Graph Report - Brownfish-Frontend  (2026-04-23)

## Corpus Check
- 86 files · ~144,614 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 146 nodes · 68 edges · 6 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `MemStorage` - 5 edges
2. `reducer()` - 3 edges
3. `dispatch()` - 3 edges
4. `toast()` - 3 edges
5. `getDeploymentUrl()` - 2 edges
6. `log()` - 2 edges
7. `log()` - 2 edges
8. `buildAll()` - 2 edges
9. `useSidebar()` - 2 edges
10. `SidebarMenuButton()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `log()` --calls--> `buildAll()`  [INFERRED]
  server/index.ts → script/build.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.33
Nodes (2): SidebarMenuButton(), useSidebar()

### Community 1 - "Community 1"
Cohesion: 0.48
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (1): MemStorage

### Community 4 - "Community 4"
Cohesion: 0.67
Nodes (2): getDeploymentUrl(), log()

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (2): buildAll(), log()

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (2): apiRequest(), throwIfResNotOk()

## Knowledge Gaps
- **Thin community `Community 0`** (7 nodes): `sidebar.tsx`, `cn()`, `handleKeyDown()`, `SidebarMenu()`, `SidebarMenuButton()`, `SidebarMenuItem()`, `useSidebar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 2`** (6 nodes): `storage.ts`, `MemStorage`, `.constructor()`, `.createUser()`, `.getUser()`, `.getUserByUsername()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 4`** (4 nodes): `getDeploymentUrl()`, `log()`, `metaImagesPlugin()`, `vite-plugin-meta-images.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (4 nodes): `buildAll()`, `log()`, `build.ts`, `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (4 nodes): `queryClient.ts`, `apiRequest()`, `getQueryFn()`, `throwIfResNotOk()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._