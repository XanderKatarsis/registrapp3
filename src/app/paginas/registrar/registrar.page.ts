import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class registrarPage implements OnInit {
  ionicForm: FormGroup;


  constructor(private toastController: ToastController,private loadingController: LoadingController,private authService:AuthServiceService,private router: Router, public formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    // this.registrar()
    this.ionicForm = this.formBuilder.group({
      fullname:['',
        [Validators.required]
      ],
      contact:['',
      [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        // Validators.min(10)
      ]
    ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ],
    ],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  async registrarWithGoogle(){
    const user = await this.authService.GoogleAuth().then(()=>{
      this.router.navigate(['/home'])
    })
  }
 
  async registrar(){
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.ionicForm.valid) {

      const user = await this.authService.registerUser(this.ionicForm.value.email, this.ionicForm.value.password,this.ionicForm.value.fullname).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/home'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }
  registrarUsingPhonenumber(contact:string){
    
    this.authService.signInWithPhoneNumber(contact)
  }
  async presentToast(message: undefined) {
    console.log(message);
    
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
