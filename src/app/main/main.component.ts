import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Subscribeで実行される
    Observable.of(1, 2, 3).map(x => x + '!!!').subscribe(x => console.log(x));

    const button = document.getElementById('button');

    // scanは、前回の値を引数に取る。第2引数はでデフォルト値
    // throttleTimeは、指定した時間Subscribeさせない（キャンセルする）
    // mapで新しい値を生成して流している
    Observable.fromEvent(button, 'click')
        .throttleTime(1000)
        .map((event: any) => event.clientX)
        .scan((count: any, clientX: any) => count + clientX, 0)
        .subscribe((count: any) => console.log(count));

    // Observableを新規生成
    // nextの内容はsubscribeに書く
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
  }


}
