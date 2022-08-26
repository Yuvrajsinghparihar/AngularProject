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
  Submitted:boolean=false;
  FormSection = new FormGroup({
    student_Name: new FormControl('',Validators.required),
    student_Age: new FormControl('',Validators.required)
  });
  constructor(private service:GetApiService) { }

  callingFunction() {
    this.Submitted=true;
    this.service.postApi(this.FormSection.value).subscribe((result)=>{})}

  ngOnInit(): void {}

  // PostData(data:any)
  // {
  //   this.service.postApi(data).subscribe((result)=>{
  //     console.log(result);
  //   })
  // }

}
