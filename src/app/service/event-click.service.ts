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

        // debounceTimeは、指定秒後に発火させる。発火前のイベントは拒否される
        observable.debounceTime(2000)
            .subscribe(() => console.log("bar"));
    }

    public buttonC(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'click');

        // takeは、指定回数以上発火させない。時間を置いたとしても発火しない
        observable.take(3)
            .subscribe(() => console.log("baz"));
    }

    public buttonD(element: HTMLElement, element_b: HTMLElement) {
        const observable_a = Observable.fromEvent(element, 'click');
        const observable_b = Observable.fromEvent(element_b, 'click');

        // takeUntilは、指定したオブザーバーが反応していない場合のみ発火する。指定したオブザーバーが反応後は時間を置いたとしても発火しない
        observable_a.takeUntil(observable_b)
            .subscribe(() => console.log("qux"));
    }
}
