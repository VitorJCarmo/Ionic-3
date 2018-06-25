import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'cadastro-consulta',
  templateUrl: 'cadastroconsulta.html'
})
export class CadastroConPage {
  consultas: any;
  selecPac = false;
  pacientes: any;
  selectedPaciente: any;
  dataConsulta: any;
  horaConsulta: any;
  selectedPacienteNome;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public modalCtrl: ModalController) {
 this.getP();
  }
  getP(){
    this.db.getPac()
      .subscribe((data: any) => {
        this.pacientes = data.pacientes
    });
  }
  presentActionSheet() {
      this.selecPac = true;
  }
  selectedP(p) {
      this.selecPac = false;
      this.selectedPaciente = p.id;
      this.selectedPacienteNome = p.nome;
  }
  closelist(){
    this.selecPac = false;
  }
  conRequest() {
      const con: consulta = {};
      con.data = this.dataConsulta;
      con.hora = this.horaConsulta;      
      con.status = true;
      con.paciente_id = this.selectedPaciente;
      this.db.postCon(con);
      const alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Consulta Cadastrada com sucesso',
        buttons: ['OK']
      });
      alert.present();
    }
  }


interface consulta {
    data?: any;
    hora?: any;
    status?: boolean;
    paciente_id?: number
}
