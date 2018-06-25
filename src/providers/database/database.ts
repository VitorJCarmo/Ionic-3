import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()

export class DatabaseProvider {

 apiUrl:string = 'http://secretariavirtual.herokuapp.com/api';
 data:any;

  constructor(private storage: Storage, public http:Http,public httpc:HttpClient) { }

  public insert(usuario: Usuario) {
    let key = usuario.email;
    return this.save(key, usuario);
  }

  public update(key: string, usuario: Usuario) {
    return this.save(key, usuario);
  }

  private save(key: string, usuario: Usuario) {
    return this.storage.set(key, usuario);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let usuarios: UsuarioList[] = [];

    return this.storage.forEach((value: Usuario, key: string, iterationNumber: Number) => {
      let usuario = new UsuarioList();
      usuario.key = key;
      usuario.nome = value;
      usuarios.push(usuario);
    })
      .then(() => {
        return Promise.resolve(usuarios);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  //API REQUEST

  // Gets
  getPac(){
    return this.httpc.get(`${this.apiUrl}/pacientes`);
  }
  getCon(){
    return this.httpc.get(`${this.apiUrl}/consultas`);
  }  
  getPacbyID(id){
    return this.httpc.get(`${this.apiUrl}/pacientes/${id}`);
  }
  getConbyID(id){
    return this.httpc.get(`${this.apiUrl}/consultas/${id}`);
  }
  
  //Posts
  postCon(con){
    this.httpc.post(`${this.apiUrl}/consultas`, con).subscribe((res) => {
    return res;
  })
  }
  postPac(pac){
    this.httpc.post(`${this.apiUrl}/pacientes`, pac).subscribe((res) => {
      return res;
    })
  }

  //Puts
  putPac(pac){
    this.httpc.put(`${this.apiUrl}/pacientes`, pac).subscribe((res) => {
      return res;
    })
  }
  putCon(con){
    this.httpc.put(`${this.apiUrl}/consultas`, con).subscribe((res) => {
      return res;
    })
  }

}

export class Usuario {
  name: string;
  email: any;
  password: any;
  passwordc: any;
}

export class UsuarioList {
  key: string;
  nome: Usuario;
  password: any;
}
