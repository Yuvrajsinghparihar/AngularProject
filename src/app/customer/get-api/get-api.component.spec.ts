import {ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { GetApiService } from 'src/app/Services/get-api.service';
import { GetApiComponent } from './get-api.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


describe('GetApiComponent', () => {  

  let httpController:HttpTestingController;
  let dataService:GetApiService;
  let component :GetApiComponent;
  let expectedData:any;
  let fixture : ComponentFixture<GetApiComponent>;;
  let getUrl :any="https://localhost:44369/api/API_Revision/Get_Student";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ GetApiComponent ],
      providers: [GetApiService]
    });
    httpController=TestBed.inject(HttpTestingController);
    expectedData = [
            {student_Name: 'Rahul', student_Age: 23},
            {student_Name: 'Pradeep', student_Age: 25}    
        ];
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiComponent);
    component =fixture.debugElement.componentInstance;
    dataService = TestBed.inject(GetApiService);
  });

  it('It should the callGetApi() function and return response',fakeAsync(() => {
    let getService=fixture.debugElement.injector.get(GetApiService);
    let stub=spyOn(getService,"getApi").and.callFake(() => {
      return of([
        { student_Name: 'Rahul', student_Age: 23 },
        { student_Name: 'Pradeep', student_Age: 25 }
      ]).pipe(delay(300));
    });
    component.callGetApi();
    //expect(component.GetData).toEqual(true);
    expect(component.GetData).toEqual({ student_Name: 'Rahul', student_Age: 23 });

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });


  it('It should create the object of component', () => {
    expect(component).toBeTruthy();
  });

  it('It should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Get-API Works!');
  });


  // it('It should provide exact number of count', () => {
    
  //   expect(component.GetData.length).toEqual(2);
  // });


  // it("should return data", () => {
  //   let result: any;
  //   dataService.getApi().subscribe(data => {
  //     result = data;
  //   });
  //   const req = httpController.expectOne({
  //     method: "GET",
  //     url: getUrl
  //   });
   
  //   req.flush([expectedData]);
   
  //   expect(result[0]).toEqual(expectedData);
  // });


  // it("should throw error", () => {
  //   let error: any;
  //   dataService.getApi().subscribe({
  //     next:data=>{},
  //     error:err=>{
  //       error = err;
  //     }});
   
  //     const req = httpController.expectOne({
  //       method: "GET",
  //       url: getUrl
  //     });
  //   req.flush("Something went wrong", {
  //     status: 404,
  //     statusText: "Network error"
  //   });
  //   expect(error).toBeTruthy();
  // });




});




