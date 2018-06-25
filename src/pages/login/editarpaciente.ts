import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'editar-paciente',
  templateUrl: 'editarpaciente.html'
})
export class EditarPacPage {
  selecPac = false;
  pacientes: any;
  nomePaciente;
  telPaciente;
  obsPaciente;
  emailPaciente;
  dataNascimento;
  sexoPaciente;
  dataCadastro;
  idPac;
  npaciente = { 
    paciente: { 
      nome: 'any',
      telefone: '',
      observacao: 'this.obsPaciente',
      email: 'this.emailPaciente',
      nascimento: 'this.dataNascimento',
      sexo: 'this.sexoPaciente',
      paciente_desde: 'this.dataCadastr',
      status: true,
      dia_vencimento: 15

    }
  }
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public modalCtrl: ModalController) {
    this.idPac = navParams.get('id');
      this.db.getPacbyID(this.idPac).subscribe((res: any)=> {
      this.nomePaciente = res.paciente.nome;
      this.telPaciente = res.paciente.telefone;
      this.obsPaciente = res.paciente.observacao;
      this.emailPaciente = res.paciente.email;
      this.dataNascimento = res.paciente.nascimento;
      this.sexoPaciente = res.paciente.sexo;
      this.dataCadastro = res.paciente.paciente_desde;
    })
  }
  pacRequest(){
    this.npaciente.paciente.nome = this.nomePaciente;
    this.npaciente.paciente.telefone = this.telPaciente;
    this.npaciente.paciente.observacao = this.obsPaciente;
    this.npaciente.paciente.email = this.emailPaciente;
    this.npaciente.paciente.nascimento = this.dataNascimento;
    this.npaciente.paciente.sexo = this.sexoPaciente;
    this.npaciente.paciente.paciente_desde = this.dataCadastro;
    this.db.putPac(this.npaciente);
    const alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Paciente Alterado com sucesso',
      buttons: ['OK']
    });
    alert.present();
  }
}


export class paciente {
  nome?: string;
  telefone?: string;
  observacao?: string;
  email?: string;
  nascimento?: string;
  sexo?: string;
  paciente_desde?: string;
  status?: true;
  dia_vencimento?: 15
}

/*    paciente: {
  nome: Teste;
  telefone: 999999999;
  observacao: Paciente blablabla;
  email: paciente.a@email.com;
  nascimento: 2000-01-01;
  sexo: Feminino;
  paciente_desde: 2017-01-15;
  status: true;
  dia_vencimento: 15 */