const UPPERCASE_CHANCE = 0.5;
const LETTER_REPLACE_CHANCE = 0.8;
const TRIPLE_CHANCE = 0.1;
const MAX_TAGS = 4;

const letter_replacements: { [index: string]: string } = {
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

const decorations: Array<string> = [
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

const tags: Array<string> = [
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

const random_choice = (list: Array<string>): string => {
  return list[Math.floor(Math.random() * list.length)];
};

const decorate = (string: string): string => {
  const decoration = random_choice(decorations);
  return decoration + string + decoration.split("").reverse().join("");
};

const add_tags = (string: string): string => {
  const numtags = Math.floor(Math.random() * MAX_TAGS);

  for (let i = 0; i < numtags; i += 1) {
    string = "[" + random_choice(tags) + "]" + string;
  }

  return string;
};

const randomise_case = (letter: string): string => {
  return Math.random() < UPPERCASE_CHANCE
    ? letter.toUpperCase()
    : letter.toLowerCase();
};

export function swagify(string: string): string {
  let letters = string.split("");

  for (let i in letters) {
    if (Math.random() < LETTER_REPLACE_CHANCE) {
      let replacement: unknown = letter_replacements[letters[i]];
      if (replacement) {
        letters[i] = letter_replacements[letters[i]];
      }
    }
    letters[i] = randomise_case(letters[i]);
  }

  if (Math.random() < TRIPLE_CHANCE) {
    const triple_index = Math.floor(Math.random() * letters.length);

    let letter = letters[triple_index];

    letters[triple_index] = letter.repeat(3);
  }

  string = letters.join("");

  string = decorate(string);
  string = add_tags(string);

  string = string.replace("le", "[le]");

  return string;
}
