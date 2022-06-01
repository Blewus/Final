import { Kategori } from './../models/Kategori';
import { Urun } from './../models/Urun';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl = "http://localhost:50158/api/"
constructor(
  public http: HttpClient
) { }

UrunListe(){
  return this.http.get<Urun[]>(this.apiUrl+"urunliste");
}

UrunEkle(urn:Urun){
return this.http.post(this.apiUrl+"urunekle" , urn);
}

UrunDuzenle(urn:Urun){
  return this.http.put(this.apiUrl+"urunduzenle",urn);
}

UrunSil(urnId: string){
  return this.http.delete(this.apiUrl+"urunsil/" + urnId);
}


//Kategori

KategoriListe(){
  return this.http.get("kategoriliste");
}

KategoriEkle(kat:Kategori){
return this.http.post("urunekle" , kat);
}

KategoriDuzenle(kat:Kategori){
  return this.http.put("urunduzenle",kat);
}

KategoriSil(urnId: string){
  return this.http.delete("urunsil/" + urnId);
}




}
