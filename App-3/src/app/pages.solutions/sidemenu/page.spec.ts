import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiLevelSideMenuPage } from './page';

describe('MultiLevelSideMenuPage', () => {
	let component: MultiLevelSideMenuPage;
	let fixture: ComponentFixture<MultiLevelSideMenuPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MultiLevelSideMenuPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(MultiLevelSideMenuPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
