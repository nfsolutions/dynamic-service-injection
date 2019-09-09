import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {YourService} from "../your.service";
import {MyService} from "../my.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  private service: MyService;
  private route: ActivatedRouteSnapshot;

  constructor(private activatedRoute: ActivatedRoute, private injector: Injector) {
    this.route = activatedRoute.snapshot['_routerState'].url;
    console.log(activatedRoute.snapshot['_routerState'].url);
    if (this.route && this.route.toString() === '/my-component') {
      this.service = injector.get<MyService>(MyService);
    } else {
      this.service = injector.get<YourService>(YourService);
    }
  }

  ngOnInit() {
  }

  printName(): string {
    return this.service.print();
  }

}
