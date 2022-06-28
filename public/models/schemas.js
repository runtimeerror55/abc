const mongoose = require('mongoose');

let userSchema = {
        _id: String,
        name: String,
        games: [
                {

                        matchType: String,
                        playersDetails: [{
                                name: String,
                                playerNumber: Number,
                                score: Number,
                        }],

                }
        ]
}


let userModel = mongoose.model("users", userSchema)
module.exports = userModel