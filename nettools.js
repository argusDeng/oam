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
          var $ = cheerio.load(html);
          var dom = $('video').attr('src')

          if (dom != undefined || dom != null) {
              var endnum = dom.lastIndexOf('media')
              var paths = dom.substring(0, endnum)
              var pathsp = paths.split('/');
              id = pathsp[pathsp.length - 2]


              if (id == undefined) {

                  var point = dom.indexOf('.mp4')
                  id = dom.substr(point - 13, 10)

              }
              var name = $('#vodname').attr('value');
              var file = id + ',' + name + ',' + url + '\n';
              callback(file)

          } else {
              callback("undefinde")
          }

      })

    }).on('error',function (err) {
        console.log('error')

    })
}



module.exports = connection;