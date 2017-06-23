import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ObservableNextComponent} from './observable-next.component';

describe('ObservableNextComponent', () => {
    let component: ObservableNextComponent;
    let fixture: ComponentFixture<ObservableNextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObservableNextComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture   = TestBed.createComponent(ObservableNextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
