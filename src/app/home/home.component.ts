import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToNumbers() {
    document.querySelector('.popular-numbers-block').scrollIntoView({
      behavior: 'smooth'
    });
  }
}
