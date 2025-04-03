// 'use strict';

// /**
//  * message router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::message.message');

"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/messages",
      handler: "message.create",
      config: {
        auth: false, 
        policies: [],
      },
    },
  ],
};
