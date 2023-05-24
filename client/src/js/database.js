import { openDB } from 'idb';

let db;

export const initdb = async () => {
  db = await openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      } else {
        console.log('jate database already exists');
      }
    },
  });
};

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.add({ content });
  return tx.done;
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  return store.getAll();
};

initdb();