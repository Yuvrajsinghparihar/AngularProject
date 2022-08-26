import { inject, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController,} from '@angular/common/http/testing';
import { GetApiService } from 'src/app/Services/get-api.service';

describe('Services', () => {
  let httpController: HttpTestingController;
  let dataService: GetApiService;
  let getExpectedData: any;
  let postExpectedData: any;
  let getUrl: any = 'https://localhost:44369/api/API_Revision/Get_Student';
  let postUrl: any = 'https://localhost:44369/api/API_Revision/Add_Student';
  let deleteUrl: any =
    'https://localhost:44369/api/API_Revision/Delete_Student';
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

  it('should return data', () => {
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

  it('should throw error', () => {
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

  it('Should call POST API to create a new object', () => {
    dataService.postApi(postExpectedData).subscribe();
    let req = httpController.expectOne({ method: 'POST', url: postUrl });
    expect(req.request.body).toEqual(postExpectedData);
  });

  it('#PostApi should use post the data', () => {
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
      statusText: 'Network error',
    });
    expect(error).toBeTruthy();
  });
});
