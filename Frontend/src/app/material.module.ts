import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const MatModuller = [
MatButtonModule,
MatIconModule,
MatDividerModule,
MatCardModule,
MatToolbarModule,
MatDialogModule,
MatSidenavModule,
MatListModule,
MatTableModule,
MatTooltipModule,
MatSortModule,
MatPaginatorModule,
MatFormFieldModule,
MatInputModule
];

@NgModule({
  imports: [MatModuller],
  exports: [MatModuller]
})
export class MaterialModule { }
