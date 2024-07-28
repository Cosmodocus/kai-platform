const admin = require('firebase-admin');
const { https } = require('firebase-functions');

/**
 * Creates a new user document in the Firestore collection "users" with the provided data.
 *
 * @param {Object} data - The data object containing the user's email, full name, and unique identifier (uid).
 * @param {Object} context - The context object containing information about the authenticated user.
 * @throws {HttpsError} If any of the required fields (email, fullName, uid) are missing in the data object.
 * @return {Object} An object with a status and message property indicating the success of the operation.
 */
exports.signUpUser = https.onCall(async (data, context) => {
  const { email, fullName, uid } = data;

  if (!email || !fullName || !uid) {
    throw new https.HttpsError(
      'failed-precondition',
      'Please provide all required fields'
    );
  }

  const userRef = admin.firestore().collection('users').doc(uid);
  const userDoc = {
    id: uid,
    email,
    fullName,
  };
  await userRef.set(userDoc);
  return { status: 'success', message: 'User document created successfully' };
});

/**
 * Creates a new user document in the Firestore collection "users" with the provided data.
 *
 * @param {Object} data - The data object containing the user's email, and unique identifier (uid).
 * @param {Object} context - The context object containing information about the authenticated user.
 * @throws {HttpsError} If any of the required fields (email, fullName, uid) are missing in the data object.
 * @return {Object} An object with a status and message property indicating the success of the operation.
 */
exports.updateEmail = https.onCall(async (data, context) => {
  const { uid, email } = data;

  if (!uid || !email) {
    throw new https.HttpsError(
      'failed-precondition',
      'Please provide all required fields'
    );
  }

  const userRef = admin.firestore().collection('users').doc(uid);
  await userRef.update({ email });
  return { status: 'success', message: 'email updated' };
});

/**
 * Creates a new user document in the Firestore collection "users" with the provided data.
 *
 * @param {Object} data - The data object containing the user's name, and unique identifier (uid).
 * @param {Object} context - The context object containing information about the authenticated user.
 * @throws {HttpsError} If any of the required fields (email, fullName, uid) are missing in the data object.
 * @return {Object} An object with a status and message property indicating the success of the operation.
 */

exports.updateName = https.onCall(async (data, context) => {
  const { uid, fullName } = data;

  if (!uid || !fullName) {
    throw new https.HttpsError(
      'failed-precondition',
      'Please provide all required fields'
    );
  }

  const userRef = admin.firestore().collection('users').doc(uid);
  await userRef.update({ fullName });
  return { status: 'success', message: 'name updated' };
});

