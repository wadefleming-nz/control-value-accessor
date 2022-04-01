import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-radio-group',
  templateUrl: './image-radio-group.component.html',
  styleUrls: ['./image-radio-group.component.css'],
})
export class ImageRadioGroupComponent {
  @Input() options: { imageUrl: string; value: string }[];
  @Input() selected: string;
  @Output() valueChanged = new EventEmitter<string>();

  //value: string;

  imageClicked(value: string){
    this.selected = value;
    this.valueChanged.emit(value);
  }
}
