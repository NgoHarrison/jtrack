import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { JobApiService} from "./models/job-api.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, JobApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
