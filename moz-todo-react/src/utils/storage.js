// src/utils/storage.js

const STORAGE_KEY = 'hobbitUserData';

const DEFAULT_USER_DATA = {
  username: 'Guest',
  theme: 'light',
  coins: 2000,
  hobbies: [
    { title: 'Sewing', progress: 60, color: '#03C7E1' },
    { title: 'Baking', progress: 40, color: '#FF879D' },
    { title: 'Photography', progress: 20, color: '#003366' },
    { title: 'Add', progress: 0, color: '#FCBC10' },
  ],
};

export function loadUserData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_USER_DATA;

    const parsed = JSON.parse(raw);

    // Always ensure Add hobby is included
    const addHobby = { title: 'Add', progress: 0, color: '#FCBC10' };
    const hobbiesWithAdd = [
      ...(parsed.hobbies || []),
      ...(!parsed.hobbies?.some(h => h.title === 'Add') ? [addHobby] : []),
    ];

    return {
      ...DEFAULT_USER_DATA,
      ...parsed,
      hobbies: hobbiesWithAdd,
    };
  } catch (err) {
    console.warn('Error loading user data:', err);
    return DEFAULT_USER_DATA;
  }
}

export function saveUserData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save user data:', err);
  }
}

export function clearUserData() {
  localStorage.removeItem(STORAGE_KEY);
}
