import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToolbarHeaderComponent, LoadSpinnerComponent, CardComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ToolbarHeaderComponent, LoadSpinnerComponent, CardComponent],
})
export class SharedModule {}
