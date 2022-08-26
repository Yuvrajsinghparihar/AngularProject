import { ComponentFixture,fakeAsync,inject,TestBed,tick,} from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController,} from '@angular/common/http/testing';
import { GetApiService } from 'src/app/Services/get-api.service';
import { GetApiComponent } from './get-api.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { getDataInterface } from 'src/Interfaces/getApiInterface';

describe('GetApiComponent', () => {
  let httpController: HttpTestingController;
  let dataService: GetApiService;
  let component: GetApiComponent;
  let expectedData: any;
  let fixture: ComponentFixture<GetApiComponent>;
  let getUrl: any = 'https://localhost:44369/api/API_Revision/Get_Student';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [GetApiComponent],
      providers: [GetApiService],
    });
    httpController = TestBed.inject(HttpTestingController);
    expectedData = [
      { student_Name: 'Rahul', student_Age: 23 },
      { student_Name: 'Pradeep', student_Age: 25 },
    ];
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiComponent);
    component = fixture.debugElement.componentInstance;
    dataService = TestBed.inject(GetApiService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('It should call callGetApi method', () => {
    component = fixture.componentInstance;
    spyOn(component, 'callGetApi');
    component.ngOnInit();
    expect(component.callGetApi).toHaveBeenCalled();
  });

  it('It should call callGetApi and get response as empty array', fakeAsync(() => {
    const spy_Service = fixture.debugElement.injector.get(GetApiService);
    spyOn(spy_Service, 'getApi').and.callFake(() => {
      return of([]);
    });
    component.callGetApi();
    tick(100);
    expect(component.GetData).toEqual([]);
  }));

  it('It should call callGetApi and get response as array', fakeAsync(() => {
    const spy_Service = fixture.debugElement.injector.get(GetApiService);
    spyOn(spy_Service, 'getApi').and.callFake(() => {
      return of([
        { student_Name: 'Rahul', student_Age: 23 },
        { student_Name: 'Pradeep', student_Age: 25 },
      ]);
    });
    component.callGetApi();
    tick(1000);
    expect(component.GetData).toEqual([
      { student_Name: 'Rahul', student_Age: 23 },
      { student_Name: 'Pradeep', student_Age: 25 },
    ]);
  }));

  it('It should compare the length', fakeAsync(() => {
    const spy_Service = fixture.debugElement.injector.get(GetApiService);
    spyOn(spy_Service, 'getApi').and.callFake(() => {
      return of([
        { student_Name: 'Rahul', student_Age: 23 },
        { student_Name: 'Pradeep', student_Age: 25 },
      ]);
    });
    component.callGetApi();
    tick(1000);
    expect(component.GetData.length).toEqual(2);
  }));

  it('It should create the object of component', () => {
    expect(component).toBeTruthy();
  });

  it('It should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Get-API Works!'
    );
  });
});
