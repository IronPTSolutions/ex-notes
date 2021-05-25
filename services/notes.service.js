
const notes = {
  'id-1': {
    id: 'id-1',
    user: 'pradomota',
    message: 'lorem'
  },
  'id-2': {
    id: 'id-2',
    user: 'carlos',
    message: 'lorem2'
  },
  "09ncjbchzb": {
    id: '09ncjbchzb',
    user: 'carlos',
    message: 'lorem2'
  }
}

module.exports.list = () => {
  return Promise.resolve(Object.values(notes));
}

module.exports.create = (note) => {
  return new Promise((resolve, reject) => {
    const errors = {}
    if (!note.user) {
      errors.user = 'User is required';
    }
    if (!note.message) {
      errors.message = 'Message is required';
    }

    if (Object.values(errors).length > 0) {
      const error = new Error('Note is invalid!!');
      error.errors = errors;
      reject(error);
    } else {
      const id = Math.random().toString(36).substr(2, 9);
      note.id = id;
      notes[id] = note;
      resolve(note);
    }

  })
  
}


