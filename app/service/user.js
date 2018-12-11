const Service = require('egg').Service

class UserService extends Service {
    async find() {
        let user = await this.ctx.model.User.find()
        return user
    }
    async insert() {
        let data = {
            name: '小龙',
            sex: '男',
            age: 14
        }
        let result = await this.ctx.model.User.collection.insert(data)
        return result
    }
}

module.exports = UserService