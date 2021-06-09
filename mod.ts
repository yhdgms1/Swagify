interface Config {
  upperCaseChance?: number;
  letterReplaceChance?: number;
  tripleChance?: number;
  maxTags?: number;
}

const defaults = {
  upperCaseChance: 0.5,
  letterReplaceChance: 0.8,
  tripleChance: 0.1,
  maxTags: 3,
};

const letterReplacements: { [index: string]: string } = {
  S: "$",
  A: "4",
  a: "@",
  l: "1",
  i: "1",
  I: "1",
  o: "0",
  s: "z",
  H: "#",
  z: "zzz",
  Z: "ZZZ",
  g: "ggg",
  G: "GGG",
  E: "3",
  e: "3",
  t: "+",
  D: "|)",
};

const decorations: string[] = [
  "x",
  "X",
  "xX",
  "xxx",
  "~",
  ".-~",
  "xXx",
  "XxX",
  "xxX_",
  "|",
  "./|",
  "@@@",
  "$$$",
  "***",
  "+",
  "|420|",
  ".::",
  ".:",
  ".-.",
  "|||",
  "--",
  "*--",
];

const tags: string[] = [
  "SHOTS FIRED",
  "420",
  "LEGIT",
  "360",
  "Pr0",
  "NO$$$cop3z",
  "0SC0pe",
  "MLG",
  "h4xx0r",
  "M4X$W4G",
  "L3G1TZ",
  "3edgy5u",
  "2edgy4u",
  "nedgy(n+2)u",
  "s0b4s3d",
  "SWEG",
  "LEGIT",
  "WUBWUBWUB",
  "BLAZEIT",
  "b14Z3d",
  "[le]G1t",
  "60x7",
  "24x7BLAZEIT",
  "4.2*10^2",
  "literally",
  "[le]terally",
  "1337",
  "l33t",
  "31337",
  "Tr1Ck$h0t",
  "SCRUBLORD",
  "DR0PTH3B4$$",
  "w33d",
  "ev REE DAI",
  "MTNDEW",
  "WATCH OUT",
  "EDGY",
  "ACE DETECTIVE",
  "90s KID",
  "NO REGRETS",
  "THANKS OBAMA",
  "SAMPLE TEXT",
  "FAZE",
  "#nofilter",
];

const randomChoice = (list: string[]): string => {
  return list[Math.floor(Math.random() * list.length)];
};

const decorate = (string: string): string => {
  const decoration = randomChoice(decorations);
  return decoration + string + decoration.split("").reverse().join("");
};

const addTags = (string: string, maxTags: number): string => {
  const numtags = Math.floor(Math.random() * maxTags);

  for (let i = 0; i < numtags; i += 1) {
    string = "[" + randomChoice(tags) + "]" + string;
  }

  return string;
};

const randomiseCase = (letter: string, upperCaseChance: number): string => {
  return Math.random() < upperCaseChance
    ? letter.toUpperCase()
    : letter.toLowerCase();
};

export function swagify(string: string, options?: Config): string {
  const { upperCaseChance, letterReplaceChance, tripleChance, maxTags } = {
    ...defaults,
    ...options,
  };

  const letters = string.split("");

  for (const i in letters) {
    if (Math.random() < letterReplaceChance) {
      const replacement = letterReplacements[letters[i]];
      if (replacement) {
        letters[i] = letterReplacements[letters[i]];
      }
    }
    letters[i] = randomiseCase(letters[i], upperCaseChance);
  }

  if (Math.random() < tripleChance) {
    const tripleIndex = Math.floor(Math.random() * letters.length);

    const letter = letters[tripleIndex];

    letters[tripleIndex] = letter.repeat(3);
  }

  string = letters.join("");

  string = decorate(string);
  string = addTags(string, maxTags);

  return string;
}
