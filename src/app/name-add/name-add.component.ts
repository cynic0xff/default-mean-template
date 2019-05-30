import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-add',
  templateUrl: './name-add.component.html',
  styleUrls: ['./name-add.component.scss']
})
export class NameAddComponent implements OnInit {

  nameForm: FormGroup;
  name: string = '';
  address: string = '';
  isLoading = true;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.nameForm = this.formBuilder.group({
      'name' : [null, Validators.required]
    });
  }

  onSubmit(form:NgForm) {
    this.isLoading = true;
    this.api.addName(form)
    .subscribe(res => {
      let id = res['_id'];
      this.isLoading = false;
      this.router.navigate(['/name-detail', id])
    }, (err) => {
      console.log(err);
      this.isLoading = false;
    })
  }

}
