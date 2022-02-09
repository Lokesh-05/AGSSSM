import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
res:string="";
  constructor() { }

  ngOnInit(): void {
  }
  RegisterStudent(studentForm: NgForm): void {

    console.log(studentForm.value);
    console.log(studentForm.valid);
    console.log(studentForm.touched);

    var first_name=studentForm.controls['firstName'].value;

    var last_name=studentForm.controls['lastName'].value;

    var email=studentForm.controls['email'].value;

this.res = "Thank You " + first_name + " !! We will Contact you soon !!"; 

    //console.log(first_name);

    //console.log(last_name);

    //console.log(email);



    //console.log(studentForm.value);

    //console.log(studentForm.valid);

    //console.log(studentForm.touched);

    }

}



