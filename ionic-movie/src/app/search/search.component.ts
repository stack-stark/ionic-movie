import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  public searchData: Array<any> = [];
  public slideOpts: object = {
    effect: 'flip',
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000
    }
  };
  public searchQuery: string;
  private start = 0;
  private count = 10;
  private queryCount: number;
  ngOnInit() {
    
   }

  /**
   * 搜索事件
   */
  public toSearch() {
    this.searchData = [];
    this.presentLoading();
    this.getSearchData(this.searchQuery, this.start, this.count);
  }

  /**
   * 搜索请求
   * @param query 
   * @param start 
   * @param count 
   */
  private getSearchData(query: string, start: number, count: number) {
    const url = `/movie/search?q=${query}&start=${start}&count=${count}`;
    this.http.get(url).subscribe((res: any) => {
      this.queryCount = res.total;
      if (this.searchData.length === 0) {
        this.searchData = res.subjects;
        return;
      }
      for (const m of res.subjects) {
        this.searchData.push(m);
      }
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
   * 下拉加载更多数据
   * @param event
   */
  public loadData(event) {
    const sy = this.queryCount - this.start;
    if (sy < 10) {
      this.start += sy;
      this.getSearchData(this.searchQuery, this.start, sy);
      return;
    }
    this.start += 10;
    this.getSearchData(this.searchQuery, this.start, this.count);
    setTimeout(() => {
      event.target.complete();
    }, 1000);
    if (this.start === this.queryCount) {
      event.target.disabled = true;
    }
  }

    /**
   * toDetail
   */
  public toDetail(id: string) {
    this.router.navigateByUrl('/movie-detail/detail?id=' + id);
  }

}
