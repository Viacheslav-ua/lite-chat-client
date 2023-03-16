import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ContentComponent } from './content';



@NgModule({
  declarations: [
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }
