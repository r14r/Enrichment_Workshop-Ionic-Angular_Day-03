import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesDataModel } from '../../model/data.model';
import { HelperService } from 'src/app/helpers/helper.service';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	url = 'assets/data/countries.json';
	urlOneline = 'https://restcountries.eu/rest/v2/all';

	data: Observable<CountriesDataModel[]>;

	currentItem: CountriesDataModel;
	private ID = 'CountriesDataService';
	private toolbox = new HelperService(this.ID);

	constructor(private http: HttpClient) {
		this.toolbox.log('constructor');

		this.getData();
	}

	getData(): Observable<CountriesDataModel[]> {
		this.toolbox.log('getData');

		this.data = this.http.get<CountriesDataModel[]>(this.url);

		return this.data;
	}

	updateItem(updateItem: CountriesDataModel) {
		// const item = this.items.findIndex(item => item.name == updateItem.name);
		// this.items[itemIndex] = newValues;
	}

	addItem(name) {
		this.toolbox.log('addItem', 'name =' + name);

		const item = new CountriesDataModel();
		item.name = name;

		// this.data.push(item);
	}
}
