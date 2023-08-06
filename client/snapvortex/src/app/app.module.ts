import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SelectedFeelingDirective } from './shared/feeling-emojis/selected-feeling.directive';


@NgModule({
  declarations: [
    AppComponent,
    SelectedFeelingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    SharedModule,
    ImageCropperModule
  ],
  providers: [SelectedFeelingDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
