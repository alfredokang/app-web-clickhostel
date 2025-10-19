import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, push } from "firebase/database";

// Configurações do Firebase (do .env)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL, // URL do Realtime Database
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// ! ESTAMOS USANDO O REALTIME DATABASE COMO PADRÃO

// ? PARA USAR O FIRESTORE
// Inicializa apenas se ainda não estiver inicializado
export const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

// Exporta Firestore
export const firestore = getFirestore(firebaseApp);

// ? PARA USAR O REALTIME DATABASE
// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Realtime Database
export const database = getDatabase(app);
