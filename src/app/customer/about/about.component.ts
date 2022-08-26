import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ComponentName="AboutComponent";
  constructor() { }
  ngOnInit(): void {
  }

  functionTesting()
  {
    throw new Error('You are using old Angular');
  }

}
