import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  bar: any;

  constructor() {}
  ngOnInit() {
    this.foo()
  }

  private foo() {
    if(!this.bar){
      throw new Error('OMG!')
    }
    return 'hi'
  }
}
