'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  // TODO: post route to /api/translate with body text and locale either BtoA or AtoB
  app.route('/api/translate')
  .post((req, res) => {
    if (!req.body.text || !req.body.locale) return res.json({ error: 'Required field(s) missing' });
    console.log(req.body);
    // use translator 
    let text = req.body.text;
    let locale = req.body.locale;

    // handle errors
    if (!/\S/.test(text)) return res.json({ error: 'No text to translate' });
    if (locale != 'american-to-british' && locale != 'british-to-american') return res.json({ error: 'Invalid value for locale field' });

    translator.readText(text, locale);
    // returned object contains submitted text and translation text
    return res.json({ text: text, translation: 'translation',  })
    });
};
