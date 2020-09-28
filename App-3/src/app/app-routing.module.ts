import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'solutions/', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () =>
			import('./pages.base/home/module').then(m => m.HomePageModule)
	},
	{
		path: 'demo',
		loadChildren: () =>
			import('./pages.base/demo/pages/module').then(m => m.DemoPageModule)
	},
	{
		path: 'list',
		loadChildren: () =>
			import('./pages.base/list/module').then(m => m.ListPageModule)
	},
	{
		path: 'solutions/side-menu',
		loadChildren: () =>
			import('./pages.solutions/sidemenu/module').then(
				m => m.MultiLevelSideMenuPageModule
			)
	},
	{
		path: 'solutions/weather',
		loadChildren: () =>
			import('./pages.solutions/weather/pages/home/module').then(
				m => m.WeatherPageModule
			)
	},
	{
		path: 'solutions/countries',
		loadChildren: () =>
			import('./pages.solutions/countries/pages/home/module').then(
				m => m.CountriesHomePageModule
			)
	},
	{
		path: 'solutions/countries_with_components',
		loadChildren: () =>
			import(
				'./pages.solutions/countries/pages/home_with_components/module'
			).then(m => m.CountriesWithComponentsHomePageModule)
	},
	{
		path: 'solutions/countries/details',
		loadChildren: () =>
			import('./pages.solutions/countries/pages/details/module').then(
				m => m.CountriesDetailsPageModule
			)
	},
	{
		path: 'solutions/template',
		loadChildren: () =>
			import('./pages.base/template/module').then(
				m => m.TEMPLATEPageModule
			)
	},
	{
		path: 'countries-of-the-world',
		loadChildren: () =>
			import(
				'./pages/countries/countries-of-the-world/countries-of-the-world.module'
			).then(m => m.CountriesOfTheWorldPageModule)
	},
	{
		path: 'multi-level-sidemenu',
		loadChildren: () =>
			import(
				'./pages/sidemenu/multi-level-sidemenu/multi-level-sidemenu.module'
			).then(m => m.MultiLevelSidemenuPageModule)
	},
	{ path: 'weather', loadChildren: () => import('./pages/weather/weather/module').then(m => m.WeatherPageModule) },
	{ path: 'game/connect4/1', loadChildren: () => import('./blocks/connect4/step1/pages/module').then(m => m.Connect4Step1PageModule) },
	{ path: 'game/connect4/2', loadChildren: () => import('./blocks/connect4/step2/pages/module').then(m => m.Connect4Step2PageModule) },

	{ path: 'game/connect4/demo1', loadChildren: () => import('./blocks/connect4/demo1/pages/module').then(m => m.Connect4Demo1PageModule) },
	{ path: 'game/connect4/demo2', loadChildren: () => import('./blocks/connect4/demo2/pages/module').then(m => m.Connect4Demo2PageModule) },
	{ path: 'game/connect4/demo3', loadChildren: () => import('./blocks/connect4/demo3/pages/module').then(m => m.Connect4Demo3PageModule) },
	{ path: 'game/connect4/demo4', loadChildren: () => import('./blocks/connect4/demo4/pages/module').then(m => m.Connect4Demo4PageModule) },
	{
		path: 'demo',
		loadChildren: () =>
			import('./pages.base/demo/pages/module').then(m => m.DemoPageModule)
	},
	{
		path: 'd3/function-plotter',
		loadChildren: () =>
			import('./blocks/d3/function-plotter/pages/module').then(
				m => m.FunctionPlotterPageModule
			)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
