import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruductComponent } from './pruduct/pruduct.component';
import { ProductsComponent } from './products/products.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { VoitureComponent } from './voiture/voiture.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddComponent } from './add/add.component';
import { AjouterComponent } from './ajouter/ajouter.component';

@NgModule({
  declarations: [
    AppComponent,
    PruductComponent,
    ProductsComponent,
    SearchfilterPipe,
    VoitureComponent,
    AddProduitComponent,
    AddComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
