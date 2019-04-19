import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor() { }

  public searchData: Array<any> = [];
  public slideOpts: object = {
    effect: 'flip',
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000
    }
  };

  ngOnInit() { }


}
