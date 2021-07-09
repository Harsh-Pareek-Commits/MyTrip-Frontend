import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../Models/package';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private address = 'http://localhost:8090/';

  private getAllPackage= this.address+'/package/all';
  private getPacks=this.address+'/package/view/';
  constructor(private http:HttpClient) { }

  
  packages: Package[] = [];

  addPack(pack: Package) {
    this.packages.push(pack);
    console.log(this.packages.length);

  }
  getAllPack():Observable<Package[]>{
   
    return this.http.get<Package[]>(`${baseUrl}package/all`);
  }
  getPack(from: String, to: String, Dte:String){
    
    return this.http.get<Package[]>(`${baseUrl}package/route/${from}/${to}/${Dte}`);
  }
}
