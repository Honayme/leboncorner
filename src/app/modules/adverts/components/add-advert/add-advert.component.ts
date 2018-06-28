import {Component, OnInit} from '@angular/core';
import {Adverts} from '../../adverts';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


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
  image = '';


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private advertsService: AdvertsService,
              private router: Router,
              public sanitize: DomSanitizer) {
  }

  // TODO  Respecter la struture du formulaire avec les validators
  ngOnInit(): void {
    this.advertForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      picture: ['' , Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      desc: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      zip: ['', [Validators.required, Validators.min(1)]],
    });

    const id = this.route.snapshot.params['id'];
    this.Advert = new Adverts('', '', '', '', '', '');

    console.log(id);
    if (id) {
      this.update = true;
      this.advertsService.getDetail(id).subscribe( (advert: any) => {
        console.log(advert[0]);

        this.Advert.id = advert[0].id;
        console.log(advert[0]);

        this.image = advert[0].picture;
        console.log(advert[0]);

        //Patch value avec l'objet entier bug à cause de l'image, reactiv form a du mal avec le type file
        this.advertForm.patchValue({
          title : advert[0].title,
          price : advert[0].price,
          desc : advert[0].desc,
          zip : advert[0].zip,
        });
      });
    }
  }

  save() {
    this.Advert = Object.assign(this.Advert, this.advertForm.value);
    this.Advert.picture = this.image;
    if (this.update !== true) {
      this.advertsService.createAdvert(this.Advert).subscribe(Advert => {
          this.router.navigate(['/adverts']);
          console.log("create");
        });
    } else {
      this.advertsService.updateAdvert(this.Advert).subscribe(Advert => {
        this.router.navigate(['/adverts']);
        console.log("update");
      });
    }
  }

  //TODO ne marche plus à cause de la photo en type file
  populateTestData(): void {
    this.advertForm.setValue({
      title: 'Vélo de montagne',
      picture: '',
      price: '250',
      desc: 'Un super vélo de montagne',
      zip: '13100'
    });
  }

  // IMAGE
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      // console.log(this.image);
    };
    myReader.readAsDataURL(file);

  }

}
