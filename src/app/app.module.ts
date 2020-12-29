import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './project/employee/employee.component';
import { EmpSearchComponent } from './project/emp-search/emp-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
