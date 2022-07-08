var express = require('express');
const bodyParser = require("body-parser");
const cors= require('cors');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors({
origin: '*'
}));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/feed', function(req, res){
  const feed={

   type:'feed',
   posts:[
      
      {
      postinfo:{
       postid:'shgfasjdf',
       comments:'100',
       laughs:'100',
       reposts:'100',
       views:'250k',
       commented:false,
       laugh:false,
       reposted:false,
       timeofpost:'6h',
       noofslides:1
      },
      userinfo:{
       username:'Ameen',
       userid:'gshdgksjgsf',
       profilepic:'/profilepic.jpg'
      },
      slides:[
      
         {
            type:'imagepost',
            forecaption:' This is a meme,for testing and shii This is a meme,for testing and shii This is a meme,for testing and shii This is a meme,for testing and shii This is a meme,for testing and shii This is a meme,for testing and shii This is a meme,for testing and shii This is a meme,for testing and shii',
            endcaption:false,
            media:[
               {
                  imageid:'djshgjdfhgs',
                  src:'/test.jpg',
               }
            ]   
         }   
      ],
      read:"false"
   }
]
     
   };
   res.send(feed);
});

app.get('/usernamecheck/:name', function(req, res){
    const data=req.params.name;
    res.send({available:true,query: data});
 });

 app.get('/emailcheck/:email', function(req, res){
    const data=req.params.email;
    res.send({available:true,query: data});
 });

 app.get('/sendresetcode/:email', function(req, res){
   const data=req.params.email;
   res.send({action:'success'});
});

app.get('/checkcodevalidity/:code', function(req, res){
   const data=req.params.code;
   res.send({action:'success'});
});

app.post('/resetpassword', function(req, res){
   const data=req.body.password;
   res.send({action:true});
});

app.post('/signin', function(req, res){
   res.send({action:true,sessiondata:{username:'Ameen',userid:'useridameen',sessionid:'sessionidameen',loginstate:'active'}});
});

app.post('/signup', function(req, res){
   res.send({action:true,sessiondata:{username:'Ameen',userid:'useridameen',sessionid:'sessionidameen',loginstate:'active'}});
});

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
    });
    // custom 500 page
    app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
    });


  app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
   });