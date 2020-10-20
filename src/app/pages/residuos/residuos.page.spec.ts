import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResiduosPage } from './residuos.page';

describe('ResiduosPage', () => {
  let component: ResiduosPage;
  let fixture: ComponentFixture<ResiduosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiduosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResiduosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
