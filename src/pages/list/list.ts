import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { CadastroConPage } from './cadastroconsulta';
import { EditarConPage } from './editarconsulta';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  consultas: any;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.getC()

  }
    getC(){
      this.db.getCon()
        .subscribe((data: any) => {       
        this.consultas = data.consultas
        console.log(this.consultas)
      });
    }
    cadastrarconsulta(){
      this.navCtrl.push(CadastroConPage);
    }
    editarconsulta(conid){
      this.navCtrl.push(EditarConPage, {
        id: conid,
      });
    }
}
