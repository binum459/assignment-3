const express = require('express');
const addbooksRouter = express.Router();

function router(nav1){
    
    
        
    // acessing author page
    
    addbooksRouter.get('/',function(req,res){
        res.render('addbooks',{
            nav1,
            title:'Add Book',
            
    
        });
    });
    
    return addbooksRouter;
    }
    
    
    module.exports = router;