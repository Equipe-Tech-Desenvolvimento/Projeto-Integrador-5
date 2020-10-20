import { Component, OnInit } from '@angular/core';

// 1) Importa classes de autenticação
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { newArray } from '@angular/compiler/src/util';
import { UserService } from 'src/app/services/product.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-loginout',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  private userSubscription: any;
  private users = new Array<User>();
 
 
  constructor(

    public afAuth: AngularFireAuth,
    public router: Router,
    private productService: UserService,
    
  ) 

  { 

    this.userSubscription = this.productService.getUsers().subscribe(data => {
      this.users = data;

  });
}  

  ngOnInit() { }





  // 3) Método de Login
  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {

        // Após logar, redireciona para a 'home'
        this.router.navigate(['/home']);
      });
  }

  // 4) Método de logout
  logout() {
    this.afAuth.signOut();
  }
}





