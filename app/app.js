/**
 * @description: TODO
 * @author luozhihong
 * @date 2019/12/1912:27
 */

'use strict';

const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const koaStatic = require('koa-static');
const body = require('koa-body');

const router = require('./router/index.js');

const app = new Koa();

// app.use(serve(path.join(__dirname, '../websrc/static')));
let port = process.env.PORT || 8084;

app.use(koaStatic(path.resolve('./dist')));

app.use(body());
app.use(router);

app.use(logger());
app.listen(port);
