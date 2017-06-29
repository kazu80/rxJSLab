import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventInputService {

    constructor() {
    }

    public inputA(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'input');

        observable.map((event: any) => event.target.value)
            .subscribe(value => console.log(value));
    }
}
