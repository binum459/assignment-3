const express = require('express');
const authorRouter = express.Router();
function router(nav1){
// array of books
var authors =[
    {
        
        author:'Dan Brown',
        genre:'Thriller',
        img:'dan.jpg'
    },
    {
        
        author:'Paulo Coelho',
        genre:'Fantasy',
        img:'paulo.jpg'
    },
    {
        
        author:'Robert Kiyosaki',
        genre:'Self-help',
        img:'rob.jpg'
    },
    {
        
        author:'Chetan Bhagat',
        genre:'Drama',
        img:'chet.jpg'
    },
    {
        
        author:'Agatha Christie',
        genre:'Detective',
        img:'aga.jpg'
    },
    {
        
        author:'J.K Rowling',
        genre:'Fantasy',
        img:'jk.jpg'
    }
]
// acessing author page
authorRouter.get('/',function(req,res){
    res.render('authors',{
        nav1,
        title:'Library',
        authors

    });
});

return authorRouter;
}

module.exports = router;