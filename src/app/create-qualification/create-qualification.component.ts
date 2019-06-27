import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidateService } from './../candidate.service';
import { Component, OnInit } from '@angular/core';
import { Qualification } from '../models/candidate';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-qualification',
  templateUrl: './create-qualification.component.html',
  styleUrls: ['./create-qualification.component.css']
})
export class CreateQualificationComponent implements OnInit {

  formGroup: FormGroup;
  candidateId: number;
  constructor(private _service:CandidateService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Name: new FormControl('',[
        Validators.required
      ]),
      Type: new FormControl('',[
        Validators.required
      ]),
      DateStarted: new FormControl('', [
        Validators.required
      ]),
      DateCompleted: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit(){
    var qualification = new Qualification();
    qualification.Name = this.formGroup.get("Name").value;
    qualification.Type = this.formGroup.get("Type").value;
    qualification.DateStarted = this.formGroup.get("DateStarted").value;
    qualification.DateCompleted = this.formGroup.get("DateCompleted").value;
    this.route.params.subscribe(param => {
      this.candidateId = param['id'];
    })
    this._service.CreateQualification(qualification, this.candidateId).subscribe(res => {
      if(res != null){
        console.log(res);
      }
    })
  }

}
