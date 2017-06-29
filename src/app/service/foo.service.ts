import {Injectable} from '@angular/core';

@Injectable()
export class FooService {
    private _input: any;


    constructor() {


    }

    get input(): any {
        return this._input;
    }

    set input(value: any) {
        this._input = value;
    }

    public click(observable: any) {
        observable.throttleTime(2000)
            .subscribe(() => console.log("foo"));
    }
}
