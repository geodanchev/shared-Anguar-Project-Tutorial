import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { MatButtonModule, MatCheckboxModule, MatListItem, MatListBase, MatList } from '@angular/material';
import { MatListModule } from '@angular/material/list';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatList,
    MatListBase,
    MatListItem,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatList,
    MatListBase,
    MatListItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
