const express = require('express');
const addauthorsRouter = express.Router();

function router(nav1){
    
    
        
    // acessing author page
    
    addauthorsRouter.get('/',function(req,res){
        res.render('addauthors',{
            nav1,
            title:'Add Author',
            
    
        });
    });
    
    return addauthorsRouter;
    }
    
    
    module.exports = router;