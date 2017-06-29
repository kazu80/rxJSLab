import {Injectable} from '@angular/core';
import {Observable, Subject, BehaviorSubject, Scheduler} from 'rxjs/Rx';

@Injectable()
export class EventClickService {

    constructor() {
    }

    public buttonA(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'click');
        observable.throttleTime(2000)
            .subscribe(() => console.log("foo"));
    }

    public buttonB(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'click');
        observable.throttleTime(2000)
            .subscribe(() => console.log("bar"));
    }
}
