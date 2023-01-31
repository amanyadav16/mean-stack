import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  @Input() actionName:any;
  @Input() actionInfo:any;
  @Input() button1Name:any;
  @Input() button2Name:any;
  @Output() button1Clicked:EventEmitter<any>=new EventEmitter();
  @Output() button2Clicked:EventEmitter<any>=new EventEmitter();

  onbutton1Clicked(){
    this.button1Clicked.emit();
  }
  onbutton2Clicked(){
    this.button2Clicked.emit();
  }
}
