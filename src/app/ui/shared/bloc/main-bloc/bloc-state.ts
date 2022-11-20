export abstract class BlocState {}

export abstract class InitState extends BlocState {
  constructor() {
    super();
  }
}



//Ready state
export class ReadyState<T> extends BlocState {
  constructor(public data?: T | T[], public count?: number) {
    super();
  }
}


