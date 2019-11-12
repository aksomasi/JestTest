import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { PlayComponent } from './play/play.component';
import { PlayModalComponent } from './play-modal/play-modal.component';

const routes: Routes = [
  { path: '', component: PrivacyComponent },
  { path: 'play', component: PlayComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    PlayComponent,
    PlayModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),

  ],
  providers: [],
  entryComponents: [PlayModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
