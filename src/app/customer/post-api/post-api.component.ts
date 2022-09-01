import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/Services/get-api.service';
import { NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  Title="Post Api";
  Result:any=[];
  postData:any;
  Submitted:boolean=false;
  FormSection = new FormGroup({
    student_Name: new FormControl('',Validators.required),
    student_Age: new FormControl('',Validators.required)
  });
  getError: any;
  constructor(private service:GetApiService) { }

  callingFunction() {
    this.Submitted=true;
    if(this.FormSection.value.student_Name.length != '')
    {
      this.service.postApi(this.FormSection.value).subscribe({ 
        next:data=>{
          this.Result = data; 
          console.log("callGetApi data:",this.FormSection.value);       
        },
        error:err=>{
          this.getError = err;
          console.log("getError data:",this.FormSection.value);  
        },
        complete:()=>{
          console.log("GetApi method finished");
        }
      });
    }
 }

  ngOnInit(): void {
    this.callingFunction();   
  }

}
