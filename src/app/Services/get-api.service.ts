import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse}  from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { getDataInterface } from 'src/Interfaces/getApiInterface';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  constructor(private http:HttpClient) { }
  public getURL="https://localhost:44369/api/API_Revision/Get_Student";
  public postURL="https://localhost:44369/api/API_Revision/Add_Student";
  public deleteURL="https://localhost:44369/api/API_Revision/Delete_Student";
  public updateURL="https://localhost:44369/api/API_Revision/Update_Student";
  public getByIdURL="https://localhost:44369/api/API_Revision/Get_Student_ById";
  // getApi(): Observable<getDataInterface>
  // {
  //   return this.http.get<getDataInterface>(this.getURL);
  // }

  getApi()
  {
    return this.http.get(this.getURL);
    //return this.http.get('https://reqres.in/api/users?page=2s');
  }

  getApiById(Id:number)
  {
    return this.http.get(`${this.getByIdURL}?Id=${Id}`);
  }

  postApi(Data:any): Observable<any>
  {
    return this.http.post(this.postURL,Data);
  }

  deleteApi(Id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}?Id=${Id}`);
  }

  updateData(data: any,Id:number): Observable<any> {
    console.log("updateData:",data);
    return this.http.put(`${this.updateURL}?Id=${1}`,data)
}
}
