import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter } from "../../utils/api";
import { getCharacters } from "../../utils/api";

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
    const characters = [
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

  export const CharacterFromAPI = (args, { loaded: { character } }) => {
    return createCard(character);
  };
  
  CharacterFromAPI.loaders = [
    async () => ({
      character: await getCharacter(666),
    }),
  ];

  export const CharactersFromAPI = (args, { loaded: { characters } }) => {
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