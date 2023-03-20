function emailReducer(email, action) {
  switch (action.type) {
    case "user-input": {
      return {
        ...email,
        value: action.changedValue,
        isValid: action.changedIsValid,
      };
    }

    case "change-isValid": {
      return { ...email, isValid: action.changedIsValid };
    }

    case "reset-email": {
      return { ...email, value: "" };
    }

    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function passwordReducer(password, action) {
  switch (action.type) {
    case "user-input": {
      return {
        ...password,
        value: action.changedValue,
        isValid: action.changedIsValid,
      };
    }

    case "change-isValid": {
      return { ...password, isValid: action.changedIsValid };
    }

    case "reset-password": {
      return { ...password, value: "" };
    }

    default: {
      throw new Error("Invalid action " + action.type);
    }
  }
}

export { emailReducer, passwordReducer };
