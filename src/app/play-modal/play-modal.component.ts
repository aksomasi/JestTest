import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-play-modal',
  templateUrl: './play-modal.component.html',
  styleUrls: ['./play-modal.component.scss']
})
export class PlayModalComponent implements OnInit {

  title;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }


}
