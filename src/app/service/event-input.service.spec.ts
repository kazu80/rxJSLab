import {TestBed, inject} from '@angular/core/testing';

import {EventInputService} from './event-input.service';

describe('EventInputService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventInputService]
        });
    });

    it('should be created', inject([EventInputService], (service: EventInputService) => {
        expect(service).toBeTruthy();
    }));
});
