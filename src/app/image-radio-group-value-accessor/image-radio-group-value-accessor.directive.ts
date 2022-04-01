import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const IMAGE_RADIO_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ImageRadioGroupValueAccessor),
  multi: true,
};

@Directive({
  selector:
    "app-image-radio-group[formControlName],app-image-radio-group[ngModel],textarea[ngModel]",
  //,[ngDefaultControl]',

  host: {
    "(valueChanged)": "$any(this).onChange($event.target.value)",
    // '(blur)': 'onTouched()',
  },
  providers: [IMAGE_RADIO_GROUP_VALUE_ACCESSOR],
})
export class ImageRadioGroupValueAccessor implements ControlValueAccessor {
  constructor(elementRef: ElementRef) {}

  writeValue(value: any): void {
    //const normalizedValue = value == null ? '' : value;
    // this.setProperty('value', normalizedValue);
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  // protected setProperty(key: string, value: any): void {
  //   this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  // }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // setDisabledState(isDisabled: boolean): void {
  //   this.setProperty('disabled', isDisabled);
  // }
}
