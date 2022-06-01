import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './components/anasayfa/panel/panel.component';
import { UrunlerComponent } from './components/urunler/urunler.component';

const routes: Routes = [
{
  path:``,
  component:AnasayfaComponent
}
,
{
  path:`urunler`,
  component:UrunlerComponent
}
,
{
  path:`panel`,
  component:PanelComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
