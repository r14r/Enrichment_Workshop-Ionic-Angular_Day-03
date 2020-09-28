import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VierGewinntPage } from './page';

describe('VierGewinntPage', () => {
	let component: VierGewinntPage;
	let fixture: ComponentFixture<VierGewinntPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VierGewinntPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(VierGewinntPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
