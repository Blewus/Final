import { PanelComponent } from './components/anasayfa/panel/panel.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MyAlertService } from './services/my-alert.service';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MaterialModule } from './material.module';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UrunlerComponent } from './components/urunler/urunler.component';

import { UrunDialogComponent } from './components/dialogs/urun-dialog/urun-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    MainNavComponent,
    PanelComponent,
    UrunlerComponent,
    //Dialoglar
    AlertDialogComponent,
    UrunDialogComponent,
   ConfirmDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents:[
AlertDialogComponent,
UrunDialogComponent

  ],
  providers: [MyAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
