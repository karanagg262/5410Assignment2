import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  email: string = '';
  onlineusers: any[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient, 
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.fetchonlineusers();
    });
  }

  fetchonlineusers(){
    this.http.post("https://container3-qcsav7gtbq-nn.a.run.app/online", '')
    .subscribe(
      (response: any) => {
        this.onlineusers = response;
        console.log(this.onlineusers);
      }
    );
  }

  logout(){
    const data = {
      email: this.email,
    };
    this.http.post("hhttps://container3-qcsav7gtbq-nn.a.run.app/logout", data)
    .subscribe(
      (response: Object) => {
        this.router.navigate(['']);
      }
    );
  }

}
