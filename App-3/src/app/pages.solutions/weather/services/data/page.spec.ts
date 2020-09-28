import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherService } from './service';

describe('WeatherService', () => {
	let component: WeatherService;
	let fixture: ComponentFixture<WeatherService>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WeatherService],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
