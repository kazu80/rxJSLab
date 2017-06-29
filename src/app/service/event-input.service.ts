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

    public inputB(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'input');

        // pluckは、オブザーバーから指定した値(key)を抜く。
        // 下記の例では、elementから、target: {value: 'foo'}を抜いて、fooを出力する
        observable.pluck('target', 'value')
            .subscribe(value => console.log(value));
    }

    public inputC(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'input');

        // pairwiseは、前回の結果と今回の結果を配列にして返す
        observable.pluck('target', 'value').pairwise()
            .subscribe(value => console.log(value));
    }

    public inputD(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'input');

        // distinctは、同じ値が来たら流さない。
        // この例の場合は、対象はinputに入力されているvalueが対象なので注意
        observable.pluck('target', 'value').distinct()
            .subscribe(value => console.log(value));
    }

    public inputE(element: HTMLElement) {
        const observable = Observable.fromEvent(element, 'input');

        // .distinctUntilChangedは、流れてきた値が前回の値と同じ場合は流さない。
        // 前回は違う値で、前々回と同じ場合は流れる。
        observable.pluck('target', 'value').distinctUntilChanged()
            .subscribe(value => console.log(value));
    }
}
