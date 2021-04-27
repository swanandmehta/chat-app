import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/login/dto/login-dto';
import { environment } from 'src/environments/environment';
import { User } from '../dto/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginDto): Observable<User> {
    dto.password = btoa(dto.password);
    const authServerUrl: string = environment.server.auth.base;
    const loginUrl: string = environment.server.auth.login;
    return this.httpClient.post<User>(authServerUrl + loginUrl, dto);
  } 

}
