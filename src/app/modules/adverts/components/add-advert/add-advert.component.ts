import { Component, OnInit } from '@angular/core';
import { Adverts } from '../../adverts';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
  advertForm: FormGroup;
  advert: Adverts = new Adverts();

  constructor(private fb: FormBuilder ) {}

  // TODO  Respecter la struture du formulaire avec les validators
  ngOnInit(): void {
    this.advertForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      picture: ['', Validators.required],
      price: ['', Validators.required],
      desc: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  save() {
    console.log(this.advertForm);
    console.log('Saved: ' + JSON.stringify(this.advertForm.value));
  }

  populateTestData(): void {
    this.advertForm.setValue({
      title: 'Vélo',
      picture: 'Photo de Vélo',
      price: '250',
      desc: 'Un super vélo de montagne',
      zip: '13100'
    });
  }

}
