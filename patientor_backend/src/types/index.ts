export interface Diagnose{

  code: string;
  name: string;
  latin?:string;

}

export interface Patient{
    id: string;
    name: string;
    dateOfBirth?: string;
    ssn?:string;
    gender:Gender;
    occupation:string;
}

export enum Gender{
  Male = "male",
  Female = "female",
  Other = "other"
}

export type NonSensitivePatientData =Omit<Patient,'ssn'>;

export type NewPatientEntry =Omit<Patient,'id'>;
