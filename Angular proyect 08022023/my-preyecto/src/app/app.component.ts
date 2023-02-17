import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private http: HttpClient){}
  title = 'Aprendiendo';

  price: number = 0;
  host_location: string = "";
  airBnbData: any = [];
  images: string = "";

  sendHotel(){
    console.log(this.price, this.host_location);
    this.http
    .post(`http://localhost:4005/consulta`, {price: this.price, host: this.host_location})
    .subscribe((result:any)=>{
      this.airBnbData = result.data;
      console.log(result.data)
      console.log(this.images);
    });
  }
}





