import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreUiModule } from '@nx-ng-storybook/core-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
