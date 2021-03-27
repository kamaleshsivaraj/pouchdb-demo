import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import PouchDB from 'node_modules/pouchdb';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit(): void {
  }

  pouchdb: any;
  result: any;
  uploadForm: FormGroup ;
  constructor(private formBuilder: FormBuilder) {
    this.pouchdb = new PouchDB("personalform");
  }
  
  Gender: any = ['Male', 'Fe-male', 'Other'];
  State: any = ['Tamil Nadu', 'Kerala', 'UK'];
  Country: any = ['India', 'USA', 'UK'];

  personaldetail() {
    var personalform = {
      _id: new Date().toISOString(),
      fullname: this.personalform.value.fullname,
      gender: this.personalform.value.gender,
      country: this.personalform.value.country,
      state: this.personalform.value.state,
      phone: this.personalform.value.phone,
    }
    this.pouchdb.put(personalform, function (result, error) {
      console.log(result);
      if (!error) {
        alert("personal form saved successfully")
      }
    }
    )
    console.log('done!');
    
  }
  personalform = this.formBuilder.group(

    {
      fullname: '',
      gender: '',
      country: '',
      state: '',
      phone: '',
    },
  )

}
