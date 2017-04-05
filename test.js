/**
 * Created by fan on 2017/2/16.
 */
var data=require('./data.js');
var net=require('./nettools')
var file=require('./writefile')

var path='http://aikanvod.miguvideo.com/video/p/share.jsp?user=guest&vodid='
function asyncGet (x) {
    return new Promise(resolve =>  {


            net.getinfo(path+x,'咪咕爱看',function (data) {
                console.log(path+x)
                if(data.length<30){}else {
                    file.go(data)
                }
                resolve(x)
            })



    })
}





async  function dd(x) {
	x=x*5000
    for (let i=x;i<x+5000;i++){
		
       await asyncGet(i).catch((err)=>console.log(err));
	 
    }
}

for(var i=100;i<200;i++){
  dd(i)
}