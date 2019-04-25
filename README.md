## 豆瓣电影的ionic版

`应项目需要,故此写个ionic版的豆瓣电影练练手`

### 搭建工程
`0.安装ionic,cordova`
``` shell
npm install -g cordova ionic
```
`1.初始化工程`
``` shell
ionic start ionic-movie tabs
```

### 豆瓣电影api
- base `https://api.douban.com/v2`
- 搜索 `/movie/search?q=${query}&start=${start}&count=${count}`
- 详情 `/movie/subject/${id}`
- 热映 `/movie/in_theaters?start=${start}&count=${count}$city=${city}`
- 推荐 `/movie/top250?start=${start}&count=${count}`
### 跨域解决
`0.新建proxy.config.json`
``` json
{
    "/movie": {
        "target": "https://api.douban.com/v2", 
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
}
```
`1.angular.json中的serve.options,添加"proxyConfig": "proxy.config.json"`

``` json
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
    "browserTarget": "app:build",
    "proxyConfig": "proxy.config.json"
    }
}
```