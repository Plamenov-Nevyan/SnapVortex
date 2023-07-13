import { TestBed } from '@angular/core/testing';

import { ModalInteractionsService } from './modal-interactions.service';

describe('ModalInteractionsService', () => {
  let service: ModalInteractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalInteractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
