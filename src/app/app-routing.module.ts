import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PackageComponent } from './Components/package/package.component';


const appRoutes:Routes=[
  {path:'package',component: PackageComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
