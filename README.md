## 过滤mock api 路径


```js
...
options:{
    filter:function(loaderThisProperty, source){
        return ~source.indexOf('api.aispeech.com.cn') 
    }
}
...
```

默认筛选含有 api.aispeech.com.cn 文件的 mock api