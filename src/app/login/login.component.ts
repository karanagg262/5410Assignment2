import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: HttpClient, 
    private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
   }

  ngOnInit() {
  }

  onSubmit(){

    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.http.post<any>("https://container2-qcsav7gtbq-nn.a.run.app/getdata", data)
      .subscribe(
        response => {
          this.router.navigate(['online'], { queryParams: { email: response.email } })
        }
      );

  }

}
