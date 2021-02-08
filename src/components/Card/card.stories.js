import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Card",
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
