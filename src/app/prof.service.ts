import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class ProfService {
  private username: string;
  private clientid = "0eb78d8ad64386d908df";
  private clientsecret = "5a6b2327b90494d005a70edc506d2eed3f8318e7";

  constructor(private http: Http) {
    console.log('Service ready');
    this.username = "probantan";
  }

  getProfInfo() {
    return this.http .get("https://api.github.com/users/" +
      this.username + "?client_id=" +  this.clientid +
          "&clientsecret + this.clientsecret"  )
      .map(res => res.json());
  }
  getProfRepos(){

    return this.http .get("https://api.github.com/users/" +
      this.username + "/repos?client_id=" +  this.clientid +
          "&clientsecret + this.clientsecret"  )
      .map(res => res.json());
  }
  updateProf(username:string){
   this.username=username;

  }

}
