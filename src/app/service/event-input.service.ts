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
}
