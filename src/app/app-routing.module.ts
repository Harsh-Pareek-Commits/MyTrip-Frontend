import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './AdminComponents/add-admin/add-admin.component';
import { AddHotelComponent } from './AdminComponents/add-hotel/add-hotel.component';
import { AddPackageComponent } from './AdminComponents/add-package/add-package.component';
import { AddRouteComponent } from './AdminComponents/add-route/add-route.component';
import { AddTravelsComponent } from './AdminComponents/add-travels/add-travels.component';
import { DashBoardComponent } from './AdminComponents/dash-board/dash-board.component';
import { ViewBookingComponent } from './AdminComponents/view-booking/view-booking.component';
import { ViewFeedbackComponent } from './AdminComponents/view-feedback/view-feedback.component';
import { ViewReportComponent } from './AdminComponents/view-report/view-report.component';
import { BookingDetailsComponent } from './Components/booking-details/booking-details.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { FailureComponent } from './Components/failure/failure.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PackDetailsComponent } from './Components/pack-details/pack-details.component';
import { PackageComponent } from './Components/package/package.component';
import { ReportComponent } from './Components/report/report.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SuccessComponent } from './Components/success/success.component';


const appRoutes:Routes=[
  {path:'package',component: PackageComponent },
  {path:'login',component: LoginComponent },
 {path:'package/:from/:to/:date',component: PackageComponent},
   {path:'report/:id',component: ReportComponent},
  {path:'feedback',component: FeedbackComponent},
 {path:'myaccount',component: MyAccountComponent},
 {path:'booking',component: BookingsComponent},
 {path:'details/:id',component: BookingDetailsComponent},
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
