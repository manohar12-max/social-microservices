const mongoose=require('mongoose');

const searchSchema=new mongoose.Schema({
  postId:{
    type:String,
    required:true,
    unique:true
  },
  userId:{
    type:String,
    required:true
  },
content:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
},{
    timestamps:true
})

searchSchema.index({content:'text'});// Indexing content for text search


const Search=mongoose.model('Search',searchSchema);

module.exports=Search;