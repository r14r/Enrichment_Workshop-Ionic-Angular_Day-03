import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Page } from './page';

import { PageRoutingModule } from './routing.module';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, PageRoutingModule],
	declarations: [Page],
})
export class PageModule {}
