module.exports= appFilter = (req,resp,next)=>{
    console.log(appFilter);

    if(!req.query.age){
        resp.send("please provide age in url like /about?age= 18 ")
    }
    else if(req.query.age<18){
        resp.send("You can not access");
       
    }
    else{

        next();
    }
}