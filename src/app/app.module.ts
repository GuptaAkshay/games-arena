import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BrowseGamesComponent } from './pages/browse-games/browse-games.component';
import { RemotesService } from "./remotes/remotes.service";
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowseGamesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [RemotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
