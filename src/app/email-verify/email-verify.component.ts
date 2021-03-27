import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import PouchDB from 'node_modules/pouchdb';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  ngOnInit(): void {
  }
  pouchdb: any;
  result: any;
  uploadForm: FormGroup ;
  
  constructor(private formBuilder: FormBuilder) {
    this.pouchdb = new PouchDB("companyform");
  }

  companydetail() {
    var companyform = {
      _id: new Date().toISOString(),
      companyname: this.companyform.value.companyname,
      emailid: this.companyform.value.emailid,
      jobtitle: this.companyform.value.jobtitle,
      yearofexperience: this.companyform.value.yearofexperience,
      termsconditions: this.companyform.value.termsconditions,
    }
    this.pouchdb.put(companyform, function (result, error) {
      console.log(result);
      if (!error) {
        alert("personal form saved successfully")
      }
    }
    )
    console.log('done!');
    
  }
  companyform = this.formBuilder.group(

    {
      companyname: '',
      emailid: '',
      jobtitle: '',
      yearofexperience: '',
      termsconditions: '',
    },
  )

}
