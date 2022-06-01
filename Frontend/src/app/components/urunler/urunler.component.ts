import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { UrunDialogComponent } from './../dialogs/urun-dialog/urun-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from './../../services/api.service';
import { Urun } from './../../models/Urun';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MyAlertService } from 'src/app/services/my-alert.service';
import { Sonuc } from 'src/app/models/Sonuc';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css']
})
export class UrunlerComponent implements OnInit {
urunler!: Urun[];
displayedColumns=['urunId','urunAdi','urunKatAdi','urunFiyat','islemler']
dataSource: any;
@ViewChild(MatSort) sort!:MatSort;
@ViewChild(MatPaginator) paginator!:MatPaginator;
dialogRef!:MatDialogRef<UrunDialogComponent>;
confirmdialogRef!:MatDialogRef<ConfirmDialogComponent>;

  constructor(
    public ApiServis: ApiService,
    public matDialog: MatDialog,
    public alert:MyAlertService
  ) { }

  ngOnInit() {
    this.UrunListele();
  }

 UrunListele(){
   this.ApiServis.UrunListe().subscribe((d: Urun[]) => {
     this.urunler =d;
    this.dataSource= new MatTableDataSource(this.urunler);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;


});
}

Ekle(){
  var yeniKayit:Urun= new Urun();
this.dialogRef=this.matDialog.open(UrunDialogComponent,{
  width:'400px',
  data:{
    kayit:yeniKayit,
    islem:'ekle'
  }
});
this.dialogRef.afterClosed().subscribe(d=>{
  if(d){
  this.ApiServis.UrunEkle(d).subscribe((s: Sonuc)=>  {
    this.alert.AlertUygula(s);
    if(s.islem){
      this.UrunListele();
    }

  });
}
});

   }

   Duzenle(kayit:Urun){

    this.dialogRef=this.matDialog.open(UrunDialogComponent,{
      width:'400px',
      data:{
        kayit:kayit,
        islem:'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d=>{

kayit.urunAdi=d.urunAdi;
kayit.urunKatId=d.urunKatId;
kayit.urunFiyat=d.urunFiyat;



      this.ApiServis.UrunDuzenle(kayit).subscribe((s: Sonuc)=>{
this.alert.AlertUygula(s);
      });
    });



  }
  Sil(kayit:Urun){
    this.confirmdialogRef=this.matDialog.open(ConfirmDialogComponent,{
      width:'500px',
    });
this.confirmdialogRef.componentInstance.dialogMesaj=kayit.urunAdi+" silenecektir onaylıyor musunuz?"
    this.confirmdialogRef.afterClosed().subscribe(d =>{
      if(d){
        this.ApiServis.UrunSil(kayit.urunId).subscribe((s:Sonuc)=>
        {
          this.alert.AlertUygula(s);
          if(s.islem){
            this.UrunListele();
          }

        })
      }
    })

  }

}


