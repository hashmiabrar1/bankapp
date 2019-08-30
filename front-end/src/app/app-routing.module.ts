import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { AuthGuardGuard } from './guards/AuthGuard/auth-guard.guard';
// import { LoginGuard } from './guards/Login/login.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { CustomerdetailsComponent } from './components/customerdetails/customerdetails.component';
import { CustomerRequestsListComponent } from './components/customer-requests-list/customer-requests-list.component';
import { CustomerRequestDetailsComponent } from './components/customer-request-details/customer-request-details.component';
import { CustomerRequest } from './classes/customer-request';
import { CustomerRequestsComponent } from './components/customer-requests/customer-requests.component';
import { AccountslistComponent } from './components/accountslist/accountslist.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { RegisterCofirmationComponent } from './components/register-cofirmation/register-cofirmation.component';
import { ParentCustomerListComponent } from './components/parent-customer-list/parent-customer-list.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { StatementComponent } from './components/statement/statement.component';
// import { MaincustomerlistComponent } from './components/maincustomerlist/maincustomerlist.component';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full'}, //canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent},// canActivate: [LoginGuard] },
  { path: "user/:uid", component: UserpageComponent},
  {path: "transfer/:uid", component: TransfersComponent},
  {path:"statement/:uid", component: StatementComponent},
  { path: "customerLogin", component: CustomerloginComponent},
  { path: "customerlist", component: ParentCustomerListComponent},
  { path: "pagenotfound", component: PagenotfoundComponent},
  { path: "customerdetails/:username", component: CustomerdetailsComponent},
  // { path: "maincustomerlist", component: MaincustomerlistComponent},// canActivate: [AuthGuardGuard] },
  { path: "register", component: RegisterComponent},// canActivate: [LoginGuard] },
  { path: "registerConfirmation/:customerId", component: RegisterCofirmationComponent},
  { path: "customerRequests", component: CustomerRequestsComponent}, 
  { path: "customerRequestsList", component: CustomerRequestsListComponent},
  { path: "accountsList/:uid", component: AccountslistComponent},
  { path: "customerRequestDetails", component: CustomerRequestDetailsComponent},
  // { path: "AccountsList/:customerId", component: AccountslistComponent},
  { path: "**", redirectTo: '/login', pathMatch: 'full'}// canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
