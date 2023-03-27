import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Page} from "../../../models/models";
import {Patient} from "../../../models/patient/Patient";
import {Router} from "@angular/router";
import {PatientService} from "../../../services/patient-service/patient.service";

@Component({
  selector: 'app-doctor-search-patients',
  templateUrl: './doctor-search-patients.component.html',
  styleUrls: ['./doctor-search-patients.component.css']
})
export class DoctorSearchPatientsComponent implements OnInit{

  searchForm: FormGroup
  public name: string = ''
  public surname: string = ''
  public jmbg: string = ''
  public lbp: string = ''
  patientPage: Page<Patient> = new Page<Patient>()
  patientList: Patient[] = []
  routerUpper: Router
  page = 0
  pageSize = 5
  total = 0


  constructor(private patientService: PatientService, private formBuilder: FormBuilder, private router: Router) {
    this.routerUpper = router
    this.searchForm = this.formBuilder.group({
      name: '',
      surname: '',
      jmbg: '',
      lbp: ''
    })
  }

  ngOnInit(): void {
    this.patientService.getAllPatients(this.lbp, this.jmbg, this.name, this.surname, this.page, this.pageSize).subscribe((response) => {
      this.patientPage = response
      this.patientList = this.patientPage.content
      this.total = this.patientPage.totalElements

    })
  }

  getPatientList(){
    // if(this.page == 0){
    //   this.page = 1
    // }
    this.patientService.getAllPatients(this.lbp, this.jmbg, this.name, this.surname, this.page, this.pageSize).subscribe((response) => {
      this.patientPage = response
      this.patientList = this.patientPage.content
      this.total = this.patientPage.totalElements

    })
  }

  onTableDataChange(event: any): void {
    this.page = event;
    this.getPatientList();
  }

  // searchForm: FormGroup
  // public name: string = ''
  // public surname: string = ''
  // public jmbg: string = ''
  // public lbp: string = ''
  // patientPage: Page<Patient> = new Page<Patient>()
  // patientList: Patient[] = []
  // routerUpper: Router
  // page = 0
  // pageSize = 5
  // total = 0
  //
  //
  // constructor(private patientService: PatientService, private formBuilder: FormBuilder, private router: Router) {
  //   this.routerUpper = router
  //   this.searchForm = this.formBuilder.group({
  //     name: '',
  //     surname: '',
  //     jmbg: '',
  //     lbp: ''
  //   })
  // }
  //
  // ngOnInit(): void {
  //   this.patientService.getAllPatients(this.lbp, this.jmbg, this.name, this.surname, this.page, this.pageSize).subscribe((response) => {
  //     this.patientPage = response
  //     this.patientList = this.patientPage.content
  //     this.total = this.patientPage.totalElements
  //
  //   })
  // }
  //
  //
  // getPatientList(){
  //   if(this.page == 0){
  //     this.page = 1
  //   }
  //   this.patientService.getAllPatients(this.lbp, this.jmbg, this.name, this.surname, this.page, this.pageSize).subscribe((response) => {
  //     this.patientPage = response
  //     this.patientList = this.patientPage.content
  //     this.total = this.patientPage.totalElements
  //
  //   })
  // }
  //
  // onTableDataChange(event: any): void {
  //   this.page = event;
  //   this.getPatientList();
  // }
}
