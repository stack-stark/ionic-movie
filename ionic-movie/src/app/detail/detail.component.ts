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

  public detail: Array<any> = [];
  public CastsArr: Array<string> = [];

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
      if (res) {
        this.detail = res;
        for (const ca of res.casts) {
          this.getCasts(ca.id);
        }
      }
    });
  }

  /**
   * 获取演员数据
   * @param id 
   */
  private getCasts(id: string) {
    const url = `/movie/celebrity/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
    this.http.get(url).subscribe((res: any) => {
      if (res) {
        this.CastsArr.push(res);
      }
      console.warn(this.CastsArr);
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
