import {Component, OnInit} from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

@Component({
    selector   : 'app-main',
    templateUrl: './observable-next.component.html',
    styleUrls  : ['./observable-next.component.scss']
})
export class ObservableNextComponent implements OnInit {
    step: number;
    foo: any;

    constructor() {
    }

    ngOnInit() {
        this.step = 1;

        this.foo = Observable.create(function (observer: any) {
            observer.next();
        });
        this.foo.scan((count: number) => count++)
    }

    click() {

        switch (this.step) {
            case 1:

                console.log("foo");

                break;
            case 2:

                console.log("bar");

                break;
            case 3:

                console.log("baz");

                break;
        }

        this.foo.subscribe({
            next    : (count: number) => {
                this.step++;
            },
            complete: () => console.log('done'),
        });

    }
}
