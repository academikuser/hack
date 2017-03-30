'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/CallFromPhpToNodejs/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: application/json, text/json, application/xml, text/xml
     * responses: 200
     * operationId: CallFromPhpToNodejs_Get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/CallFromPhpToNodejs/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
