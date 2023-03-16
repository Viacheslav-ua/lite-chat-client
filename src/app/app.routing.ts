import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageEnum } from '@core';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: AppPageEnum.Chat,
        component: AppComponent,
        loadChildren: () => import('./pages/chat/chat.module').then((m) => m.ChatModule)
    },
    {
        path: '**',
        redirectTo: AppPageEnum.Chat,
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
