import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotShowingService } from './hot-showing.service';
@Component({
  selector: 'app-hot-showing',
  templateUrl: './hot-showing.component.html',
  styleUrls: ['./hot-showing.component.scss'],
  providers: [HotShowingService]
})
export class HotShowingComponent implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private service: HotShowingService
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
    this.service.getInitData(start, count).subscribe((res: any) => {
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

  /**
   * toDetail
   */
  public toDetail(id: string) {
    this.router.navigateByUrl('/movie-detail/detail?id=' + id);
  }
}
