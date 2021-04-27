import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Error } from 'src/app/shared/dto/error';
import { User } from 'src/app/shared/dto/user';
import { LoginService } from 'src/app/shared/service/login.service';
import { RegisterService } from 'src/app/shared/service/register.service';
import { MatchValidator } from 'src/app/shared/validators/match-validator';
import { RegisterDto } from '../../dto/register-dto';

@Component({
  selector: 'app-register-action',
  templateUrl: './register-action.component.html',
  styleUrls: ['./register-action.component.css']
})
export class RegisterActionComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private registerService: RegisterService, private router: Router) {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]
    });

    this.formGroup.controls.cpassword.setValidators(MatchValidator.matchControlValue(this.formGroup.controls.password))
    this.formGroup.controls.cpassword.updateValueAndValidity();
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if(this.formGroup.valid) {
      const subscription: Subscription = this.registerService.register(this.formGroup.value as RegisterDto)
                                                              .subscribe({
                                                                next: (user: User) => {
                                                                  subscription.unsubscribe();
                                                                  this.toastr.info("You have registered as "+user.username+" Please wait while we redirect to dashboard.");
                                                                },
                                                                error: (error: Error) => {
                                                                  subscription.unsubscribe();
                                                                  this.toastr.error(error.advice);
                                                                }
                                                              });
    } else {
      this.toastr.error("Please provide valid details for to register.");
    }
  }

  onLogin(): void {
    this.router.navigateByUrl("/login");
  }

}
