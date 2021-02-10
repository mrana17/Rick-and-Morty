import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter, getCharacters, Character } from "../../utils/api";

export default {
  title: "Components/Card.ts",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Dead",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });
export const Summer = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (Replacement Dimension)" },
  });
export const Beth = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (Replacement Dimension)" },
  });
export const Jerry = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (Replacement Dimension)" },
  });
export const Abadango = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    origin: { name: "Abadango" },
  });
export const Abradolf = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    origin: { name: "Earth (Replacement Dimension)" },
  });
export const Adjudicator = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    origin: { name: "unknown" },
  });
export const Agency = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Agency Director",
    status: "Dead",
    species: "Human",
    origin: { name: "Earth (Replacement Dimension)" },
  });
export const Alan = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    origin: { name: "unknown" },
  });

export const Multiple = () => {
  const characters: Character[] = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      origin: { name: "Post-Apocalyptic Earth" },
    },
  ];

  const container = createElement("article", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

// export const CharacterFromAPI = (args, { loaded: { character } }) => {
//   return createCard(character);
// };

type CharacterFromAPIProps = {
  loaded: {
    character: Character;
  };
};

export const CharacterFromAPI = (
  args,
  { loaded: { character } }: CharacterFromAPIProps
) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(666),
  }),
];

// export const CharactersFromAPI = (args, { loaded: { characters } }) => {

type CharactersFromAPIProps = {
  loaded: {
    characters: Character[];
  };
};

export const CharactersFromAPI = (
  args,
  { loaded: { characters } }: CharactersFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const charactersFromAPIWithFilter = (
  args,
  { loaded: { characters } }
) => {
  const input = createElement("input", {
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });

  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "",
    childs: [input, characterContainer],
  });

  return container;
};

charactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load Random Character",
    onclick: async () => {
      // Verify each step (alert, console.log)
      // 1) generate random character id
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
      const randomCharacterID = Math.floor(Math.random() * 670) + 1;
      console.log({ randomCharacterID });
      // 2) getCharacter from API
      const randomCharacter = await getCharacter(randomCharacterID);
      console.log({ randomCharacter });
      // 3) create card
      const randomCharacterCard = createCard(randomCharacter);
      // console.log({ randomCharacterCard });
      // 4) append card
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      // 5) make sure to only display one character
      container.append(randomCharacterCard);
      // 6) feel awesome 🐱‍👤
      // function randomID(min, max) {
      //   min = Math.ceil(min);
      //   max = Math.floor(max);
      //   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      // }
      // const mixID = randomID(1, 671);
      // console.log({ mixID });
    },
  });
  const container = createElement("div", {
    className: "container",
    childs: [randomButton],
  });
  return container;
};
