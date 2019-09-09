import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {MyService} from './my.service';
import {YourService} from "./your.service";
import {MyComponentComponent} from './my-component/my-component.component';
import {YourComponentComponent} from './your-component/your-component.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, HelloComponent, MyComponentComponent, YourComponentComponent],
    bootstrap: [AppComponent],
    providers: [MyService, YourService]
})
export class AppModule {
}
