/**
 * Quote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {

    content: {
      type: 'string',
      unique: true,
      required: true
    },

    author: {
      type: 'string',
      required: true
    },

    lang: {
      type: 'string',
      required: true
    }

  }
};
