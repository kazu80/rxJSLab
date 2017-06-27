import {Injectable} from '@angular/core';

@Injectable()
export class EndpointService {
    private _url_foo: string;
    private _url_bar: string;

    constructor() {
        this._url_foo = 'http://foo.com/';
        this._url_bar = 'http://bar.com/';
    }

    get url_foo(): string {
        return this._url_foo;
    }

    get url_bar(): string {
        return this._url_bar;
    }
}
