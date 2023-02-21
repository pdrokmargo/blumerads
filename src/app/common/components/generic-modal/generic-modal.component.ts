import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit, OnChanges {

  @Input() titleModal: string = 'Mi Title';
  @Input() subtitle: string = 'Mi Subtitle';
  @Input() titlePrimaryBtn = 'Mi primary button';
  @Input() titleSecundaryBtn = 'Mi secundary button';
  @Input() modalId: string;
  @Input() showSecundaryBtn = false;
  @Output() callBackModal = new EventEmitter<GenericModalI>();
  @ViewChild('closeModal') public closeModal: ElementRef;

  titleM: string = '';
  subtitleM: string = '';
  modalIdAttr: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['titleModal'].currentValue && this.titleModal) {
      this.titleM = this.titleModal;
    }

    if (changes['subtitle'].currentValue && this.subtitle) {
      this.subtitleM = this.subtitle;
    }

    if (this.modalId) {
      this.modalIdAttr = this.modalId;
    }
  }

  sendData(): void {
    if (!this.showSecundaryBtn) {
      this.callBackModal.emit({
        accept: true
      });
    } else {
      this.callBackModal.emit({
        hasSend: true
      });
    }
  }

  cancel(): void {
    this.callBackModal.emit({
      hasCancel: true
    })
  }
}

export interface GenericModalI {
  hasSend?: boolean,
  hasCancel?: boolean,
  accept?: boolean
}
