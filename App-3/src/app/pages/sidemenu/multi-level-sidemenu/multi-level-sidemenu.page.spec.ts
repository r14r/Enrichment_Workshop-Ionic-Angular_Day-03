import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiLevelSidemenuPage } from './multi-level-sidemenu.page';

describe('MultiLevelSidemenuPage', () => {
  let component: MultiLevelSidemenuPage;
  let fixture: ComponentFixture<MultiLevelSidemenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLevelSidemenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiLevelSidemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
