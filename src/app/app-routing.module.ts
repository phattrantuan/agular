import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router , RouterModule, Routes} from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  { path: 'a', component: CustomerComponent },
  { path: 'b', component: AboutComponent },
  { path: '', component: AboutComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
