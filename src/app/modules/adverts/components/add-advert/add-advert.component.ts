import { Component, OnInit } from '@angular/core';
import { Adverts } from '../../adverts';

import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
  advertForm: FormGroup;
  // advert: Adverts = new Adverts();

  constructor(private fb: FormBuilder ) {}

  // TODO  Respecter la struture du formulaire avec les validators
  ngOnInit(): void {
    this.advertForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      picture: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      desc: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)] ],
      zip: ['', [Validators.required, Validators.min(1)]],
    });
  }

  save() {
    console.log(this.advertForm);
    console.log('Saved: ' + JSON.stringify(this.advertForm.value));
  }

  //TODO ne marche plus à cause de la photo en type file
  populateTestData(): void {
    this.advertForm.setValue({
      title: 'Vélo',
      picture: '',
      price: '250',
      desc: 'Un super vélo de montagne',
      zip: '13100'
    });
  }

}
