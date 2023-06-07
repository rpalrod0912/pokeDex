import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

// path vacio->>> localhost:4200/heroes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list',
        component: ListsPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
