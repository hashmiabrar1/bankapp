import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginServiceService } from './services/login-service/login-service.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerdetailsComponent } from './components/customerdetails/customerdetails.component';
import { CustomerRequestsComponent } from './components/customer-requests/customer-requests.component';
import { CustomerRequestsListComponent } from './components/customer-requests-list/customer-requests-list.component';
import { CustomerRequestDetailsComponent } from './components/customer-request-details/customer-request-details.component';
import { AccountslistComponent } from './components/accountslist/accountslist.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { RegisterCofirmationComponent } from './components/register-cofirmation/register-cofirmation.component';
import { ParentCustomerListComponent } from './components/parent-customer-list/parent-customer-list.component';
import { CustomerPortalComponent } from './components/customer-portal/customer-portal.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { StatementComponent } from './components/statement/statement.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as moment from 'moment';
// import { CustomerRequestsListComponent } from './customer-requests-list/customer-requests-list.component';
// import { MaincustomerlistComponent } from './components/maincustomerlist/maincustomerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    CustomerlistComponent,
    CustomerdetailsComponent,
    CustomerRequestsComponent,
    CustomerRequestsListComponent,
    CustomerRequestDetailsComponent,
    AccountslistComponent,
    CustomerloginComponent,
    RegisterCofirmationComponent,
    ParentCustomerListComponent,
    CustomerPortalComponent,
    UserpageComponent,
    TransfersComponent,
    StatementComponent,
    // MaincustomerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
