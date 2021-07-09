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
 source:any
 dest:any
 dte:any
 package !: Package[];
  constructor(private router:Router, private route: ActivatedRoute,private packageService: PackageService) { 
    
  }

  ngOnInit(): void { 
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.source=params.get('from');
      this.dest=params.get('to');
      this.dte=params.get('dte');
      this.getPackage();
    }
 
    )
    
  }
  getPackage (){
    if(this.dest && this.source && this.dte){
      this.packageService.getPack(this.source,this.dest,this.dte).subscribe(data=>{
        this.package= data;
        
    },
    
    
    )
    }
    else{
      {
        this.packageService.getAllPack().subscribe(data=>{
            this.package= data;
         
        },
        
        
        )
    }
  } 
}

}
