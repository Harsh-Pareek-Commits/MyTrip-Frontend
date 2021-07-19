import { Hotel } from 'src/app/Models/hotel';
import { Route } from 'src/app/Models/route';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  addPack(pack: PackageEntityDto):Observable<Package> {
    return this.http.post<Package>(`${baseUrl}package/add`,pack);
  
  }deletePackage(id:string):Observable<object>
  {
    return this.http.delete<object>(`${baseUrl}package/delete/${id}`);
  }
  getAllPack():Observable<Package[]>{
   
    return this.http.get<Package[]>(`${baseUrl}package/all`);
  }
  getAllSortedPack():Observable<Package[]>{
    let params = new HttpParams();
    params = params.append('sortBy',sessionStorage.getItem('sortby')!);
   params = params.append('sort', sessionStorage.getItem('sort')!);
    return this.http.get<Package[]>(`${baseUrl}package/all`,{params: params});
  }
  getPack(from: String, to: String, Dte:String){
    
    return this.http.get<Package[]>(`${baseUrl}package/route/${from}/${to}/${Dte}`);
  }
  getSortedPack(from: String, to: String, Dte:String){
    let params = new HttpParams();
 params = params.append('sortBy',sessionStorage.getItem('sortby')!);
params = params.append('sort', sessionStorage.getItem('sort')!);
    return this.http.get<Package[]>(`${baseUrl}package/route/${from}/${to}/${Dte}`,{params: params});
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
  viewHotel():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${baseUrl}hotel/view`);
  }
}
