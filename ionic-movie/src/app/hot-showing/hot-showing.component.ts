import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hot-showing',
  templateUrl: './hot-showing.component.html',
  styleUrls: ['./hot-showing.component.scss'],
})
export class HotShowingComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public hotData: any;

  ngOnInit() {
    this.getInitData(0, 10);
  }

  /**
   * 获取初始化数据
   * @param start
   * @param count
   * @param city
   */
  private getInitData(start: number, count: number) {
    const url = `/api/v2/movie/in_theaters?start=${start}&count=${count}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
    });
  }


}
