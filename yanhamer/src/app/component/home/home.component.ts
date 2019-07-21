import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSucessMessage:boolean;
  serverErrorMessages:String;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.contactService.postContact(form.value).subscribe(      res => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      this.resetForm(form);
    },
    err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    }
  );
  }

  resetForm(form: NgForm) {
    this.contactService.selectedContact={
      username:'',
      email:'',
      phone:'',
      subject:'',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
