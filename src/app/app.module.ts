import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoTabsManualSelectionComponent } from './tabs/tabs.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,TabsModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, DemoTabsManualSelectionComponent ],
  bootstrap:    [ AppComponent ],
  // exports: [TabsModule]
})
export class AppModule { }
