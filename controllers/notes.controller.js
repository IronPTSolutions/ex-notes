const notesService = require('../services/notes.service');

module.exports.list = (req, res, next) => {
  notesService.list()
    .then(notes => res.render('notes/list', { notes }))
    .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  res.render('notes/create')
}

module.exports.doCreate = (req, res, next) => {
  notesService.create(req.body)
    .then(nota => res.redirect('/'))
    .catch(error => {
      if (error.name === 'ValidationError') {
        res.render('notes/create', { 
          errors: error.errors,
          note: req.body
        })
      } else {
        next(error);
      }
    });
}
