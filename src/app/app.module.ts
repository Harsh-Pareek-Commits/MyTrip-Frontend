import { ReportComponent } from './Components/report/report.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule,appRoutes } from './app-routing.module';
=======
import { AppRoutingModule ,appRoutes} from './app-routing.module';
>>>>>>> Mytrip/iflak
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
import {BookingDetailsComponent} from './Components/booking-details/booking-details.component';
import {BookingsComponent} from './Components/bookings/bookings.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PackDetailsComponent } from './Components/pack-details/pack-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { SuccessComponent } from './Components/success/success.component';
import { FailureComponent } from './Components/failure/failure.component';
import {AddTravelsComponent} from './AdminComponents/add-travels/add-travels.component'
import { DashBoardComponent } from './AdminComponents/dash-board/dash-board.component';
import {AddHotelComponent} from './AdminComponents/add-hotel/add-hotel.component';
import {AddPackageComponent} from './AdminComponents/add-package/add-package.component';
import {AddRouteComponent} from './AdminComponents/add-route/add-route.component';
import {ViewBookingComponent} from './AdminComponents/view-booking/view-booking.component';
import {ViewFeedbackComponent} from  './AdminComponents/view-feedback/view-feedback.component';
import {ViewReportComponent} from './AdminComponents/view-report/view-report.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';
import {AddAdminComponent} from './AdminComponents/add-admin/add-admin.component';
import { FeedbackComponent } from './Components/feedback/feedback.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    BookingDetailsComponent,
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
    DashBoardComponent,
    AddHotelComponent,
    AddPackageComponent,
    AddRouteComponent,
    ViewBookingComponent,
    ViewFeedbackComponent,
    ViewReportComponent,
    MyAccountComponent,
    AddTravelsComponent,
    AddAdminComponent,
  
    ReportComponent,

    FeedbackComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
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
