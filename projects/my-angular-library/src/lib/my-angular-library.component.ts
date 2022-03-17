import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-angular-library',
  template: `
    <p>
      my-angular-library works!
    </p>
  `,
  styles: [
  ]
})
export class MyAngularLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
