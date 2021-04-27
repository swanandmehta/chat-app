import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDto } from 'src/app/register/dto/register-dto';
import { environment } from 'src/environments/environment';
import { User } from '../dto/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private httpClient: HttpClient) {

  }

  register(dto: RegisterDto): Observable<User> {
    dto.password = btoa(dto.password);
    const authServerUrl: string = environment.server.auth.base;
    const registerUrl: string = environment.server.auth.register;
    return this.httpClient.post<User>(authServerUrl + registerUrl, dto);
  }
}
