import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePageComponent } from './date-page/date-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OnePieceCharactersComponent } from './one-piece-characters/one-piece-characters.component';
import { CustomPipe } from './custom.pipe';
import { BlankComponent } from './blank/blank.component';


@NgModule({
    declarations: [
        AppComponent,
        DatePageComponent,
        NotFoundPageComponent,
        OnePieceCharactersComponent,
        CustomPipe,
        BlankComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    exports: [
        CustomPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
