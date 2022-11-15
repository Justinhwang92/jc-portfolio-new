// validate field
export const validateField = (field: string, value: string) => {
  switch (field) {
    case 'email':
      return validateEmail(value);
    case 'name':
      return validateName(value);
    case 'message':
      return validateMessage(value);
    default:
      return '';
  }
};

const validateName = (name: string) => {
  if (!name) return 'Please enter your name';
  if (name.length < 2) {
    return 'name must contain more than one character';
  }

  return 'valid';
};

const validateEmail = (email: string) => {
  if (!email) return 'Please enter your email';
  const value =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.test(String(email).toLowerCase())) {
    return 'email must contain only letters, numbers, @, _, -, and .';
  }

  return 'valid';
};

const validateMessage = (name: string) => {
  if (!name) return 'Please enter your message';

  return 'valid';
};
