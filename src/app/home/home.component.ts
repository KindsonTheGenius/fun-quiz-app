import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gotoStart = false
  quit = false;
  gameQuited = false

  constructor() { }

  ngOnInit(): void {
  }

  public start(){
    this.gotoStart = true
  }

  quitNow(quit: boolean) {
    this.gotoStart = false
    console.log(quit)
  }
}
