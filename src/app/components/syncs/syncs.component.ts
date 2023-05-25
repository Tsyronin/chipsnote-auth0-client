import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-syncs',
  templateUrl: './syncs.component.html',
  styleUrls: ['./syncs.component.css']
})
export class SyncsComponent implements OnInit {
  
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

}
