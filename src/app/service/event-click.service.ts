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

    public counterA(element: HTMLElement, output: HTMLElement) {
        Observable.fromEvent(element, 'click')
            .scan((count: number) => count + 1, 0)
            .subscribe((count: number) => {
                output.innerText = String(count);
            });
    }

    public counterB(increaseElement: HTMLElement) {
        const increase = Observable.fromEvent(increaseElement, 'click')
            .map(() => state => Object.assign({}, state, {counter: state.count + 1}));

        const decrease = Observable.fromEvent(increaseElement, 'click')
            .map(() => (state: State) => Object.assign({}, state, {count: state.count - 1}));

        // const stateB = increase.scan((state, changeFn) => changeFn(state), {count: 0});
        // const stateB = Observable.merge(increase, decrease).scan((state, changeFn) => changeFn(state), {
        const stateB = Observable.merge(increase).scan((state, changeFn) => changeFn(state), {
            count     : 0,
            inputValue: ''
        });
    }

    /*
     public counterB(increaseElement: HTMLElement, decreaseElement: HTMLElement, inputElement: HTMLElement) {
     const increase = Observable.fromEvent(increaseElement, 'click')
     .map(() => (state: State) => Object.assign({}, state, {count: state.count + 1}));

     const decrease = Observable.fromEvent(decreaseElement, 'click')
     .map(() => (state: State) => Object.assign({}, state, {count: state.count - 1}));

     const input = Observable.fromEvent(inputElement, 'keypress')
     .map((event: any) => state => Object.assign({}, state, {inputValue: event.target.value}));

     const state = Observable.merge(
     increase,
     decrease,
     input
     ).scan((stateFoo: any, fooFn) => fooFn(stateFoo), {
     count: 0,
     inputValue: ''
     });
     }
     */
}

interface State {
    count: number
}
