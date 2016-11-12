var pathForUri = require('openapi-utils-path-for-uri');
var paramToSchema = require('openapi-utils-param-to-schema');

var openapiUtils = {};
module.exports = openapiUtils;

openapiUtils.pathForUri = pathForUri.pathForUri;
openapiUtils.paramToSchema = paramToSchema.paramToSchema;

