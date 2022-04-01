import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  options = [
    {
      imageUrl: 'https://cdn-0.generatormix.com/images/thumbs/cat-name-generator.jpg',
      value: 'cat'
    },
    {
      imageUrl: 'https://cdn-0.generatormix.com/images/thumbs/dog-name-generator.jpg',
      value: 'dog'
    },
  ];

  valueChanged(value: string){
    console.log(value);
  }
}
