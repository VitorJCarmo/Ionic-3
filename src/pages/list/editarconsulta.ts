import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'editar-consulta',
  templateUrl: 'editarconsulta.html'
})
export class EditarConPage {
  consultas: any;
  selecPac = false;
  pacientes: any;
  selectedPaciente: any;
  dataConsulta: any;
  horaConsulta: any;
  nomePac;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public modalCtrl: ModalController) {
  navParams.get('id');
    this.db.getConbyID(navParams.get('id')).subscribe((res: any) => {
      this.dataConsulta = res.consulta.data;
      this.horaConsulta = res.consulta.hora_inicial;
      this.selectedPaciente = res.consulta.id
    })
    this.db.getPacbyID(this.selectedPaciente).subscribe((res: any) => this.nomePac = res.paciente.nome
  )      
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
      this.nomePac = p.nome;
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
        subTitle: 'Consulta Alterada com sucesso',
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
