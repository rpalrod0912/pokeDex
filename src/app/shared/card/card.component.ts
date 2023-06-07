import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public pkmnType: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.card);
    this.card.types.forEach((type: any) => {
      this.setPkmnTypesIcon(type.type.name);
    });
  }
  @Input() card: any;

  public setPkmnTypesIcon(typeName: string) {
    const objetoData: any = {
      url: `assets/pokemon-type-svg-icons-master/icons/${typeName}.svg`,
    };
    console.log(this.pkmnType);
    switch (typeName) {
      case 'normal':
        objetoData['color'] = '#A0A29F';
        break;
      case 'poison':
        objetoData['color'] = '#B763CF';

        break;

      case 'fighting':
        objetoData['color'] = '#D3425F';
        break;
      case 'flying':
        objetoData['color'] = '#A1BBEC';

        break;

      case 'ground':
        objetoData['color'] = '#DA7C4D';

        break;
      case 'rock':
        objetoData['color'] = '#C9BB8A';

        break;
      case 'bug':
        objetoData['color'] = '#92BC2C';

        break;
      case 'ghost':
        objetoData['color'] = '#5F6DBC';

        break;
      case 'steel':
        objetoData['color'] = '#5695A3';

        break;
      case 'water':
        objetoData['color'] = '#539DDF';

        break;
      case 'fire':
        objetoData['color'] = '#FBA54C';

        break;
      case 'grass':
        objetoData['color'] = '#5FBD58';

        break;
      case 'electric':
        objetoData['color'] = '#F2D94E';

        break;
      case 'psychic':
        objetoData['color'] = '#FA8581';

        break;
      case 'ice':
        objetoData['color'] = '#75D0C1';

        break;
      case 'dragon':
        objetoData['color'] = '#0C69C8';

        break;
      case 'dark':
        objetoData['color'] = '#595761';

        break;
      case 'fairy':
        objetoData['color'] = '#EE90E6';

        break;
      case 'shadow':
        break;
    }
    this.pkmnType.push(objetoData);
    console.log(this.pkmnType);
  }

  public navigate(id: string) {
    debugger;
    //this.router.navigate(['/pokemon/pokemonview'], { queryParams: { id } });
    this.router.navigate(['/pokemon/pokemonview', id]);
  }
}
