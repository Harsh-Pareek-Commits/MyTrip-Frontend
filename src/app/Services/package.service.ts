import { Route } from 'src/app/Models/route';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../Models/package';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { PackageEntityDto } from '../EntityDtoModels/package-entity-dto';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  
  constructor(private http:HttpClient) { }

  
  packages: Package[] = [];
  pack!: Package;
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
  getPackById(id:String){
    
    return this.http.get<Package>(`${baseUrl}package/search/${id}`);
  }
  getPackageEntityDto(){
    
    return this.http.get<Package>(`${baseUrl}package/search/${localStorage.getItem("productId")}`);
  }
  viewRoute():Observable<Route[]> {
    return this.http.get<Route[]>(`${baseUrl}route/all`);
  }
}
