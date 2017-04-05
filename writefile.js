/**
 * Created by fan on 2017/2/17.
 */
var file=require('fs');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');


var modules={};


function writefile(txt) {
    var buffer = new Buffer(txt);
    var str=iconv.encode(buffer,'gb2312');
    file.appendFile('aiqiyi1.csv',str,'utf8',function (err) {
        if (err){
            console.log(err)
        }else {
            console.log('写入成功')
        }
    })
}
modules.go=writefile
module.exports = modules;