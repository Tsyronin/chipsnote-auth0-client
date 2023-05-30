import { Token } from '@angular/compiler';
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

  login() {
    this.auth.idTokenClaims$.subscribe((claims) => {
      localStorage.setItem("token", claims.__raw);
      console.log("token", claims.__raw)
    })

    this.auth.loginWithRedirect()
  }

  logout() {
    localStorage.removeItem("token");
    
    this.auth.logout()
  }
}
