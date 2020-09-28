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
	public appPages = [
		{ title: 'Demo', url: '/demo', icon: 'home' },
		{ title: 'Vier gewinnt: 1', url: '/game/connect4/1', icon: 'home' },
		{ title: 'Vier gewinnt: 2', url: '/game/connect4/2', icon: 'home' },
		{ title: 'Vier gewinnt: Demo1', url: '/game/connect4/Demo1', icon: 'home' },
		{ title: 'Vier gewinnt: Demo2', url: '/game/connect4/Demo2', icon: 'home' },
		{ title: 'Vier gewinnt: Demo3', url: '/game/connect4/Demo3', icon: 'home' },
		{ title: 'Vier gewinnt: Demo4', url: '/game/connect4/Demo4', icon: 'home' },

		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'Weather', url: '/weather', icon: 'help' },
		{ title: 'Countries', url: '/countries-of-the-world', icon: 'help' },

		{ title: 'Solution: Weather', url: '/solutions/weather', icon: 'list' },
		{
			title: 'Solution: Countries',
			url: '/solutions/countries',
			icon: 'list'
		},
		{
			title: 'Solution: Countries (with Components)',
			url: '/solutions/countries_with_components',
			icon: 'list'
		},
		{
			title: 'D3: Function Plotter',
			url: '/d3/function-plotter',
			icon: 'stats'
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
}
