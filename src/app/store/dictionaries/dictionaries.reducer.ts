import { Dictionaries } from './dictionaries.models';
import * as fromAction from './dictionaries.actions';

export interface DictionariesState {
  entities: Dictionaries;
  loading: boolean;
  error: string;
}

const inicialState: DictionariesState = {
  entities: null,
  loading: null,
  error: null,
};

export function reducer(state = inicialState, action: any): DictionariesState {
  switch (action.type) {
    case fromAction.Types.READ: {
      return { ...state, loading: true, error: null };
    }

    case fromAction.Types.READ_SUCESS: {
      return {
        ...state,
        entities: action.dictionaries,
        loading: false,
      };
    }

    case fromAction.Types.READ_ERROR: {
      return {
        ...state,
        entities: null,
        error: action.error,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
