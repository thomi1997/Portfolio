import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from "..//app/components/body/body.component";
import { ImprintComponent } from "../app/components/imprint/imprint.component";

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
