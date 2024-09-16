import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Package } from 'src/app/Models/package';
import { PackageService } from 'src/app/Services/package.service';
import { faHotel, faBus } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from 'src/environments/environment';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  source: any
  dest: any = undefined
  dte: any = undefined
  package !: Package[];
  flag!: boolean;
  faHotel = faHotel;
  faBus = faBus;
  sort!: any;
  newsort!: any;
  sortby!: any;
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private packageService: PackageService) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.source = params.get('from') ? params.get('from') : undefined;
      this.dest = params.get('to') ? params.get('to') : undefined;
      this.dte = params.get('date') ? params.get('date') : undefined;
     

    }
    )
    
   
    
    console.log(sessionStorage.getItem('sort'));
    console.log(sessionStorage.getItem('sortby'));
    this.getPackage();

    var url = require('url');
    var adr = this.router.url;
    //Parse the address:
    var q = url.parse(adr, true);
    
    /*The parse method returns an object containing url properties*/
   
    console.log(q.pathname);
    console.log(q.search);
   
    var qdata = q.query;
    console.log(qdata.Sort);


  }
  sorting() {

    var sort = ''
    var sortby = '';

    if ((document.getElementById("Sortby") as HTMLInputElement).value !== "Sort By") {
        sortby = (document.getElementById("Sortby") as HTMLInputElement).value;
    }
    if ((document.getElementById("Sort") as HTMLInputElement).value !== "Sort") {
      sort = (document.getElementById("Sort") as HTMLInputElement).value;
    }
    if(sort!==''){
   sessionStorage.setItem('sort',sort);
  }
  if(sortby!==''){
   sessionStorage.setItem('sortby',sortby);
  } 
   this.router.navigate([this.router.url])
   .then(() => {
     window.location.reload();
   })
    
  }
  packdetails(packageId: number) {
    this.router.navigate(['/pack', packageId])
  }
  getPackage() {

    if (this.source) {
      console.log(sessionStorage.getItem('sort'))
       if(!!(sessionStorage.getItem('sort'))||!!(sessionStorage.getItem('sort'))){
        this.packageService.getSortedPack(this.source, this.dest, this.dte).subscribe(
          data => {
            this.flag = true;
            this.package = data;
          },
          (error) => {
            this.flag = false;
            if (error.status == 404) {
              this.toastr.warning('No Package Found');
            }
            else {
              this.toastr.error('Error!');
              console.log(error);
            }
          }
  
  
        )
        
       }else{
        
      this.packageService.getPack(this.source, this.dest, this.dte).subscribe(
        data => {
          this.flag = true;
          this.package = data;
          this.router.navigate([this.router.url])
        },
        (error) => {
          this.flag = false;
          if (error.status == 404) {
            this.toastr.warning('No Package Found');
          }
          else {
            this.toastr.error('Error!');
            console.log(error);
          }
        }


      )
    }
    }
    else {
      {
        if(sessionStorage.getItem('sort')||sessionStorage.getItem('sort')){
          this.packageService.getAllSortedPack().subscribe(
            data => {
              this.flag = true;
              this.package = data;
            },
            (error) => {
              this.flag = false;
              if (error.status == 404) {
                this.toastr.warning('No Package Found');
              }
              else {
                this.toastr.error('Error!');
                console.log(error);
              }
            }
    
    
          )
          
         }else{
        this.packageService.getAllPack().subscribe(data => {
          this.flag = true;
          this.package = data;

        }, (error) => {
          this.flag = false;
          if (error.status == 404) {
            this.toastr.info('No Package Found');
          }
          else {
            this.toastr.error('Error!');
            console.log(error);
          }
        }


        )
      }
      }
    }
    console.log(this.package)
  }

}
