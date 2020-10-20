import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { auth } from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  public userLogin: any = {};
  public userRegister: any = {};
  private loading: any;
  
  ;

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard,
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit() { }




// Login pelo Google
  loginGoogle() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>{
      this.router.navigate(['inicio']);
    });
  }
  logoutGoogle() {
    this.afAuth.signOut();
  }


// Mudança de slide, Login e Cadastro
  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
     
    } else {
      this.slides.slideNext();
     
    }
  }


// Login
  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  // Registro
  async register() {
    try {
      const newUser = await this.afa.createUserWithEmailAndPassword(this.userRegister.email, this.userRegister.password);
      const newUserObject = Object.assign({}, this.userRegister);

      delete newUserObject.password;

      await this.afs.collection('Users').doc(newUser.user.uid).set(newUserObject);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }


// Loading
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
 
}


