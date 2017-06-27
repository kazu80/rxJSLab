import { Component, OnInit } from '@angular/core';
import {Observable, Subject, BehaviorSubject, Scheduler} from 'rxjs/Rx';
import {EndpointService} from "../service/endpoint.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private num: number;
    private input: any;

    constructor(private endpoint_service: EndpointService) {
    }

  ngOnInit() {
    // Subscribeで実行される
      // Observable.of(1, 2, 3).map(x => x + '!!!').subscribe(x => console.log(x));

      // const button = document.getElementById('button');

    // scanは、前回の値を引数に取る。第2引数はでデフォルト値
    // throttleTimeは、指定した時間Subscribeさせない（キャンセルする）
    // mapで新しい値を生成して流している
      /*
    Observable.fromEvent(button, 'click')
        .throttleTime(1000)
        .map((event: any) => event.clientX)
        .scan((count: any, clientX: any) => count + clientX, 0)
        .subscribe((count: any) => console.log(count));
       */

    // Observableを新規生成
    // nextの内容はsubscribeに書く
      /*
    const observable = Observable.create(function (observer: any) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next: (x: any) => console.log('got value ' + x),
      error: (err: any) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
       */

      /*
       const observable = Observable.create(function subscribe(observer) {
       const id = setInterval(() => {
       observer.next('hi')
       }, 1000);
       });
       observable.subscribe(x => console.log(x));
       */

      /**
       * subjectは、マルチキャストなオブザーバ
       * 他のsubscribeの引数に指定することも可能（ストリームを2本に分ける？）
       */
      /*
      const subject = new Subject();

      subject.subscribe({
          next: (v: number) => console.log(v)
      });

      subject.subscribe({
          next: (v: number) => console.log(v)
      });

      const observable = Observable.from([1, 2, 3]);
      observable.subscribe(subject);
       */

      /*
       const source = Observable.from([1, 2, 3]);
       const subject = new Subject();
       const multicasted = source.multicast(subject);

       multicasted.subscribe({
       next: (v) => console.log('observerA:' + v)
       });
       multicasted.subscribe({
       next: (v) => console.log('observerB:' + v)
       });

       multicasted.connect();
       */

      /*
       const source  = Observable.interval(500);
       const subject = new Subject();
       const multicasted = source.multicast(subject);
       let subscription1, subscription2, subscriptionConnect;

       subscription1 = multicasted.subscribe({
       next: (v) => console.log('observerA:' + v)
       });

       subscriptionConnect = multicasted.connect();

       setTimeout(() => {
       subscription2 = multicasted.subscribe({
       next: (v) => console.log('observerB:' + v)
       });
       }, 600);

       setTimeout(() => {
       subscription1.unsubscribe();
       }, 1200);


       setTimeout(() => {
       subscription2.unsubscribe();
       subscriptionConnect.unsubscribe();
       }, 2000);
       */

      /*
       const source = Observable.interval(500);
       const subject = new Subject();
       const refCounted = source.multicast(subject).refCount();
       let subscription1, subscription2, subscriptionConnect;

       console.log("observerA subscribed");
       subscription1 = refCounted.subscribe({
       next: (v) => console.log('observerA:' + v)
       });

       setTimeout(() => {
       console.log('observerB subscribed');
       subscription2 = refCounted.subscribe({
       next: (v) => console.log('observerB:' + v)
       });
       }, 600);

       setTimeout(() => {
       console.log("observerA unsubscribed");
       subscription1.unsubscribe();
       }, 1200);

       setTimeout(() => {
       console.log("observerB unsubscribed");
       subscription2.unsubscribe();
       }, 2000);
       */

      /*
       const subject = new BehaviorSubject(0);

       subject.subscribe({
       next: (v) => console.log('observerA:' + v)
       });

       subject.next(1);
       subject.next(2);

       subject.subscribe({
       next: (v) => console.log('observerB:' + v)
       });

       subject.next(3);
       */

      /*
      const subject = new ReplaySubject(2);

      subject.subscribe({
          next: (v) => console.log('observerA:' + v)
      });

      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.next(4);

      subject.subscribe({
          next: (v) => console.log('observerB:' + v)
      });

      subject.next(5);
       */

      /*
       const observable = Observable.create(function (observer) {
       observer.next(1);
       observer.next(2);
       observer.next(3);
       observer.complete();
       })
       .observeOn(Scheduler.async);

       console.log('just before subscribe');
       observable.subscribe({
       next: x => console.log('got value ' + x),
       error: err => console.error('somthing wrong occurred:' + err),
       complete: () => console.log('done'),
       });
       console.log('just after subscribe');
       */

      // this.input = Observable.fromEvent(document.querySelector('button'), 'click')
  }

    public click(event) {

        // http://foo.com/
        /*
         const myObservable = new Subject();
         myObservable.subscribe(value => console.log(value));
         myObservable.next(this.endpoint_service.url_foo);
         */

        // http://bar.com/
        /*
         const myObservable = Observable.create(observer => {
         observer.next(this.endpoint_service.url_bar);
         });
         myObservable.subscribe(value => console.log(value));
         */


        // myObservable.next(this.num);

        // myObservable.delay(200).subscribe(value => console.log(value));


    }

    click2() {

  }
}
