import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { EventEmitter } from '@angular/core';
import { PlayModalComponent } from '../play-modal/play-modal.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;
  const modalServiceStub = {
    onHide: new EventEmitter(),
    show: jest.fn(),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayComponent ],
      providers: [
        BsModalRef,
        { provide: BsModalService, useValue: modalServiceStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the first photo',  fakeAsync(() => {
    const spy = jest.spyOn(modalServiceStub, 'show');
    spy.mockReturnValue(undefined);
    fixture.detectChanges();
    component.openModal();
    expect(spy).toHaveBeenCalledWith(PlayModalComponent, expect.any(Object));

  }));
});
