export class CandidateSearchParams{
  LastName: string;
  FirstName: string;
  Email: string;
  ZipCode: string;
  PhoneNumber: string;
  QualificationSearchParams: QualificationSearchParams;
}

export class QualificationSearchParams{
      Date: Date;
      Type: string
      CertificationNames: Array<string>;
}
