import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    //TODO:
    this.auth
      .signup(email, password)
      .then((res) => {
        this.router.navigateByUrl("/signin");
        this.toastr.success("signed up successfully");
      })
      .catch((err) => {
        this.toastr.error("sign up failed");
      });
  }
}
