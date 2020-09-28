import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TEMPLATEPage } from './page';

describe('TEMPLATEPage', () => {
	let component: TEMPLATEPage;
	let fixture: ComponentFixture<TEMPLATEPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TEMPLATEPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(TEMPLATEPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
