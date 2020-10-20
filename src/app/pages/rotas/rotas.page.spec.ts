import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RotasPage } from './rotas.page';

describe('RotasPage', () => {
  let component: RotasPage;
  let fixture: ComponentFixture<RotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
