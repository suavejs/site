import * as admin from "firebase-admin";

const serviceAccount = "../svelte-playground-firebase-adminsdk-9ndh4-98195e2eed.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://svelte-playground.firebaseio.com"
});

export const auth = admin.auth();
export const storage = admin.storage();
export const db = admin.firestore();
