var express=require("express");
var router=express.Router();
var Tasks=require("./Tasks");

router.post('/',function(req,res){
	Tasks.saveCanvas(req.body,function(err,rows){
		if(err){
			console.log("error:",err);
			res.send(err);
		}
		else{
			console.log("Rows: ",rows);
			res.json(rows);
		}
	});
});

module.exports=router;