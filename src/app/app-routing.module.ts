import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MyComponentComponent} from "./my-component/my-component.component";
import {YourComponentComponent} from "./your-component/your-component.component";

const routes: Routes = [
    {path: 'my-component', component: MyComponentComponent},
    {path: 'your-component', component: YourComponentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
