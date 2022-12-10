import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    postTitle: { type: String, required: "Post must have a title"},
    postBody: { type: String, required: "Post must have a body"},
    postTags: { type: [String], required: "Post must have a tags"},
    noOfComments: { type: Number, default: 0},
    userPosted: { type: String, required: "Post must have an author"},
    userId: { type: String},
    askedOn: { type: Date, default: Date.now},
    comment: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: { type: Date, default: Date.now},
    }]
})

export default mongoose.model("Post", PostSchema)