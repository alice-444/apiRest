const Music = require ("../models/musicModel.js")
const Vote = require("../models/voteModel.js")

exports.listAllVotes = async (req, res) =>{
    try{
        const votes = await Comment.find({music_id: req.params.id_music})
        res.status(200).json(votes)
        } catch(error) { 
            res.status(500).json({error:"Server error"}
        )}
}

exports.createVote = async (req, res) =>{
    try {
        const vote = await Vote.findById(req.params.id_music)
        const newVote = new Vote({...req.body, post_id: req.params.id_music})

        try {
            const post = await newVote.save()
            res.status(201).json(post)
        } catch (error) {
            res.status(500).json({error:"Server error(db)"})
        }
    }catch(error) {
        res.status(500).json({error:"Server error(vote inexitant)"})
    }
    
    
    try {
        const vote = await newVote.save()
        res.status(201).json(vote)
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
}

exports.updateVote = async (req, res) =>{
    try {
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new:true} )

        if (!vote){
            res.status(204).json({error:"Vote not found"})
        } else {
            res.status(200).json(vote) 
        }
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
}

exports.deleteVote = async (req, res) =>{
    try {
        const vote = await Vote.findByIdAndDelete(req.params.id_vote)

    if (!vote){
        res.status(402).json({error:"Vote not found"})
    } else {
        res.status(200).json({message:"Deleted vote successfully"})
    }

    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
}