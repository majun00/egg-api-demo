module.exports = app => {
    const mongoose = app.mongoose;
    const UserSchema = new mongoose.Schema({
        _id: { type: String },
        name: { type: String},
        sex: { type: String},
        age: { type: Number}
    }, {collection: 'user'})
    return mongoose.model('User', UserSchema)
}