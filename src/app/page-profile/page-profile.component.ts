import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss']
})
export class PageProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
