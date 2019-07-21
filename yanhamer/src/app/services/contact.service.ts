import { environment } from "./../../environments/environment";
import { Contact } from "./../models/contac.model";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  selectedContact: Contact = {
    username: "",
    email: "",
    phone: "",
    subject: ""
  };
  constructor(private http: HttpClient, private router: Router) {}
  postContact(contact: Contact) {
    return this.http.post(environment.contactBaseUrl + "/newcontact", contact);
  }
}
