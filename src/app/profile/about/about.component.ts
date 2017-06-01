import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { FormBuilder  , FormGroup , ReactiveFormsModule , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public message : string="GOOD MORNING";
  myMessage: FormGroup;
  @Output() changeMessage= new EventEmitter();
  fb: FormBuilder;
  constructor( fb: FormBuilder , private router: Router) {
    this.myMessage = fb.group( {
      message : ['', [Validators.required , Validators.maxLength(30)] ] 
    });
  }

  ngOnInit() {
  }
  submit(value: any) {
    this.message=value;
    this.changeMessage.emit(value);
    this.myMessage.reset();
  }

}
