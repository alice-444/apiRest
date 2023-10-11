const Music = require ("../models/musicModel.js")

exports.listAllMusics = async (req, res) =>{
    try{
        const musics = await Music.find({})
        res.status(200).json(musics)
        } catch(error) { 
            res.status(500).json({error:"Server error"}
        )}
}

exports.createMusic = async (req, res) =>{
    const newMusic = new Music(req.body)
    
    try {
        const music = await newMusic.save()
        res.status(201).json(music)
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
}

exports.getMusic = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id_music)

        if (!music){
            res.status(204).json({error:"Music not found"})
        } else {
            res.status(200).json(music) 
        }
        
    } catch(error) {
        res.status(500).json({error:"Server error"})
    }
}

exports.updateMusic = async (req, res) =>{
    try {
        const music = await Music.findByIdAndUpdate(req.params.id_music, req.body, {new:true} )

        if (!music){
            res.status(204).json({error:"Music not found"})
        } else {
            res.status(200).json(music)
        }
        
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
}

exports.deleteMusic = async (req, res) =>{
    try {
        const music = await Music.findByIdAndDelete(req.params.id_music)

        if (!music){
            res.status(204).json({error:"Music not found"})
        } else {
            res.status(200).json({message:"Deleted music successfully"})
        }
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
}