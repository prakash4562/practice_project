import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtilsService} from "../utils.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private utilService: UtilsService, private messageService: MessageService) {
  }

  submitForm() {
    console.log(this.signUpForm.value);
    this.utilService.createUser(this.signUpForm.value).subscribe((response: any) => {
      console.log("Create user response: " + response);
    }, error => {
      this.messageService.displayErrorMessage(error.message);
    })
  }

  fetchUserDetails() {
    this.utilService.getUserDetails().subscribe((response: any) => {
      console.log("User details: " + response);
    }, error => {
      this.messageService.displayErrorMessage(error.message);
    })
  }

}
