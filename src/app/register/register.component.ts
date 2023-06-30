import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private http: HttpClient, 
    private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      location: new FormControl('')
    });
   }

  ngOnInit() {
  }

  onSubmit(){

    const data = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      location: this.registerForm.value.location
    };

    this.http.post<any>("https://container1-qcsav7gtbq-nn.a.run.app/register", data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['login']);
        }
      );

  }

}
