/**
 * Created by fan on 2017/2/16.
 */
var http = require('http');
var cheerio = require('cheerio');
var connection = {}
connection.getinfo = function (url,type,callback) {
    http.get(url,function (res) {
      res.setEncoding('utf8');
      var html = '';
      res.on('data', function (data) {
          html += data;
      });
      res.on('end', function () {
          html.replace('var tvInfoJs=','')
          var dom = html.replace('var tvInfoJs=','')
          if(dom.length<100){
              callback(null,null)
          } else {
              callback(null, dom)
          }
      })

    }).on('error',function (err) {
          console.log(err)
         callback(null,null)
    })
}



module.exports = connection;