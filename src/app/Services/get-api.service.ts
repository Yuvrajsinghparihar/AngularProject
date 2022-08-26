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
  
  getApi(): Observable<any>
  {
    return this.http.get<getDataInterface>(this.getURL);
  }

  postApi(Data:any): Observable<any>
  {
    return this.http.post(this.postURL,Data);
  }

  deleteApi(Id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}?Id=${Id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error deleting data. ${error.statusText || "Unknown"} `
        );
      })
    );
  }
}
