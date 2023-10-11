const express = require("express");
const router = express.Router();


const voteController = require("../controller/voteController.js")

router
    .route('/musics/:id_music/votes')
    .get(voteController.listAllVotes)
    .post(voteController.createPVote)

router
    .route('/votes/:id_vote')
    .get(voteController.getVote)
    .put(voteController.updateVote)
    .delete(voteController.deleteVote)

module.exports = router