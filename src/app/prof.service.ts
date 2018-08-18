import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class ProfService {
  private username: string;
  private clientid = "0eb78d8ad64386d908df";
  private clientsecret = "8e1d5bf067aac43091a46147198322a4489c5483";

  constructor(private http: Http) {
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
}
