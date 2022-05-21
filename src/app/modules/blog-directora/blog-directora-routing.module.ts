import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDirectoraComponent } from './blog-directora.component';
import { FaqComponent } from './faq/faq.component';
import { GreetingComponent } from './greeting/greeting.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: BlogDirectoraComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'greeting',
    //     pathMatch: 'full',
    //   },
    //   {
    //     path: 'faq',
    //     component: FaqComponent,
    //   },
    //   {
    //     path: 'questions',
    //     component: QuestionsComponent,
    //   },
    //   {
    //     path: 'greeting',
    //     component: GreetingComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogDirectoraRoutingModule {}
