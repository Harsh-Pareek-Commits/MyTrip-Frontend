import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Package } from 'src/app/Models/package';
import { PackageService } from 'src/app/Services/package.service';

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
  constructor(private router: Router, private route: ActivatedRoute, private packageService: PackageService) {

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
  getPackage() {
   
    if ( this.source) {
      console.log("HI");
      this.packageService.getPack(this.source, this.dest, this.dte).subscribe(data => {
        this.package = data;

      },


      )
    }
    else {
      { console.log("HI 2");
        this.packageService.getAllPack().subscribe(data => {
          this.package = data;

        },


        )
      }
    }
  }

}
