'use strict';
var dataProvider = require('../../../data/api/CallFromPhpToNodejs/{id}.js');
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
     */
    get: function CallFromPhpToNodejs_Get(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.send(status, data && data.responses);
            next();
        });
    }
};
