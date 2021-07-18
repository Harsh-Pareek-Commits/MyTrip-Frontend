import { Hotel } from 'src/app/Models/hotel';
import { Route } from 'src/app/Models/route';
import { PackageService } from 'src/app/Services/package.service';
import { Package } from 'src/app/Models/package';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { HotelService } from 'src/app/Services/hotel.service';
import { RoutesService } from 'src/app/Services/routes.service';
import { PackageEntityDto } from 'src/app/EntityDtoModels/package-entity-dto';
import { HotelEntityDto } from 'src/app/EntityDtoModels/hotel-entity-dto';
import { RouteEntityDto } from 'src/app/EntityDtoModels/route-entity-dto';
@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  addPackageForm!: FormGroup;
  faGoogle = faGooglePlusG;
  submitted = false;
  listPackage!: Package[];
  listRoute!: Route[];
  listHotel!: Hotel[];
  addHotelList: HotelEntityDto[] = [];
  constructor(private packageservice: PackageService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router, private hotelService: HotelService, private routeService: RoutesService) { }

  ngOnInit(): void {

    this.initForm();
    this.getPackage();
    this.viewRoute();
    this.viewHotel();
  }
  initForm() {
    this.addPackageForm = this.formBuilder.group({
      packName: ["", [Validators.required]],
      packDesc: ["", [Validators.required]],
      packType: ["", [Validators.required]],
      packCost: ["", [Validators.required]],
      route: ["", [Validators.required]],
      hotel: ["", [Validators.required]],

    })
  }
  get control() {

    return this.addPackageForm.controls;
  }
  addPackage() {
    this.submitted = true;

    if (this.addPackageForm.valid) {
      console.log(this.addPackageForm.value);
      var hotelIdList: number[] = this.addPackageForm.get('hotel')?.value

      for (var hotelid in hotelIdList) {
        var id: number = hotelIdList[hotelid]
        this.hotelService.getHotel(id).subscribe(data => {
          this.addHotelList.push(data);
        }, (error) => {
          if (error.status === 404) {
            this.toastr.info("Selected hotel not found! Try again")
            this.router.navigate(['/admin/package'])
          } else if (error.status === 403) {
            this.toastr.error("Please login first!")
            this.router.navigate(['/login'])
          }
          else {
            console.log(error);
            this.router.navigate(['/admin/package'])
            this.toastr.error("Something went wrong")
          }
        })
      }
      var route: Route;
      this.routeService.getRouteById(this.addPackageForm.get('route')?.value).subscribe(data => {
        route = data;
        console.log(route)
      var addroute=new RouteEntityDto(route?.routeId,route?.routeFrom,route?.routeTo,route?.buses,route?.departureDate,
                                     route?.arrivalDate,route?.arrivalTime,route?.departureTime,route?.duration,route?.pickupPoint,route?.fare);
      var pack = new PackageEntityDto(0,this.addPackageForm.get('packName')?.value,this.addPackageForm.get('packDesc')?.value,this.addPackageForm.get('packType')?.value,addroute,this.addHotelList,this.addPackageForm.get('packCost')?.value)
      console.log(pack.route)
      this.packageservice.addPack(pack).subscribe(data=>{
        var pack2=data;
        this.toastr.success("Package Added")
        this.router.navigate(['/admin/package'])
        .then(() => {
          window.location.reload();
        });
      }, (error) => {
            console.log(error);
            this.router.navigate(['/admin/package'])
            this.toastr.error("Something went wrong")
          
        })
      }, (error) => {
        if (error.status === 404) {
          this.toastr.info("Selected route not found! Try again")
          this.router.navigate(['/admin/package'])
        } else if (error.status === 403) {
          this.toastr.error("Please login first!")
          this.router.navigate(['/login'])
        }
        else {
          console.log(error);
          this.router.navigate(['/admin/package'])
          this.toastr.error("Something went wrong")
        }
      })
     
    
    }
  }
  getPackage() {
    this.packageservice.getAllPack().subscribe(data => {
      this.listPackage = data;
    }, (error) => {
      if (error.status === 404) {
        this.toastr.info("No Package found! Try again")
        this.router.navigate(['/admin/package'])
      } else if (error.status === 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/admin/dashboard'])
        this.toastr.error("Something went wrong")
      }
    })
  }
  viewRoute() {
    this.packageservice.viewRoute().subscribe(data => {
      this.listRoute = data;
    }, (error) => {
      if (error.status === 404) {
        this.toastr.info("No Route found! Try again")
        this.router.navigate(['/admin/package'])
      } else if (error.status === 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/admin/dashboard'])
        this.toastr.error("Something went wrong")
      }
    })
  }
  viewHotel() {
    this.packageservice.viewHotel().subscribe(data => {
      this.listHotel = data;
    }, (error) => {
      if (error.status === 404) {
        this.toastr.info("No Hotels found! Try again")
        this.router.navigate(['/admin/package'])
      } else if (error.status === 403) {
        this.toastr.error("Please login first!")
        this.router.navigate(['/login'])
      }
      else {
        console.log(error);
        this.router.navigate(['/admin/dashboard'])
        this.toastr.error("Something went wrong")
      }
    })
  }

}
