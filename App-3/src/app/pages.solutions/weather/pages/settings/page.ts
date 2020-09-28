import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class WeatherSettingsPage implements OnInit {

	constructor(
		private storage: Storage,
		private service: DataService,
		private router: Router,
		private modal: ModalController) { }

	ngOnInit() {
	}

}
