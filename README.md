# egg_demo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### apidoc

#### apidoc.json
```
{
    "name": "egg-demo-api", 
    "version": "1.0.0",
    "description": "这是一个简单的apidoc的demo",
    "title": "接口文档",
    "url" : ""
  }
```

#### 注释格式
```
/**
  * @api {请求方式} url地址 接口描述
  * @apiName 接口名称
  * @apiGroup 接口组
  *
  * @apiParam {字段类型} 字段名 描述.
  *
  * @apiSuccess {字段类型} 字段名 描述.
  */
```

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org