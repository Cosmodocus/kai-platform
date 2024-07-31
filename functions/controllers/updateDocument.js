const admin = require('firebase-admin');
const firebase = require('firebase-functions');
const { https } = require('firebase-functions');

/**
 * Creates a new user document in the Firestore collection "users" with the provided data.
 *
 * @param {String} email - String of email.
 * @param {String} uid - String of user id.
 * @throws {HttpsError} If any of the required fields (email, fullName, uid) are missing in the data object.
 * @return {Object} An object with a status and message property indicating the success of the operation.
 */
const updateEmail = async (email, uid) => {
  const userRef = admin.firestore().collection('users').doc(uid);
  const userAuth = firebase.auth().email;

  await userRef.update(email);
  userAuth.updateEmail(email);
  return { status: 'success', message: 'email updated' };
};

/**
 * Creates a new user document in the Firestore collection "users" with the provided data.
 *
 * @param {Object} data - The data object containing the user's name, and unique identifier (uid).
 * @param {Object} context - The context object containing information about the authenticated user.
 * @throws {HttpsError} If any of the required fields (email, fullName, uid) are missing in the data object.
 * @return {Object} An object with a status and message property indicating the success of the operation.
 */
exports.updateDocument = https.onCall(async (data, context) => {
  const { uid, fields } = data;

  if (!uid || !fields) {
    throw new https.HttpsError(
      'failed-precondition',
      'Please provide all required fields'
    );
  }

  const userRef = admin.firestore().collection('users').doc(uid);
  await fields.forEach(async (field) => {
    if (field === 'email') {
      await updateEmail(field, uid);
    } else {
      await userRef.update(field);
    }
    console.log(field);
  });
  return { status: 'success', message: fields + ' updated' };
});
