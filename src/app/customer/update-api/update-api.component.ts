import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { GetApiService } from 'src/app/Services/get-api.service';
import { getDataInterface } from 'src/Interfaces/getApiInterface';

@Component({
  selector: 'app-update-api',
  templateUrl: './update-api.component.html',
  styleUrls: ['./update-api.component.css']
})
export class UpdateApiComponent implements OnInit {
  updateDeleteError: any;
  updateData: any;
  GetData: any;
  getError: any;
  constructor(private service:GetApiService) { }

  ngOnInit(): void {
    this.CallingGetByIdFunction(1);
  }

  CallingGetByIdFunction(Id:number)
  {
    this.service.getApiById(Id).subscribe({
      next:data=>{
        this.GetData = data; 
        console.log("Get By Id:",data);       
      },
      error:err=>{
        this.getError = err;
      },
      complete:()=>{
        console.log("GetApiById method finished");
      }
    });
  }
  Submitted:boolean=false;
  FormSection = new FormGroup({
    student_Name: new FormControl('',Validators.required),
    student_Age: new FormControl('',Validators.required),
    student_Id: new FormControl('',Validators.required)
  });
  
  callingFunction() {
    
    this.service.updateData(this.FormSection.value,this.FormSection.value.student_Id).subscribe((result)=>{})}

}
