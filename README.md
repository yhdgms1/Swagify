# Swagify

"I use it every day." - Connor, 12, 420th prestige on BLOPS2

_Author: [GitHub](https://github.com/defaultnamehere)_ _Repo:
[GitHub](https://github.com/defaultnamehere/swagify)_

## Usage

```ts
import { swagify } from "https://deno.land/x/swagify/mod.ts";

console.log(swagify("Username to swagify"));
```

## Config (This is optional)

| Props               | Type     | Default |
| ------------------- | -------- | ------- |
| upperCaseChance     | `number` | 0.5     |
| letterReplaceChance | `number` | 0.8     |
| tripleChance        | `number` | 0.1     |
| maxTags             | `number` | 3       |

## Example

```ts
const name = swagify("Artemiy", {
  upperCaseChance: 0,
  letterReplaceChance: 1,
  tripleChance: 0,
  maxTags: 200,
});

console.log(name);
```

## Node

```bash
npm i @artemis69/swagify
```

```ts
import { swagify } from "@artemis69/swagify";

console.log(swagify("Username to swagify"));
```
