import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { RecordTableComponent } from './reactive-form/record-table/record-table.component';
import { HeaderComponent } from './reactive-form/header/header.component';
import { ConfirmModalComponent } from './reactive-form/confirm-modal/confirm-modal.component';
import { FormComponent } from './reactive-form/form/form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HighlightDirective } from './highlight.directive';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { LeftMenuComponent } from './reactive-form/left-menu/left-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    RecordTableComponent,
    HeaderComponent,
    ConfirmModalComponent,
    FormComponent,
    HighlightDirective,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
