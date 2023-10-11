const express = require("express");
const router = express.Router();


const voteController = require("../controller/voteController.js")

router
    .route('/')
    //.get(votesController.listAllVotes)
    //.post(votesController.createPVote)

router
    .route('/')
    //.get(votesController.getVote)
    //.put(votesController.updateVote)
    //.delete(votesController.deleteVote)

module.exports = router