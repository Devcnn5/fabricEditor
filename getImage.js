var express=require("express");
var router=express.Router();
var Tasks=require("./Tasks");


router.get('/',function(req,res){
	Tasks.getImage(req.query,function(err,rows){
		if(err){
			console.log("error:",err);
			res.json(err);
		}
		else{
			console.log("Rows: ",rows);
			res.json(rows);
		}
	});
});

module.exports=router;