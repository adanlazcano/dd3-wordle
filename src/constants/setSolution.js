import { WORDS } from "./words";

export const setSolution = (_) => {

  const filterFiveLetters = WORDS.filter((item) => item.length === 5);


  return filterFiveLetters[
    Math.floor(Math.random() * filterFiveLetters.length)
  ].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toUpperCase();
};
