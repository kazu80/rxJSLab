import {TestBed, inject} from '@angular/core/testing';

import {EventClickService} from './event-click.service';

describe('EventClickService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventClickService]
        });
    });

    it('should be created', inject([EventClickService], (service: EventClickService) => {
        expect(service).toBeTruthy();
    }));
});
