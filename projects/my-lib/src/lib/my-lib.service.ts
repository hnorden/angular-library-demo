import { InjectionToken } from '@angular/core';

export const MY_IMPLEMENTATION = new InjectionToken<string>('MyAbstractLibServiceToken');

export abstract class MyAbstractLibService {

  constructor() { }

  public abstract getName(): string;
}
