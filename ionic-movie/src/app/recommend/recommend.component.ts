import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
})
export class RecommendComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController
  ) { }

  public topData: any = [];
  private start = 0;
  private count = 10;
  // public bubbles: boolean;

  ngOnInit() {
    this.presentLoading();
    this.getInitData(this.start, this.count);
  }

  /**
   * 获取初始化数据
   * @param start
   * @param count
   * @param city
   */
  private getInitData(start: number, count: number) {
    const url = `/movie/top250?start=${start}&count=${count}`;
    this.http.get(url).subscribe((res: any) => {
      if (this.topData.length === 0) {
        this.topData = res.subjects;
        return;
      }
      for (const m of res.subjects) {
        this.topData.push(m);
      }
    });
  }

  /**
   * 下拉加载更多数据
   * @param event
   */
  public loadData(event) {
    this.start += 10;
    this.getInitData(this.start, this.count);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
    if (this.start === 250) {
      event.target.disabled = true;
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
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
