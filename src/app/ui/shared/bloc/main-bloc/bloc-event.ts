
export abstract class BlocEvent {
}

export class InitEvent<T> extends BlocEvent {
  constructor(public args?: T) {
    super();
  }
}



