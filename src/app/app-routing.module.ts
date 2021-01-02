import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './project/auth/auth.component';
import { EmpSearchComponent } from './project/emp-search/emp-search.component';
import { EmployeeComponent } from './project/employee/employee.component';

const routes: Routes = [
  {path: '' , component: EmployeeComponent},
  {path: 'search' , component: EmpSearchComponent},
  {path: 'login' , component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
