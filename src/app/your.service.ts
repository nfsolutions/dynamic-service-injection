import {Injectable} from '@angular/core';


@Injectable()
export class YourService implements Service {

    constructor() {
    }

    print(): string {
        return 'yourservice';
    }
}
