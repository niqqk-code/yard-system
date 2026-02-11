import { initializeApp, getApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCquNEhCHVkSKDcyOqcczE4eSY3lkrAgOk",
  authDomain: "yard-management-system-8e53a.firebaseapp.com",
  projectId: "yard-management-system-8e53a",
  storageBucket: "yard-management-system-8e53a.appspot.com",
  messagingSenderId: "268321054164",
  appId: "1:268321054164:web:b3188cc5080ad6f4ec8a41",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

