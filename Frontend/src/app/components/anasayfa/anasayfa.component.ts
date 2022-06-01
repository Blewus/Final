
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyAlertService } from './../../services/my-alert.service';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/Sonuc';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  constructor(
    public alert:MyAlertService,
    public matDialog:MatDialog

  ) { }

  ngOnInit() {
  }

  AlertAc(p:boolean){
    var s:Sonuc=new Sonuc();
    s.islem=p;
    s.mesaj="bu bir alert test mesajı"

this.alert.AlertUygula(s);
  }


}
