//node js中引用一个包通过 require(' 模块名')  的方式
var http = require('http');  //node 自带 http 模块
fs = require('fs');// node 自带 fs 文件处理模块
var PORT = process.env.PORT || 8080; //定义端口 根据命令行传进来的参数 或者是 8080

http.createServer(function (req, res) {      //调用 http 模块定义的 createServer 函数启动 http 服务器
  console.log('%d request received,url => %s ' , process.pid,req.url);
  var url = req.url;
  if(req.url.indexOf('resources')!=-1){ //如果路径包含resources
  	var fileName  = url.substring(url.lastIndexOf('/')+1,url.length);
  	res.writeHead(200);
  	var js = fs.readFileSync(fileName,'utf-8');
	res.end(js);
  }


  if(url == '/test404')
  {
    res.writeHead(404,{'Content-Type':'text/plain'}); 
    res.end('not found');
  }else if(url == '/testJson'){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end('{\"status\":true,\"message\":\"ok\",\"isRedirect\":false,\"url\":null,\"data\":null}');
  }else if(url == '/testHtml'){
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  fs.readFile('test.html',function(err,html){
		if(err){
			throw err;
		}
		res.end(html);
	  });
  
  }else{
  	res.writeHead(404);
	res.end('Required Url Path. 2333333');
  }

//  res.end('Hello world!\n');
}).listen(PORT);

console.log('%d listening on %d', process.pid, PORT);
