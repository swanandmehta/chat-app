import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Error } from 'src/app/shared/dto/error';
import { User } from 'src/app/shared/dto/user';
import { LoginService } from 'src/app/shared/service/login.service';
import { LoginDto } from '../../dto/login-dto';

@Component({
  selector: 'app-login-action',
  templateUrl: './login-action.component.html',
  styleUrls: ['./login-action.component.css']
})
export class LoginActionComponent implements OnInit {
  
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private loginService: LoginService, private router: Router) {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.formGroup.valid) {
      const subscription: Subscription = this.loginService.login(this.formGroup.value as LoginDto)
                                                          .subscribe({
                                                            next: (user: User) => {
                                                              subscription.unsubscribe();
                                                              this.toastr.info("You have logged in as "+user.username+" Please wait while we redirect to dashboard.");
                                                            },
                                                            error: (error: Error) => {
                                                              subscription.unsubscribe();
                                                              this.toastr.error(error.advice);
                                                            }
                                                          });
    } else {
      this.toastr.error("Please provide valid details for the login.");
    }
  }

  onRegister(): void {
    this.router.navigateByUrl("/register");
  }

}
