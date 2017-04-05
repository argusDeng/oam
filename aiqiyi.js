/**
 * Created by fan on 2017/2/16.
 */

var net=require('./jsontools')
var file=require('./writefile')

var xlsx = require('node-xlsx')

var path='http://cache.video.qiyi.com/jp/avlist/';
function asyncGet (x) {
    return new Promise(resolve =>  {
           
             console.log(x)
            net.getinfo(path+x,'咪咕爱看',function (err,data) {

                if (data){

                    try{
                    var data=JSON.parse(data)
                         data=data.data.vlist
                         var efile="";
						 
						 
                        for (var i in data){

                             efile+= data[i].tvQipuId + ',' + data[i].vn + ',' + path+x + '\n';
                             console.log(efile)

                        }
                    file.go(efile)
                    resolve(x)
                    }catch (e){
                        console.log(e)
                        resolve(x)
                    }
                }else {
                    resolve(x)

                }




            })



    })
}




async function dd(x) {
	var be=100000000;
        x=x*80000+be
	
    for (var i=x;i<x+80000;i++){

       await asyncGet(i).catch((err)=>console.log(err));
    }
}


for(var i=0;i<=1000;i++){
	 dd(i)
}

 
