import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {faBusAlt ,faHotel} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Hotel } from 'src/app/Models/hotel';
import { Package } from 'src/app/Models/package';
import { HotelService } from 'src/app/Services/hotel.service';
import { PackageService } from 'src/app/Services/package.service';
@Component({
  selector: 'app-pack-details',
  templateUrl: './pack-details.component.html',
  styleUrls: ['./pack-details.component.css']
})
export class PackDetailsComponent implements OnInit {
  faBus=faBusAlt
  faHotel=faHotel
  id!:any
  package!: Package;
  hotelrent:number=0;
  constructor(private router: Router, private route: ActivatedRoute,private toastr: ToastrService, private packageService: PackageService) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')? params.get('id') : undefined;
   
    })
    this.getPackage();
  }
  checkout(){
    localStorage.setItem('productId',(this.package.packageId).toString());
    localStorage.setItem('type',"package");
    this.router.navigate(['/checkout'])

  }
  getPackage(){
    this.packageService.getPackById(this.id).subscribe(data => {
     
      this.package = data;
    for (let h  of this.package.hotel) {
      this.hotelrent+=h.rent;
    }

    },(error) => { 
     
      if(error.status == 404)
     {
      this.toastr.info('No Package Found');
     }
      else{           
      this.toastr.error ('Error!');
      console.log(error);
      }
    }


    ) 
  }
}


