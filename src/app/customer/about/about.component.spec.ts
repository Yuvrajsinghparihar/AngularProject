import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   //Exceptions
   
   it('Compiling functionTest goes as expected',()=>{

    //Working
    expect(() => component.functionTesting()).toThrow();
    expect(() => component.functionTesting()).toThrow('You are using old Angular');


    //expect(() => component.functionTesting()).toThrow();
    //expect(() => component.functionTesting()).toThrow(Error);

    // //Exact error message or regexp
    //expect(() => component.functionTesting()).toThrow('You are using old Angular');
    expect(() => component.functionTesting()).toThrow(/old/);

   }),
    



  //Test Array
  it('Use of tomatch', () => {
    let Names = ["Dharmraj","Rahul","Somesh","Puran"];
    expect(Names).toContain("Rahul");
  });


  //Exact equality
  it('Use of toBe', () => {
    let Name = 'Rahul';
    expect(Name).toBe('Rahul');
  });

  //Object testing
  it('Use of toEqual', () => {
    let data = [
      {
        name: 'Rahul',
        age: 23,
      },
      {
        name: 'Radhika',
        age: 21,
      },
    ];
    expect(data).toEqual([
      {
        name: 'Rahul',
        age: 23,
      },
      {
        name: 'Radhika',
        age: 21,
      },
    ]);
  });

  //Object testing
  it('Use of toContain', () => {
    let data = [
      {
        name: 'Rahul',
        age: 23,
      },
      {
        name: 'Radhika',
        age: 21,
      },
    ];
    expect(data).toContain({
      name: 'Rahul',
      age: 23,
    });
  });
});
