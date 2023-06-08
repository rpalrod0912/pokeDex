import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-tabs',
  templateUrl: './pokemon-tabs.component.html',
  styleUrls: ['./pokemon-tabs.component.scss'],
})
export class PokemonTabsComponent implements OnInit {
  @Input() cardData: any;
  @Input() speciesData: any;

  description!: any;

  ngOnInit(): void {
    this.description = this.speciesData.genera.findIndex((object: any) => {
      debugger;
      console.log(object);
      return object.language.name === 'es';
    });
    debugger;
    console.log(this.description);
    console.log(this.description.genus);
  }
}
