import { Candidate } from './../models/candidate';
import { CandidateService } from './../candidate.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _service: CandidateService ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      FirstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z]/)
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z]/)

      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      PhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/[[0-9]/)

      ]),
      ZipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/[[0-9]/)
      ])
    });
  }

  onSubmit(){
    var candidate = new Candidate();
    candidate.FirstName = this.formGroup.get("FirstName").value;
    candidate.LastName = this.formGroup.get("LastName").value;
    candidate.Email = this.formGroup.get("Email").value;
    candidate.PhoneNumber = this.formGroup.get("PhoneNumber").value;
    candidate.ZipCode = this.formGroup.get("ZipCode").value;
    this._service.CreateCandidate(candidate).subscribe(res => {
      if(res != null){
        // do something
      }
    })
  }



}
