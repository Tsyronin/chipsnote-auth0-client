import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chipsnote-auth0-client';

  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }
}
