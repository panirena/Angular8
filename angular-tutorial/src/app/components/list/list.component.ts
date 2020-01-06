import { Team } from './../../team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  teams = Team;
  constructor() { }

  ngOnInit() {
  }

}
