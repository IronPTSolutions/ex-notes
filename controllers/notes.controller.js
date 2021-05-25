const notesService = require('../services/notes.service');

module.exports.list = (req, res, next) => {

  const note = { user: 'pepe', message: 'Hola mundo' };

  notesService.create(note)
    .then(note => notesService.list())
    .then(notes => res.render('notes/list', { notes }))
    .catch(error => next(error));

}
