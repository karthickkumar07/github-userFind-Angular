import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// https://api.github.com/users/karthickkumar07
@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getuserDetails(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }
  getRepos(repourl: string) {
    return this.http.get(repourl);
  }
}
