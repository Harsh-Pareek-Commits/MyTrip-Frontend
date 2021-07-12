import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Package } from 'src/app/Models/package';
import { PackageService } from 'src/app/Services/package.service';
import {faHotel,faBus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  source: any
  dest: any=undefined
  dte: any=undefined
  package !: Package[];
  flag!:boolean;
  faHotel=faHotel;
  faBus=faBus;
  constructor(private router: Router, private route: ActivatedRoute,private toastr: ToastrService, private packageService: PackageService) {

  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.source = params.get('from')? params.get('from') : undefined;
      this.dest = params.get('to')? params.get('to') : undefined;
      this.dte = params.get('date')? params.get('date') : undefined;
      console.log("DATE "+this.dte)
    }
   
    )
 this.getPackage();
  }

  packdetails(packageId:number){
this.router.navigate(['/pack',packageId])
  }
  getPackage() {
   
    if ( this.source) {
      console.log("HI");
      this.packageService.getPack(this.source, this.dest, this.dte).subscribe(
        data => {
          this.flag=true;
        this.package = data;
        },
        (error) => { 
          this.flag=false;
          if(error.status == 404)
          {
           this.toastr.warning('No Package Found');
          }
           else{           
           this.toastr.error ('Error!');
           console.log(error);
           }
        }


      )
    }
    else {
      { console.log("HI 2");
        this.packageService.getAllPack().subscribe(data => {
          this.flag=true;
          this.package = data;

        },(error) => { 
          this.flag=false;
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
  }

}
