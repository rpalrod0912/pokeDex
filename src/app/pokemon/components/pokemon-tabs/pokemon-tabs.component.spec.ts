import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTabsComponent } from './pokemon-tabs.component';

describe('PokemonTabsComponent', () => {
  let component: PokemonTabsComponent;
  let fixture: ComponentFixture<PokemonTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTabsComponent]
    });
    fixture = TestBed.createComponent(PokemonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
