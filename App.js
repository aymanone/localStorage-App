const fs=require("fs");
const http=require("http");
const url=require("url");
const path=require("path");
const server=http.createServer(
(req,res)=>{
    let reqPath=url.parse(req.url,true).pathname;
	
    
	if (req.url==="/"){
        
		const file=fs.readFile(__dirname+"/public/index.html","utf8",(err,data)=>{
			if (err){console.log(err);return;}
			res.write(data);
			res.end();
			
			});
			
		}
    else if (path.extname(reqPath)===".css"){
        const file=fs.readFile(__dirname+"/public/"+reqPath,"utf8",(err,data)=>{
			if (err){
                res.write("404 not found");
                res.end();
                console.log(err);return;}
            res.writeHead(200,{"Content-Type":"text/css"});
			res.write(data);
			res.end();
			
			});
    }
    else if (path.extname(reqPath)===".js"){
        const file=fs.readFile(__dirname+"/public/"+reqPath,"utf8",(err,data)=>{
			if (err){
                res.write("404 not found");
                res.end();
                console.log(err);return;
            }
            res.writeHead(200,{"Content-Type":"text/javascript"});
			res.write(data);
			res.end();
			
			});
    }
    
    
	else{res.write("error page not found");res.end();}
	}
);
server.listen(9999,()=>{console.log("the app is run on localhost:9999");});

//fs.readFile(url,utf8,func)
