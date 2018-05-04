var { getOptions } = require('loader-utils');

module.exports = function (content, map, meta) {
    this.cacheable();
    var callback = this.async();
    var optins =  getOptions(this);
    var bool = false;
    // console.log('getLoaderConfig: ',typeof optins.filter)
    if(optins && optins.filter && 'function' === typeof(optins.filter)){
        bool = optins.filter(content);
    }else{
        bool = ~content.indexOf('api.aispeech.com.cn');
    }
    if(bool){
        // console.log(content)    
        var matched = content.replace(/,/g, ',\r\n')
                            .match(/mock\s*:\s*(.+)?/mg);
        if(matched){
            content = matched.reduce(function(pend, mock){
                return pend.replace(mock, '');
            },content);
        }
        // console.log(content)    
    }
   
    callback(null,content);
    
}