import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Gilbert';
  item = [{
  nama : 'kelengkeng',
  harga : 10000
  },
  {
nama : 'jeruk',
  harga : 15000
  }];

itemArr = [1,2,3,4];

show : boolean = true;

user = {
    nama:'haha'
  };

  Pesan = '';
  KlikButton()
  {
    this.Pesan = ' Tombol di tekan';
  }
}



