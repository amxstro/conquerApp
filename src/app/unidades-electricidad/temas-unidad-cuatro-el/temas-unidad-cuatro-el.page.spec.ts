import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadCuatroElPage } from './temas-unidad-cuatro-el.page';

describe('TemasUnidadCuatroElPage', () => {
  let component: TemasUnidadCuatroElPage;
  let fixture: ComponentFixture<TemasUnidadCuatroElPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadCuatroElPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadCuatroElPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
