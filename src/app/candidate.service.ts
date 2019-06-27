import { CandidateSearchParams } from './models/candidateSearchParams';
import { Candidate, Qualification } from './models/candidate';
import { Injectable } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  _httpClient: HttpClient;
  _url: string;
  candidates$: Observable<Array<Candidate>>;



  constructor(private httpClient: HttpClient) {
    this._url = "http://localhost:52881/"
    this._httpClient = httpClient;

   }

   public GetCandidates(candidateSearchParams: CandidateSearchParams){
     let url = this._url + "api/candidates";
     return this._httpClient.post<any>(url, candidateSearchParams)
        .pipe(
          map(res => {
            var candidates = new Array<Candidate>();
            if(res.length > 0){
              res.forEach(can => {
                var candidate = new Candidate()
                candidate.Convert(can);
                candidates.push(candidate);
              })
            }
            return candidates
          })
        )
   }

   public CreateCandidate(candidate: Candidate){
     let url = this._url + "api/createCandidate";
     return this._httpClient.post<any>(url, candidate)
      .pipe(
        map(
          res => {
            console.log(res);

          },
          error => {
            console.log(error);
          })
        )}

   public CreateQualification(qualification: Qualification, id: number){
     let url = this._url + "api/createQualification/" + id;
     return this._httpClient.post<any>(url, qualification)
      .pipe(
        map(
          res => {
            console.log(res)
          },
          error => {
            console.log(error)
      })
    )}
}
