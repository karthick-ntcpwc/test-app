import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent implements OnInit {

  constructor(private fb :FormBuilder) { }

  userForm = this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]]
  })

  ngOnInit(): void {
  }
  onSub(){
    console.log(this.userForm)
    console.log(this.userForm.value)
  }
}
