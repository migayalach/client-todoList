type CodeFirebase =
  | "auth/invalid-credential"
  | "auth/email-already-in-use"
  | "";

interface InputErrors {
  code: CodeFirebase;
  message: string;
}

export const castingErrors = ({ code, message }: InputErrors) => {
  switch (code) {
    case "auth/invalid-credential":
      return {
        head: "Information",
        type: "info",
        description: `Sorry, email or password is incorrect.`,
        message,
      };

    case "auth/email-already-in-use":
      return {
        head: "Information",
        type: "info",
        description: `Sorry, this email already exists.`,
        message,
      };
  }
};
