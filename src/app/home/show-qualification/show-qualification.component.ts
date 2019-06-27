import { CandidateSearchParams } from './../../models/candidateSearchParams';
import { Candidate, Qualification } from './../../models/candidate';
import { CandidateService } from './../../candidate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-qualification',
  templateUrl: './show-qualification.component.html',
  styleUrls: ['./show-qualification.component.css']
})
export class ShowQualificationComponent implements OnInit {

  _service: CandidateService;
  candidateId: number;
  qualifications: Array<Qualification>

  constructor(service: CandidateService, private route: ActivatedRoute) {
    this._service = service;
  }

  ngOnInit() {
    var searchParams = new CandidateSearchParams();
    this.route.params.subscribe(params => {
      this.candidateId = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
    this._service.GetCandidates(searchParams).subscribe(res => {
      if(res != null){
        var candidates = res;
        this.qualifications = candidates.find(can => can.ID == this.candidateId.toString()).Qualifications

      }
    });

  }

}
