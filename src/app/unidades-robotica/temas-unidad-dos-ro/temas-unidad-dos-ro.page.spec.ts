import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemasUnidadDosRoPage } from './temas-unidad-dos-ro.page';

describe('TemasUnidadDosRoPage', () => {
  let component: TemasUnidadDosRoPage;
  let fixture: ComponentFixture<TemasUnidadDosRoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasUnidadDosRoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemasUnidadDosRoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
