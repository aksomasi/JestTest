import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PlayModalComponent } from '../play-modal/play-modal.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent  {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(PlayModalComponent,  {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }
}
