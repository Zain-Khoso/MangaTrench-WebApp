// Lib Imports.
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Reading environment variables.
const AdminCred = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIAL as string);

// Getting / Initializing Admin.
const admins = getApps();
const admin =
  admins.length === 0 ? initializeApp({ credential: cert(AdminCred) }) : (admins.at(0) as App);

// Getting / Initializing Admin Services.
const auth = getAuth(admin);
const firestore = getFirestore(admin);

// Exporting Admin Services.
export { auth, firestore };
