import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { CadastroConPage } from '../pages/list/cadastroconsulta';
import { CadastroPacPage } from '../pages/login/cadastropaciente';
import { EditarPacPage } from '../pages/login/editarpaciente';
import { RegisterComponent } from '../components/register/register';

import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { MainProvider } from '../providers/main/main';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    RegisterComponent,
    LoginPage,
    CadastroConPage,
    CadastroPacPage,
    EditarPacPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    RegisterComponent,
    LoginPage,
    CadastroConPage,
    CadastroPacPage,
    EditarPacPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    MainProvider
  ]
})
export class AppModule {}
