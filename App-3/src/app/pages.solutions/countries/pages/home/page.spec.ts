import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CountriesPage } from './page';

describe('CountriesPage', () => {
	let component: CountriesPage;
	let fixture: ComponentFixture<CountriesPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CountriesPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(async () => {
		fixture = await TestBed.createComponent(CountriesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
