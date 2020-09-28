import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

	showLevel1 = null;
	showLevel2 = null;

	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' }
	];

	public appMenu = [
		{
			'category': 'PC',
			'subs': [
				{
					'subcategory': 'Processor',
					'manufactures': [
						{
							'manufacture': 'Intel'
						},
						{
							'manufacture': 'AMD'
						}
					]
				},
				{
					'subcategory': 'Motherboard',
					'manufactures': [
						{
							'manufacture': 'Asus'
						},
						{
							'manufacture': 'AMD'
						},
						{
							'manufacture': 'GigaByte'
						},
						{
							'manufacture': 'Intel'
						}
					]
				},
				{
					'subcategory': 'Memory',
					'manufactures': [
						{
							'manufacture': 'Visipro'
						},
						{
							'manufacture': 'Crucial'
						},
						{
							'manufacture': 'VenomRX'
						}
					]
				}
			]
		},
		{
			'category': 'Laptop',
			'subs': [
				{
					'subcategory': 'Notebook',
					'manufactures': [
						{
							'manufacture': 'Lenovo'
						},
						{
							'manufacture': 'Dell'
						}
					]
				},
				{
					'subcategory': 'Netbook',
					'manufactures': [
						{
							'manufacture': 'Lenovo'
						},
						{
							'manufacture': 'Dell'
						},
						{
							'manufacture': 'Acer'
						},
						{
							'manufacture': 'HP'
						}
					]
				}
			]
		},
		{
			'category': 'Printer',
			'subs': [
				{
					'subcategory': 'Laserjet',
					'manufactures': [
						{
							'manufacture': 'HP'
						},
						{
							'manufacture': 'Brother'
						},
						{
							'manufacture': 'Canon'
						},
						{
							'manufacture': 'Samsung'
						}
					]
				},
				{
					'subcategory': 'Deskjet',
					'manufactures': [
						{
							'manufacture': 'HP'
						},
						{
							'manufacture': 'Canon'
						},
						{
							'manufacture': 'Epson'
						}
					]
				}
			]
		}
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}




	toggleLevel1(idx) {
		if (this.isLevel1Shown(idx)) {
			this.showLevel1 = null;
		} else {
			this.showLevel1 = idx;
		}
	};

	toggleLevel2(idx) {
		if (this.isLevel2Shown(idx)) {
			this.showLevel1 = null;
			this.showLevel2 = null;
		} else {
			this.showLevel1 = idx;
			this.showLevel2 = idx;
		}
	};

	isLevel1Shown(idx) {
		return this.showLevel1 === idx;
	};

	isLevel2Shown(idx) {
		return this.showLevel2 === idx;
	};

}
