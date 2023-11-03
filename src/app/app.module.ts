import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MenubarComponent } from './menubar/menubar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormdesignComponent } from './formdesign/formdesign.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { LessonComponent } from './lesson/lesson.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { StreamComponent } from './stream/stream.component';
import { StreampopupComponent } from './streampopup/streampopup.component';
import { TimeslotpopupComponent } from './timeslotpopup/timeslotpopup.component';
import { SubjectpopupComponent } from './subjectpopup/subjectpopup.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ToolbarComponent,
    MenubarComponent,
    SidebarComponent,
    HomeComponent,
    TableComponent,
    CardComponent,
    LoginComponent,
    PopupComponent,
    FormdesignComponent,
    TeacherComponent,
    SubjectComponent,
    LessonComponent,
    TimeslotComponent,
    StreamComponent,
    StreampopupComponent,
    TimeslotpopupComponent,
    SubjectpopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
