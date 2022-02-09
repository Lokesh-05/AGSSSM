import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  res: string="";

  constructor() { }

  ngOnInit(): void {
  }
  RegisterStudent(studentForm: NgForm): void {

    //console.log(studentForm.value);
    //console.log(studentForm.valid);
    //console.log(studentForm.touched);

    var first_name=studentForm.controls['name'].value;

    //var last_name=studentForm.controls['lastName'].value;

    //var email=studentForm.controls['email'].value;

this.res = "Thank You " + first_name + " !! We will Contact you soon !!"; 


}
}
