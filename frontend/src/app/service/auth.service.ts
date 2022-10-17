import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { ProtectedMessage } from '../dto/protected.message.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private oauthService: OAuthService, private http: HttpClient) { }

  getProtectedRoute(): Observable<ProtectedMessage> {
    return this.http.get<ProtectedMessage>('http://localhost:3000/auth');
  }
}
