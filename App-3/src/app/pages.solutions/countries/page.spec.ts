import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountriesOfTheWorldPage } from './page';

describe('CountriesOfTheWorldPage', () => {
	let component: CountriesOfTheWorldPage;
	let fixture: ComponentFixture<CountriesOfTheWorldPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CountriesOfTheWorldPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(CountriesOfTheWorldPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
