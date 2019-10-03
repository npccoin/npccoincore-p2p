'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on npccoincore-p2p Module {0}'
};

module.exports = require('npccoincore-lib').errors.extend(spec);
