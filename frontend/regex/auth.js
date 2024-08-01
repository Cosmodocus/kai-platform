const AUTH_REGEX = {
  email: {
    regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Invalid email address',
  },
  /*
Password Regular Expression

Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.
    */
  password: {
    regex: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    message:
      'Must have 6+ characters, 1 uppercase, 1 lowercase, 1 number, no spaces.',
  },

  fullName: {
    regex: /^[a-zA-Z0-9. ]+$/,
    message: 'Invalid full name',
  },

  occupation: {
    required: 'Occupation is required',
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: 'Occupation must only contain letters and spaces',
    },
    minLength: {
      value: 3,
      message: 'Occupation must be at least 3 characters long',
    },
  },

  socialMedia: {
    facebook: {
      regex: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9(.?)?]/,
      message: 'Invalid Facebook URL',
    },
    linkedIn: {
      regex: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9(.?)?]/,
      message: 'Invalid LinkedIn URL',
    },
    x: {
      regex: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+$/,
      message: 'Invalid X URL',
    },
  },
};

const PASSWORD_REGEX = {
  length: /.{6,}/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /\d/,
  noSpaces: /\S/,
};

export { PASSWORD_REGEX };

export default AUTH_REGEX;
