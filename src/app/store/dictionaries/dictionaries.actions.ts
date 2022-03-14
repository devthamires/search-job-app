import { Action } from '@ngrx/store';
import { Dictionaries } from './dictionaries.models';

export enum Types {
  READ = '[Dictionaries] Read: Start',
  READ_SUCESS = '[Dictionaries] Read: Sucess',
  READ_ERROR = '[Dictionaries] Read: Error',
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSucess implements Action {
  readonly type = Types.READ_SUCESS;

  constructor(public dictionaries: Dictionaries) {
    this.dictionaries = dictionaries;
  }
}

export class ReadError implements Action {
  readonly type = Types.READ_SUCESS;

  constructor(public error: string) {
    this.error = error;
  }
}

export type All = Read | ReadSucess | ReadError;
