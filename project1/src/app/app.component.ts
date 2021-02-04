import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // check leap year or not
  ans: String;
  checkYear(year: number) {
    if(year)
      this.ans = (((year%4 == 0) && (year%100 != 0)) || (year%400 == 0)) ? `${year} is Leap year !!` : `${year} is Not Leap year !! `
      console.log(this.ans);
  }

  // find String's length
  len: String;
  findLength(str: String) {
    this.len = `Length of Entered String is : ${str.length}`;
    console.log(this.len);
  }
}
