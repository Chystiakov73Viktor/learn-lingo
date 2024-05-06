import { createSelector } from '@reduxjs/toolkit';
import { selectTeacherData } from '../teachers/selects';
import { selectFavorites } from '../favorites/selects';
export const selectFilteredLanguages = state => state.filter.languagesFilter;
export const selectFilteredPrice = state => state.filter.priceFilter;
export const selectFilteredLevel = state => state.filter.levelFilter;

export const selectFilteredCard = createSelector(
  [
    selectTeacherData,
    selectFilteredLanguages,
    selectFilteredPrice,
    selectFilteredLevel,
  ],
  (teachers, languagesFiltered, priceFilter, levelFilter) => {
    let filteredCard = [];

      if (languagesFiltered) {
        filteredCard = filteredCard.concat(teachers.filter(card =>
          card.languages.some(language =>
            language.toLowerCase().includes(languagesFiltered.toLowerCase())
          )
        ));
      }

      if (priceFilter) {
        filteredCard = filteredCard.concat(teachers.filter(
          card => card.price_per_hour === Number(priceFilter)
        ));
      }

      if (levelFilter) {
        filteredCard = filteredCard.concat(teachers.filter(card =>
          card.levels.some(level =>
            level.toLowerCase().includes(levelFilter.toLowerCase())
          )
        ));
      }

      if (filteredCard.length === 0) {
        filteredCard = [...teachers];
      }

    return filteredCard;
  }
);

export const selectFilteredFavorites = createSelector(
  [
    selectFavorites,
    selectFilteredLanguages,
    selectFilteredPrice,
    selectFilteredLevel,
  ],
  (favorites, languagesFiltered, priceFilter, levelFilter) => {
    let filteredFavorites = [];

    if (languagesFiltered) {
      favorites.forEach(card => {
        if (!filteredFavorites.includes(card) && card.languages.some(language =>
          language.toLowerCase().includes(languagesFiltered.toLowerCase())
        )) {
          filteredFavorites.push(card);
        }
      });
    }

    if (priceFilter) {
      favorites.forEach(card => {
        if (!filteredFavorites.includes(card) && card.price_per_hour === Number(priceFilter)) {
          filteredFavorites.push(card);
        }
      });
    }

    if (levelFilter) {
      favorites.forEach(card => {
        if (!filteredFavorites.includes(card) && card.levels.some(level =>
          level.toLowerCase().includes(levelFilter.toLowerCase())
        )) {
          filteredFavorites.push(card);
        }
      });
    }

    if (filteredFavorites.length === 0) {
      filteredFavorites = [...favorites];
    }

    return filteredFavorites;
  }
);
