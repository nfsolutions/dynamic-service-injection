import {Component, Injector, OnInit} from '@angular/core';
import {MyService} from "../my.service";
import {YourService} from "../your.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
    selector: 'app-your-component',
    templateUrl: './your-component.component.html',
    styleUrls: ['./your-component.component.css']
})
export class YourComponentComponent implements OnInit {
    private service: MyService;
  private route: ActivatedRouteSnapshot;

    constructor(private activatedRoute: ActivatedRoute, private injector: Injector) {
      this.route = activatedRoute.snapshot['_routerState'].url;
      console.log(activatedRoute.snapshot['_routerState'].url);
      if (this.route && this.route.toString() === '/your-component') {
            this.service = injector.get<YourService>(YourService);
        } else {
            this.service = injector.get<MyService>(MyService);
        }
    }

    ngOnInit() {

    }

  printName(): string {
    return this.service.print();
  }

}
