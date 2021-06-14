const express = require ('express');
const router = express.Router();
const Post = require('../models/Post');


router.get("/", async (req,res) =>{
    try{
    const posts = await Post.find();
    res.json(posts);
    } catch(err){
      res.json({message: err.message});
    }
})

// get specific User from UserId
router.get('/:postId',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message:error});
    }
  
})

// add User
router.post("/", async (req,res) => {
    const post = new Post({
        name: req.body.name,
        dob: req.body.dob,
        address: req.body.address,
        description: req.body.description,
        createdAt: req.body.createdAt

    });
    console.log(post);
    try{
    const savedPost = await post.save()
    console.log(savedPost);
    res.json(savedPost);
    }catch(err){
     res.json({message : err.message});
    }
});


// delete specfic user
router.delete('/:postId', async(req,res) =>{
  try {
      const removedPost = await Post.remove({_id: req.params.postId }) 
      res.json(removedPost);
  } catch (error) {
      res.json({error:message});
      
  }
})

// Update specific User

router.patch('/:postId', async(req,res) =>{
  try {
      const updatePost = await Post.updateOne({_id : req.params.postId}, {$set : {name: req.body.name}});
      res.json(updatePost);     
  } catch (error) {
      res.json({error:message});
  }
})

module.exports = router;