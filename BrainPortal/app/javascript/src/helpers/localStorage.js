// Helper functions for managing local storage.

export const clearLocalStorage = () => localStorage.clear();

export const getLocalStorageItem = (key) => {
  if (!localStorage) return;
  try {
    return JSON.parse(localStorage.getItem(key)) || null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error getting item ${key} from localStorage`, err);
  }
};

export const storeLocalStorageItem = (key, item) => {
  if (!localStorage) return;
  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error storing item ${key} to localStorage`, err);
  }
};

export const removeLocalStorageItem = (key) => {
  if (!localStorage) return;
  try {
    return localStorage.removeItem(key);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error removing item ${key} from localStorage`, err);
  }
};
