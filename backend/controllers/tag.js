const Tag = require('../models/tag');
const {errorHandler} = require('../helpers/dbErrorHandler');
const Blog = require('../models/blog');

const slugify = require('slugify');


exports.create = (req,res)=>{

    const {name} = req.body;
    let slug = slugify(name).toLowerCase();
    let tag = new Tag( {name,slug});

    tag.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.read = (req,res)=>{
    const slug = req.params.slug.toLowerCase();


    Tag.findOne({slug}).exec((err,tag)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }   
        // res.json(category);
        Blog.find({tags:tag})
        .populate('categories','_id name slug')
        .populate('tags','_id name slug')
        .populate('postedBy', '_id name username')
        .select('_id title slug categories tags excerpt postedBy createdAt updatedAt')
        .exec((err,data)=>{
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            } 
            res.json({ tag: tag, blogs: data });
        })
    })
}
exports.remove = (req,res)=>{

    const slug = req.params.slug.toLowerCase();


    Tag.findOneAndRemove({slug}).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }   
        res.json({
            message:'Tag deleted successfully'
        });
    })
}

exports.list = (req,res)=>{

    Tag.find({}).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json(data);
    })
}
