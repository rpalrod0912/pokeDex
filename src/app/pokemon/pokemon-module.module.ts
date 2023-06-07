import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonService } from './services/pokemon.service';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';

@NgModule({
  declarations: [ListsPageComponent, LayoutPageComponent, PokemonViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    PokemonRoutingModule,
    SharedModule,
  ],
})
export class PokemonModule {}
