import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthServiceService } from '../service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loggedInMessage: string = '';
  show: boolean = false;

  constructor(private oauthService: OAuthService, private authService: AuthServiceService) { }

  ngOnInit(): void {

  }

  
  get givenName() {
    const claims: any = this.oauthService.getIdentityClaims();
    if(!claims) return null;
    return claims['given_name'];
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }

  get idToken() {
    return this.oauthService.getIdToken();
  }

  logout(): void {
    this.oauthService.logOut();
  }

  showProtectedResource(): string {
    if(!this.loggedInMessage){
    this.authService.getProtectedRoute().subscribe((res) => {
      this.loggedInMessage = res.text;
      this.show = true;
    })
    return this.loggedInMessage;
  }
    this.show = true;
    return this.loggedInMessage;
  }

  hideLoggedInMessage(): void {
    this.show = false;
  }

}
