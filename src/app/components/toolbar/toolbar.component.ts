import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public logo: string;

  constructor() {
    this.logo ='../../assets/obsidiam_logo.png';
  }

  ngOnInit(): void {
  }

}
