import { inject, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController,} from '@angular/common/http/testing';
import { GetApiService } from 'src/app/Services/get-api.service';

describe('Services', () => { 
  let httpController: HttpTestingController;
  let dataService: GetApiService;
  let getExpectedData: any;
  let postExpectedData: any;
  let updateExpectedData:any;
  let getUrl: any = 'https://localhost:44369/api/API_Revision/Get_Student';
  let postUrl: any = 'https://localhost:44369/api/API_Revision/Add_Student';
  let deleteUrl: any ='https://localhost:44369/api/API_Revision/Delete_Student';
  let updateURL:any="https://localhost:44369/api/API_Revision/Update_Student";
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetApiService],
    });
    
    httpController = TestBed.inject(HttpTestingController);
    dataService = TestBed.inject(GetApiService);
    getExpectedData = [
      { student_Name: 'Rahul', student_Age: 23 },
      { student_Name: 'Pradeep', student_Age: 25 },
    ];
    postExpectedData = [{ student_Name: 'Rahul', student_Age: 23 }];
    updateExpectedData = [{ student_Name: 'Rahul', student_Age: 23,student_Id:1 }];
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('#getData should use GET to retrieve data', () => {
    dataService.getApi().subscribe();
    const testRequest = httpController.expectOne({
      method: 'GET',
      url: getUrl,
    });
    expect(testRequest.request.method).toEqual('GET');
  });

  it('It should return data', () => {
    let result: any;
    dataService.getApi().subscribe((data) => {
      result = data;
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: getUrl,
    });
    req.flush([getExpectedData]);
    expect(result[0]).toEqual(getExpectedData);
  });

  it('It should throw error', () => {
    let error: any;
    dataService.getApi().subscribe({
      next: (data) => {},
      error: (err) => {
        error = err;
      },
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: getUrl,
    });
    req.flush('Something went wrong', {
      status: 404,
      statusText: 'Network error',
    });
    expect(error).toBeTruthy();
  });

  //------------------------------- POST METHOD TESTING----------------------------------------

  it('It should call POST API to create a new object', () => {
    dataService.postApi(postExpectedData).subscribe();
    let req = httpController.expectOne({ method: 'POST', url: postUrl });
    expect(req.request.body).toEqual(postExpectedData);
  });

  it('It should use post method', () => {
    dataService.postApi(postExpectedData).subscribe();
    const testRequest = httpController.expectOne({
      method: 'POST',
      url: postUrl,
    });
    expect(testRequest.request.method).toEqual('POST');
  });

  it('Post method should throw error', () => {
    let error: any;
    dataService.postApi(postExpectedData).subscribe({
      next: (data) => {},
      error: (err) => {
        error = err;
      },
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: postUrl,
    });
    req.flush('Something went wrong', {
      status: 404,
      statusText: 'Network error',
    });
    expect(error).toBeTruthy();
  });

  //------------------------------- DELETE METHOD TESTING----------------------------------------

  it('Delete method should throw error', () => {
    let error: any;
    let Id: number = 2;
    dataService.deleteApi(Id).subscribe({
      next: (data) => {},
      error: (err) => {
        error = err;
      },
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${deleteUrl}?Id=${Id}`,
    });
    req.flush('Something went wrong', {
      status: 404,
      statusText: 'Network error'
    });
    expect(error).toBeTruthy();
  });

  it('#DeleteApi should use delete method', () => {
    let Id: number = 1;
    dataService.deleteApi(Id).subscribe();
    const testRequest = httpController.expectOne({
      method: 'DELETE',
      url: `${deleteUrl}?Id=${Id}`,
    });
    expect(testRequest.request.method).toEqual('DELETE');
  });

  it('It should call DELETE API ', () => {
    let result: any;
    dataService.deleteApi(1).subscribe((data)=>{
      result=data;
    });

    let req = httpController.expectOne({     
    method: 'DELETE',
    url: `${deleteUrl}?Id=${1}`,
  });
  req.flush(1);  
  expect(result).toBe(1);
  });
    
  //------------------------------- UPDATE METHOD TESTING----------------------------------------

  it('Update method should throw error', () => {
    let error: any;
    let Id: number = 1;
    dataService.updateData(updateExpectedData,Id).subscribe({
      next: (data) => {},
      error: (err) => {
        error = err;
      },
    });
    const req = httpController.expectOne({
      method: 'PUT',
      url: `${updateURL}?Id=${Id}`,
    });
    req.flush('Something went wrong', {
      status: 404,
      statusText: 'Network error'
    });
    expect(error).toBeTruthy();
  });

  it('#It should use put method', () => {
    let Id: number = 1;
    dataService.updateData(updateExpectedData,Id).subscribe();
    const testRequest = httpController.expectOne({
      method: 'PUT',
      url: `${updateURL}?Id=${Id}`,
    });
    expect(testRequest.request.method).toEqual('PUT');
  });


  it('It should call put API ', () => {
    let Id=1;
    dataService.updateData(updateExpectedData,Id).subscribe((data)=>{});

    let req = httpController.expectOne({     
    method: 'PUT',
    url: `${updateURL}?Id=${Id}`,
  });
  debugger;
  req.flush(updateExpectedData);  
  expect(req.request.body).toEqual(updateExpectedData);
  });


});
