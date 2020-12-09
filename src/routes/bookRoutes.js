const express = require('express');
const booksRouter = express.Router();

function router(nav1){
// array of books
var books =[
    {
        title:'Digital Fortress',
        author:'Dan Brown',
        genre:'Thriller',
        img:'dig.jpg'
    },
    {
        title:'The Alchemist',
        author:'Paulo Coelho',
        genre:'Fantasy',
        img:'alc.jpg'
    },
    {
        title:'Rich Dad Poor Dad',
        author:'Robert Kiyosaki',
        genre:'Self-help',
        img:'rich.jpg'
    },
    {
        title:'The Da Vinci Code',
        author:'Dan Brown',
        genre:'Mystery',
        img:'davinci.jpg'
    },
    {
        title:'The girl in room 105',
        author:'Chetan Bhagat',
        genre:'Fiction',
        img:'girl.jpg'
    },
    {
        title:'The 3 mistakes of my life',
        author:'Chetan Bhagat',
        genre:'Drama',
        img:'3m.jpg'
    },
    {
        title:'Sapiens: A Brief History of Humankind',
        author:'Yuval Noah Harari',
        genre:'Non-Fiction',
        img:'sa.jpg'
    },
    {
        title:'The Theory of Everything',
        author:'Stephen Hawking',
        genre:'Science',
        img:'the.jpg'
    }
]
// acessing books page
booksRouter.get('/',function(req,res){
    res.render('books',{
        nav1,
        title:'Library',
        books

    });
});
// acessing single book
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',{
        nav1,
        title:'Library',
        book: books[id]
    })
});
return booksRouter;
}


module.exports = router;