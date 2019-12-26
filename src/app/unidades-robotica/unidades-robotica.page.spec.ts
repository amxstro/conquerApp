import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnidadesRoboticaPage } from './unidades-robotica.page';

describe('UnidadesRoboticaPage', () => {
  let component: UnidadesRoboticaPage;
  let fixture: ComponentFixture<UnidadesRoboticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesRoboticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadesRoboticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
