import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { PackageComponent } from './Components/package/package.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PackDetailsComponent } from './Components/pack-details/pack-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { SuccessComponent } from './Components/success/success.component';
import { FailureComponent } from './Components/failure/failure.component';
import { NavBarComponent } from './AdminComponents/nav-bar/nav-bar.component';
import { DashBoardComponent } from './AdminComponents/dash-board/dash-board.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';


const appRoutes:Routes=[
  {path:'package',component: PackageComponent},
  {path:'package/:from/:to/:date',component: PackageComponent},
  {path:'home',component: HomeComponent},
  {path:'success',component: SuccessComponent},
  {path:'failure',component: FailureComponent},
  {path:'bookings',component: BookingsComponent},
  {path:'checkout',component: CheckoutComponent},
  {path:'',component: HomeComponent},
  {path:'pack/:id',component: PackDetailsComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PackageComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    PackDetailsComponent,
    CheckoutComponent,
    SuccessComponent,
    FailureComponent,
    NavBarComponent,
    DashBoardComponent,
    BookingsComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
