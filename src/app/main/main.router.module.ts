import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'main',
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
        redirectTo: '/main/hot-showing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/hot-showing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRouterModule { }
