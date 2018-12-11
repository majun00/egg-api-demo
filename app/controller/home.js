'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  /**
  * @api {get} / 请求用户列表
  * @apiName 请求用户列表
  * @apiGroup user
  *
  * 
  *
  * @apiSuccess {string} code 编码.
  */
  async index() {
    this.ctx.body = await this.ctx.service.user.find()
  }
  async insert() {
    this.ctx.body = await this.ctx.service.user.insert()
  }
}

module.exports = HomeController;