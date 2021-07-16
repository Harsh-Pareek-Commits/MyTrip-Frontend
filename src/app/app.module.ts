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
import {AddTravelsComponent} from './AdminComponents/add-travels/add-travels.component'
import { DashBoardComponent } from './AdminComponents/dash-board/dash-board.component';
import {AddHotelComponent} from './AdminComponents/add-hotel/add-hotel.component';
import {AddPackageComponent} from './AdminComponents/add-package/add-package.component';
import {AddRouteComponent} from './AdminComponents/add-route/add-route.component';
import {ViewBookingComponent} from './AdminComponents/view-booking/view-booking.component';
import {ViewFeedbackComponent} from  './AdminComponents/view-feedback/view-feedback.component';
import {ViewReportComponent} from './AdminComponents/view-report/view-report.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';
import {AddAdminComponent} from './AdminComponents/add-admin/add-admin.component'

const appRoutes:Routes=[
  {path:'package',component: PackageComponent},
  {path:'package/:from/:to/:date',component: PackageComponent},
  {path:'myaccount',component: MyAccountComponent},
  {path:'home',component: HomeComponent},
  {path:'admin/travels',component: AddTravelsComponent},
  {path:'admin/addadmin',component: AddAdminComponent},
  {path:'admin/dashboard',component: DashBoardComponent},
  {path:'success',component: SuccessComponent},
  {path:'admin/hotel',component: AddHotelComponent},
  {path:'admin/package',component: AddPackageComponent},
  {path:'admin/bookings',component: ViewBookingComponent},
  {path:'admin/route',component: AddRouteComponent},
  {path:'admin/feedback',component: ViewFeedbackComponent},
  {path:'admin/report',component: ViewReportComponent},
  {path:'failure',component: FailureComponent},
  {path:'checkout',component: CheckoutComponent},
  {path:'signup',component: SignupComponent },
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
    DashBoardComponent,
    AddHotelComponent,
    AddPackageComponent,
    AddRouteComponent,
    ViewBookingComponent,
    ViewFeedbackComponent,
    ViewReportComponent,
    MyAccountComponent,
    AddTravelsComponent,
    AddAdminComponent
   
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
