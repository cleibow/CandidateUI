import { map } from 'rxjs/operators';

export class Candidate{
  ID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  ZipCode: string;
  PhoneNumber: string;
  Qualifications: Array<Qualification>

  Convert(res: any){
    if(res != null){
      this.FirstName = res.FirstName;
      this.LastName = res.LastName;
      this.Email = res.Email;
      this.ID = res.ID;
      this.PhoneNumber = res.PhoneNumber;
      this.ZipCode = res.ZipCode
      if(res.Qualifications){
        var qualifications = new Array<Qualification>();
      res.Qualifications.forEach(resQualification => {
        var qualification = new Qualification();
        qualification.Convert(resQualification);
        qualifications.push(qualification);
      });
      this.Qualifications = qualifications;
      }

    }

  }
}

export class Qualification{
  Type: string;
  Name: string;
  DateStarted: Date;
  DateCompleted: Date;
  CandidateID: string;

  Convert(res: any){
    if(res != null){
      this.CandidateID = res.CandidateID
      this.DateStarted = res.DateStarted
      this.DateCompleted = res.DateCompleted
      this.Name = res.Name;
      this.Type = res.Type;

    }
  }
}

