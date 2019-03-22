import store from 'store';
import slug from 'slug';
import uuid from 'uuid/v4';
import moment from 'moment';
import ranStr from 'randomstring';

const genSlug = str => `${slug(str)}-${ranStr.generate(5)}`;

export const getAll = () => store.get('notes') || [];

export const save = (title, content) => {
  const newNote = {
    id: uuid(),
    title,
    slug: genSlug(title),
    content,
    createdAt: moment(),
  };

  store.set('notes', [...getAll(), newNote]);
  store.set(`note-${newNote.slug}`, newNote);
  return newNote;
};

export const get = id => store.get(`note-${id}`) || undefined;

export const edit = (note) => {
  if (!note) {
    return;
  }

  store.remove(`note-${note.slug}`);
  // UPDATE THE NOTE-ID PART
  note.slug = genSlug(note.title);
  store.set(`note-${note.slug}`, note);

  // UPDATE THE NOTE IN NOTES PART
  const allNotes = getAll();
  allNotes.forEach((n) => {
    if (n.id === note.id) {
      n.title = note.title;
      n.content = note.content;
      n.slug = note.slug;
    }
  });
  store.set('notes', allNotes);

  return note;
};

export const destroy = (slug) => {
  const note = get(slug);

  if (!note) return;

  store.remove(`note-${slug}`);

  let notes = getAll();

  notes = notes.filter(n => n.slug !== slug);

  store.set('notes', notes);
};
