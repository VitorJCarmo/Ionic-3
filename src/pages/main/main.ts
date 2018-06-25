import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {ListPage} from '../list/list';


@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  mainRoot = MainPage;
  listaRoot = ListPage;
  loginRoot = LoginPage;

  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast:ToastController) {
    this.toast.create({ message: 'Seja Bem Vindo!', duration: 3000, position: 'botton' }).present();
 }

}