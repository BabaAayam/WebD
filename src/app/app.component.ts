import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Add this line

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Add FormsModule to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  email!:string;
  password!:string;
  constructor() { }
  ngOnInit(): void {
    // Remove the error throwing code
  }
  title = 'WebD';
  LoginUser()
  {
    if(this.email == "admin@gmail.com" && this.password == "admin")
      {
        alert("Login Successful");
      }
    else
    {
      alert("Invalid Credentials");
    }
  }
}