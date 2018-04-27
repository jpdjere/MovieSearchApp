const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');

require('../models/Movie')
//genero mi Pais model
const Movie = mongoose.model('movie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.post('/search', (req, res, next) => {

  let {search_terms, whole_words, whole_sentence} = req.body;
  let re, split = search_terms.split(" ");
  if(whole_sentence){
    //Case for whole_sentence
    re = "^"+search_terms+"$"
  }else{

      if(split.length > 1){

        //More than one word
        if(whole_words){
          //But asked for whole words
          console.log(re);
          re = split.join("$|").concat("$");
        }else{
          //Didn't ask for whole words
          console.log(re);
          re = split.join("|")
        }

      }else{
        if(whole_words){
          // re = "\s"+search_terms+"\s|^"+search_terms+"\s|\s"+search_terms+"$";
          re = "\\b"+search_terms+"\\b";
        }else{
          re = search_terms;
        }
      }

  }
  // \shola\s|^hola\s|\shola$
  console.log(re);
  let regex = new RegExp(re,"g");
  Movie.find({
    originalTitle:{ $regex: regex, $options: 'i' }
  },(err,doc) => {
    err ? res.send(err) : console.log("OK!");
    return res.send(doc);
  })

})



module.exports = router;
