import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { PostApiComponent } from './post-api.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormGroup, FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetApiService } from 'src/app/Services/get-api.service';
//import {UserServiceMock} from '../../mocks/user.service.mock';

describe('PostApiComponent', () => {
  let component: PostApiComponent;
  let fixture: ComponentFixture<PostApiComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApiComponent ],
      providers:[{provide: GetApiService }],
      imports:[BrowserModule,FormsModule,ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    expect(component.FormSection instanceof FormGroup).toBe(true);
  });

  it('should have text', () => {
    expect(component.Title).toEqual("Post Api");
  });

  it('form should be invalid', () => {
    component.FormSection.controls['student_Name'].setValue('');
    component.FormSection.controls['student_Age'].setValue('');
    expect(component.FormSection.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.FormSection.controls['student_Name'].setValue("xyz");
    component.FormSection.controls['student_Age'].setValue('23');
    expect(component.FormSection.valid).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.callingFunction();
    expect(component.Submitted).toBeTruthy();
  });

  it('should call the callingFunction method', () => {
    fixture.detectChanges();
    spyOn(component,'callingFunction');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.callingFunction()).toHaveBeenCalledTimes(0);
  });

});
