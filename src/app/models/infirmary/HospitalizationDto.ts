export interface HospitalizationDto {
  id: number;
  lbzDoctor: string;
  patientAdmission: Date; //ovo je timestamp
  hospitalRoomId: number;
  lbzRegister: string;
  dischargeDateAndTime: Date; //ovo je timestamp
  prescriptionId: number;
  name: string;
  surname: string;
  jmbg: string;
  note: string;
}
