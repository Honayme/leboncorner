import {Component, OnInit} from '@angular/core';
import {Adverts} from '../../adverts';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AdvertsService} from '../../adverts.service';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
  advertForm: FormGroup;
  Advert: Adverts;
  update = false;
  image = '';


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private advertsService: AdvertsService,
              private router: Router,
              public sanitize: DomSanitizer) {
  }

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

    // Fait un populate du form si il y a un ID dans en paramètre
    if (id) {
      this.update = true;
      this.advertsService.getDetail(id).subscribe( (advert: any) => {
        this.Advert.id = advert[0].id;
        this.image = advert[0].picture;

        // Le patchValue n'arrive pas à remplir l'input type="file" avec un string
        this.advertForm.patchValue({
          title : advert[0].title,
          price : advert[0].price,
          desc : advert[0].desc,
          zip : advert[0].zip,
        });
      });
    }
  }

  // Update si il y a un ID Create si il n'y en a pas
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

  // Fonction pour remplir le formulaire
  populateTestData(): void {
    this.advertForm.setValue({
      title: 'Vélo de montagne',
      picture: '',
      price: '250',
      desc: 'Un super vélo de montagne',
      zip: '13100'
    });
  }

  // Permet de convertir l'image en Base64
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    };
    myReader.readAsDataURL(file);

  }

}
