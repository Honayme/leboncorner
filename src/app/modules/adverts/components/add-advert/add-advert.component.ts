import {Component, OnInit} from '@angular/core';
import {Adverts} from '../../adverts';
import {ActivatedRoute, Router} from '@angular/router';


import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {AdvertsService} from '../../adverts.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
  advertForm: FormGroup;
  // advert: Adverts = new Adverts();
  Advert: Adverts;
  update = false;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private advertsService: AdvertsService,
              private router: Router) {
  }

  // TODO  Respecter la struture du formulaire avec les validators
  ngOnInit(): void {
    this.advertForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      picture: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      desc: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      zip: ['', [Validators.required, Validators.min(1)]],
    });

    const id = this.route.snapshot.params['id'];
    this.Advert = new Adverts('', '', '', '', '', '');

    // if (id) {
    //   this.update = true;
    //   this.advertsService.getDetail(id).subscribe(advert => {
    //     // this.Advert.id = advert.id;
    //     this.advertForm.patchValue(advert);
    //   });
    // }


  }

  save() {
    this.Advert = Object.assign(this.Advert, this.advertForm.value);
    if (!this.update) {
      this.advertsService.createAdvert(this.Advert).subscribe(Advert => {
          this.router.navigate(['/adverts']);
        });
    } else {
      this.advertsService.updateAdvert(this.Advert).subscribe(Advert => {
        this.router.navigate(['/adverts']);
      });
    }
  }

  // save() {
  //   console.log(this.advertForm);
  //   console.log('Saved: ' + JSON.stringify(this.advertForm.value));
  // }

  //TODO ne marche plus à cause de la photo en type file
  populateTestData(): void {
    this.advertForm.setValue({
      title: 'Vélo de montagne',
      picture: 'dd',
      price: '250',
      desc: 'Un super vélo de montagne',
      zip: '13100'
    });
  }

}
