import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthServiceService } from './service/auth.service';
import { authCodeFlowConfig } from './authCodeFlowConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';


  constructor(private oauthService: OAuthService, private authService: AuthServiceService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  ngOnInit(): void {}
}
