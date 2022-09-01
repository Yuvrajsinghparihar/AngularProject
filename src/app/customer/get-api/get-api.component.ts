import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/Services/get-api.service';
import { getDataInterface } from 'src/Interfaces/getApiInterface';
@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})

export class GetApiComponent implements OnInit {

  Title='Get Api';
  GetData:any=[];
  ConnectionApi:any;
  getError:any;
  checkApi:any;
  returnedData:any;
  connection:any;
  isFlag:boolean=false;
  deleteData: any;
  getDeleteError: any;
  constructor(private service:GetApiService) {}
   
  ngOnInit(): void {
    this.ConnectionApi=this.service.getApi();
    this.callGetApi();
    
    setTimeout(() => {
            console.log("Data",this.GetData);
    }, 1000);

  }

  callGetApi(){
     this.service.getApi().subscribe({
      
      next:data=>{
        this.GetData = data  as getDataInterface; 
        console.log("callGetApi data:",this.GetData);       
      },
      error:err=>{
        this.getError = err;
      },
      complete:()=>{
        console.log("GetApi method finished");
      }
    });
    
  }

  callDeleteApi(Id:number){
    console.log("callDeleteApi Id:",Id);
    this.service.deleteApi(Id).subscribe({
      next:data=>{
        this.callGetApi();
        this.deleteData=data;
        console.log("callDeleteApi data:",this.deleteData);
      },
      error:err=>{
        this.callGetApi();
        this.getDeleteError = err;
        console.log("callDeleteApi error:",this.getDeleteError);
      },
      complete:()=>{
        console.log("Delete method!");
      }
    });
    
  }

  

  

}
