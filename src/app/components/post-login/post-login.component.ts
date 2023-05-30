import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {
  constructor(private readonly auth: AuthService,
              private readonly router: Router) {}

  ngOnInit(): void {
    this.auth.idTokenClaims$.subscribe((claims) => {
      localStorage.setItem('token', claims.__raw);
      console.log('claims.__raw', claims.__raw);
      console.log('token', localStorage.getItem('token'))
      //this.router.navigate(['']);
    })
  }
}
