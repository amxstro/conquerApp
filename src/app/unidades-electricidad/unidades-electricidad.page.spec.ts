import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnidadesElectricidadPage } from './unidades-electricidad.page';

describe('UnidadesElectricidadPage', () => {
  let component: UnidadesElectricidadPage;
  let fixture: ComponentFixture<UnidadesElectricidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesElectricidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadesElectricidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
