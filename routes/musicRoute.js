const express = require("express");
const router = express.Router();


const musicController = require("../controller/musicController.js")

router
    .route('/')
    .get(musicController.listAllMusics)
    .post(musicController.createMusic)

router
    .route('//:id_music')
    .get(musicController.getMusic)
    .put(musicController.updateMusic)
    .delete(musicController.deleteMusic)

module.exports = router