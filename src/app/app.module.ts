import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ImageRadioGroupComponent } from "./image-radio-group/image-radio-group.component";
import { ImageRadioGroupValueAccessor } from "./image-radio-group-value-accessor/image-radio-group-value-accessor.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ImageRadioGroupComponent,
    ImageRadioGroupValueAccessor,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
