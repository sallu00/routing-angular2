import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder  , FormGroup , ReactiveFormsModule , Validators} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

   //myForm: FormGroup;
   users: any;
  //fb: FormBuilder;
  constructor( /*fb: FormBuilder,*/ private route: ActivatedRoute ) {
    // this.myForm = fb.group( {
    //   search : ['', [Validators.required , Validators.pattern('[a-zA-Z ]*') , Validators.maxLength(8)] ] ,
    // });
    //console.log(this.myForm.value);s
  }

  ngOnInit() {
    this.users=this.route.snapshot.data['users'];
  }
}
