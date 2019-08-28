import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
 
@Component({
  selector: 'demo-tabs-manual-selection',
  templateUrl: './tabs.component.html'
})
export class DemoTabsManualSelectionComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
