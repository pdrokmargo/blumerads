import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit, OnChanges {

  @Input() titleModal: string;
  @Input() subtitle: string;
  @Input() titlePrimaryBtn = '';
  @Input() titleSecundaryBtn = '';
  @Input() showSecundaryBtn = false;
  @Output() callBackModal = new EventEmitter<GenericModalI>();
  @ViewChild('closeModal') public closeModal: ElementRef;

  titleM: string = '';
  subtitleM: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['titleModal'].currentValue && this.titleModal) {
      this.titleM = this.titleModal;
    }

    if (changes['subtitle'].currentValue && this.subtitle) {
      this.subtitleM = this.subtitle;
    }
  }

  sendData(): void {
    if (!this.showSecundaryBtn) {
      this.callBackModal.emit({
        acept: true
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
  acept?: boolean
}
