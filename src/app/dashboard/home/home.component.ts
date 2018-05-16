import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public Card:any=[
    {icon:'content_copy',category:'Giáo Viên',color:"orange"},
    {icon:'store',category:'Giáo Viên',color:"green"},
    {icon:'info_outline',category:'Giáo Viên',color:"orange"},
    {icon:'content_copy',category:'Giáo Viên',color:"green"},
    {icon:'content_copy',category:'Giáo Viên',color:"green"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
