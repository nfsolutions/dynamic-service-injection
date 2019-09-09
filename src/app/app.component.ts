import { Component, Injector } from '@angular/core';
import { MyService } from './my.service';
import { YourService } from './your.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  myService;
  
  constructor(private injector : Injector){
    if(false){
      this.myService = injector.get<MyService>(MyService);
    } else {
      this.myService = injector.get<YourService>(YourService);
    }
  }


}
