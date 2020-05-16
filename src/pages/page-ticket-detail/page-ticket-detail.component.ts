import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'page-ticket-detail',
  templateUrl: './page-ticket-detail.component.html',
  styleUrls: ['./page-ticket-detail.component.scss']
})
export class PageTicketDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
