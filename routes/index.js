var express = require('express');
var router = express.Router();
var socetio1=require('../socketio');
var ref=require('ref');
var refarray=require('ref-array');
/* GET home page. */

router.get('/',function(req,res,next){
    res.render('index',{title:'express'});
});
router.get('/videocanvas', function(req, res, next) {
    var ajaxText={
      tips:"走通了"
    };
    //res.render('index',{title:'express'})
    //res.header(200,{});
    res.send(ajaxText);
    var pathtovideo='./public/lees/test/canvaslocalvideo/hkvision.mp4';
    var ffmpeg=require('child_process').spawn('ffmpeg',[
      "-re", 
	    "-y", 
		  "-i", 
	  	"/home/lees/test/canvaslocalvideo/hkvision.mp4",
	  	"-preset", 
	  	"ultrafast", 
		  "-f", 
		  "mjpeg", 
      "pipe:1"
    ]);
    ffmpeg.stdout.on('data',function(data){
      /*var GetArrayType = refarray(ref.types.uchar);
      var array = new GetArrayType(data);
      //array.length = nSize;
      array = array.toArray();
      console.log(array);*/
      var frame=new Buffer(data).toString('base64')
      //console.log(frame);
      socetio1.video1(frame);
 });
 //io.sockets.on('canvas',function(frame){
  // io.sockets.emit('frame',returnIndexRouterframe);
 //  console.log('1');
 //}
});


module.exports = router;
