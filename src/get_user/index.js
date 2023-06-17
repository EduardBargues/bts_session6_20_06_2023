const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const dbWrapper = require("./db.js");
const db = dbWrapper.wrapper(dynamoDB);

const f = require("./func.js");
const handler = f.wrapper(db);

exports.handler = handler;
