import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DictionariesState } from './dictionaries.reducer';

export const getDirectionariesState =
  createFeatureSelector<DictionariesState>('dictionaries');

export const getDirectionaries = createSelector(
  getDirectionariesState,
  (state) => state.entities
);

export const getLoading = createSelector(
  getDirectionariesState,
  (state) => state.loading
);

export const getIsReady = createSelector(
  getDirectionariesState,
  (state) => state.entities && !state.loading
);

export const getRoles = createSelector(
  getDirectionaries,
  (state) => state.roles
);

export const getQualifications = createSelector(
  getDirectionaries,
  (state) => state.qualifications
);

export const getSpecializations = createSelector(
  getDirectionaries,
  (state) => state.specializations
);

export const getSkills = createSelector(
  getDirectionaries,
  (state) => state.skills
);
