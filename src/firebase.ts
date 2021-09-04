import dotenv from "dotenv";
import * as admin from "firebase-admin";

dotenv.config();
admin.initializeApp();

export function isFirebaseError(error: unknown): error is admin.FirebaseError {
  const firebaseError = error as admin.FirebaseError;

  return (
    firebaseError.code !== undefined && firebaseError.message !== undefined
  );
}

export default admin;
