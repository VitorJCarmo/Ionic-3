import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Pipe, PipeTransform } from '@angular/core';
import {ListPage} from '../list/list'
import { CadastroPacPage } from './cadastropaciente';
import { EditarPacPage } from './editarpaciente';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

pacientes: Array<any> = [];
consultas: Array<any> = [];
test:any;
lol:any;
listaRoot = ListPage;
editarPac= EditarPacPage;
params;
idPac;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast:ToastController, 
    public db:DatabaseProvider, public modalCtrl: ModalController) {
    this.getP();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getP(){
    this.db.getPac()
      .subscribe((data: any) => {
        this.pacientes = data.pacientes
    });
  }
  cadastrarpaciente(){
    this.navCtrl.push(CadastroPacPage);
  }
  editarPaciente(pacid){
    this.idPac = pacid;
    this.navCtrl.push(this.editarPac, {
      id: this.idPac,
    });
  }
}
