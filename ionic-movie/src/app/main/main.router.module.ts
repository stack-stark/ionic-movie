import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'mian',
    component: MainComponent,
    children: [
      {
        path: 'hot-showing',
        children: [
          {
            path: '',
            loadChildren: '../hot-showing/hot-showing.module#HotShowingModule'
          }
        ]
      },
      {
        path: 'recommend',
        children: [
          {
            path: '',
            loadChildren: '../recommend/recommend.module#RecommendModule'
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search/search.module#SearchModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/mian/hot-showing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/mian/hot-showing',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MainRouterModule { }
