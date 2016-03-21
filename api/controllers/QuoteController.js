/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  randomQuote: function (req, res) {
    var lang = (req.param('lang') === 'es') ? 'es' : 'en';
    Quote.count({lang: lang}).exec(function (err, found) {
      if (err) return res.badRequest(err);
      var randomId = Math.floor(Math.random() * found);
      Quote.findOne({lang:lang}).skip(randomId).exec(function (err, found) {
        return (err) ? res.badRequest(err) : res.json(found);
      })
    })
  }

};

