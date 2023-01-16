import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {path:'login'}
  { path: '', component: IndexPageComponent },
  { path: ':username', component: UserComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
