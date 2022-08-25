export enum AuthError {
  PASSWORD_MISMATCH = "Passwords don't match, dummy.",
  INVALID_CREDENTIALS = "You did something wrong. That don't match what we got.",
  WEAK_PASSWORD = "That's a weak password. Try including at least 6 characters, a number, and a letter.",
  INVALID_EMAIL = "You gotta give us a valid email, man.",
  MISSING_PASSWORD = "You gotta give us a password, man.",
}
