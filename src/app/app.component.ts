import { Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apps: Array<any>= [
    { no: 1,
      name: '王者荣耀',
      platform: 'IOS',
      download: '19260',
      rating: '4.7'},
    { no: 2,
      name: '极品飞车',
      platform: 'IOS',
      download: '29080',
      rating: '4.8'},
    { no: 3,
      name: '阴阳师',
      platform: 'Android',
      download: '129080',
      rating: '4.3'},
    { no: 4,
      name: '天天消消乐',
      platform: 'Android',
      download: '12380',
      rating: '3.9'},
    { no: 5,
      name: '纪念碑谷2',
      platform: 'IOS',
      download: '12080',
      rating: '4.0'},
    { no: 6,
      name: '龙之谷',
      platform: 'IOS',
      download: '14060',
      rating: '3.5'}
  ];

  // delete last row
  deleteLastApp() {
    this.apps.pop();
  }

  // add new app into last row
  newApp() {
  this.apps.push(
    { no: 6,
      name: '龙之谷',
      platform: 'IOS',
      download: '14060',
      rating: '3.5'}
    );
  }
  // sorting by no asc
  sortByNoAsc() {
      // 参考MDN Array操作的API文档 Array相关方法方法
      this.apps.sort(function (a, b) {
        if (a.no > b.no) {
          return 1;
        }
        if (a.no < b.no) {
          return -1;
      }
      return 0;
      }
    );
  }

  // sorting by no desc
  sortByNoDesc() {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.apps.sort(function (a, b) {
      if (a.no < b.no) {
        return 1;
      }

      if (a.no > b.no) {
        return -1;
      }
      return 0;
      }
    );
  }

  sortByNoRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.apps.sort(function (a, b) {
       if (Math.random() > 0.5) {
         return 1;
       }

       if (Math.random() < 0.5) {
         return -1;
       }
       return 0;
      }
    );
  }

  // constructor to init table
  constructor(meta: Meta, title: Title) {
    title.setTitle('App Store');

    meta.addTags ([
      {
        name: 'author', content: 'Gary'},
      {
        name: 'keywords', content: 'App Store'},
      {
        name: 'description', content: 'Welcome to App Store.'},
    ]);
  }

  ngOnInit() {
  }
}
