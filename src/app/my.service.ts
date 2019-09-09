import { Injectable } from '@angular/core';

@Injectable()
export class MyService implements Service {

  constructor() { }

  print(): string {
    return 'myservice';
  }
}
