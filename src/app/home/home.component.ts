import { CandidateService } from './../candidate.service';
import { CandidateSearchParams, QualificationSearchParams } from './../models/candidateSearchParams';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formGroup: FormGroup;
  _service: CandidateService
  candidates$: any;
  isCollapsed: boolean;


  constructor(private service: CandidateService) {
    this._service = service;
   }

  searchParams :CandidateSearchParams;

  ngOnInit() {
    this.formGroup = new FormGroup({
      FirstName: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z]/)
      ]),
      LastName: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z]/)
      ]),
      Email: new FormControl('', [
      ]),
      PhoneNumber: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern(/[[0-9]/)
      ]),
      ZipCode: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern(/[[0-9]/)
      ]),
      Type: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z]/)
      ]),
      Name: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z]/)
      ]),
      Date: new FormControl('')
    });
    this.isCollapsed = false;

    this.searchParams = new CandidateSearchParams();

    this.service.GetCandidates(this.searchParams).subscribe((res) => {
      if(res != null){
        this.candidates$ = res;
      }
    })
  }

  CreateSearchParam(){
    this.searchParams.FirstName = this.formGroup.get('FirstName').value
    this.searchParams.LastName = this.formGroup.get('LastName').value
    this.searchParams.Email = this.formGroup.get('Email').value
    this.searchParams.ZipCode = this.formGroup.get('ZipCode').value
    this.searchParams.PhoneNumber = this.formGroup.get('PhoneNumber').value

    var date = this.formGroup.get('Date').value;
    var name = this.formGroup.get('Name').value;
    var type = this.formGroup.get('Type').value;


    if(date || name || type ){
      var qualificationSearchParams = new QualificationSearchParams();
      if(date){
        qualificationSearchParams.Date = date;
      }
      if(name){
        qualificationSearchParams.CertificationNames = new Array<string>();
        qualificationSearchParams.CertificationNames.push(name);
      }
      if(type){
        qualificationSearchParams.Type = type;
      }
      this.searchParams.QualificationSearchParams = qualificationSearchParams;
    }
  }

  Submit(){
    this.CreateSearchParam();
    this._service.GetCandidates(this.searchParams).subscribe(res => {
      this.candidates$ = res;
    })
  }


}
