import { Component, OnInit } from '@angular/core';
import { Repo } from '../shared/repo';
import { REPOS } from '../shared/repos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repos: Repo[] = REPOS;
  

  constructor() { }

  ngOnInit(): void {
      console.log(this.repos[0]);
  }

}
