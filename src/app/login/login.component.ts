import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService} from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(logIn: any) {
    console.log(logIn)
    console.log(logIn.value.email);
    sessionStorage.setItem('email', logIn.value.email)
    sessionStorage.setItem('password', logIn.value.pass)

    // this.goToDashboard
    this.router.navigate(['dashboard'])

    this.authService.login(logIn.value.email, logIn.value.pass);
  }


  onChange(proper: any) {
    console.log(proper)

    console.log(proper.control)

    //  proper.control.pristine=true

    proper.control.touched = false


  }



  onChange2(proper: any) {
    console.log(proper)

    console.log(proper.control)

    proper.control.pristine = true

    proper.control.touched = false



  }

}
