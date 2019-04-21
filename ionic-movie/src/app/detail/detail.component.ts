import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private activeRoute: ActivatedRoute
  ) { }

  public detail: any;

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      console.warn(params);
      if (params.id) {
        this.presentLoading();
        this.getMovieDetail(params.id);
      }
    });
  }

  /**
   * 获取详情数据
   * @param id
   */
  private getMovieDetail(id: string) {
    const url = `/movie/subject/${id}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.detail = res;
    });
  }

  /**
  * 加载动画
  */
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    return await loading.present();
  }

}
