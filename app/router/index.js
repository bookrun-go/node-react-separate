'use strict';
const Router = require('koa-router');
const router = new Router();

router.get('/test', async (ctx, next) => {
    console.log(ctx.request.body.t1);
    ctx.body = {
        name: 'hho'
    };
    await next();
});

module.exports = router.routes();
