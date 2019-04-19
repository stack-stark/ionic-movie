import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-hot-showing',
  templateUrl: './hot-showing.component.html',
  styleUrls: ['./hot-showing.component.scss'],
})
export class HotShowingComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController
  ) { }

  public hotData: any;

  ngOnInit() {
    this.presentLoading();
    this.getInitData(0, 20);
  }

  /**
   * 获取初始化数据
   * @param start
   * @param count
   * @param city
   */
  private getInitData(start: number, count: number) {
    const url = `/movie/in_theaters?start=${start}&count=${count}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.hotData = res.subjects;
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
