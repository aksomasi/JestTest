import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayModalComponent } from './play-modal.component';
import { EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

describe('PlayModalComponent', () => {
  let component: PlayModalComponent;
  let fixture: ComponentFixture<PlayModalComponent>;
  const modalServiceStub = {
    onHide: new EventEmitter(),
    show: jest.fn(),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayModalComponent ],
      providers: [
        BsModalRef,
        { provide: BsModalService, useValue: modalServiceStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
