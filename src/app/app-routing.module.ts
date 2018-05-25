import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component'
import { CustomersComponent } from './customers/customers.component';

export const routes : Routes =
[
    { path: 'Product', component: ProductComponent },
    { path: 'Customer', component: CustomersComponent }
];


export class AppRoutingModule { }
