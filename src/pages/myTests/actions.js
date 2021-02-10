export const initialState = {
  survey: "",
  type: "",
  name: "",
  title: "",
  description: "",
  isVisible: true,
  isRequired: false,
  hasComment: false,
  placeholder: "",
  valueName: "",
  singleData: {
    defaultValue: "",
    correctAnswer: "",
    userAnswer: "",
  },
  choiceData: {
    dropDownDefaultAnswer: "",
    dropDownCorrectAnswer: "",
    dropDownUserAnswer: "",
    choices: [
      {
        value: "",
        text: "",
        defaultAnswer: false,
        correctAnswer: false,
        userAnswer: false,
      },
      {
        value: "",
        text: "",
        defaultAnswer: false,
        correctAnswer: false,
        userAnswer: false,
      },
      {
        value: "",
        text: "",
        defaultAnswer: false,
        correctAnswer: false,
        userAnswer: false,
      },
    ],
  },

  validators: {
    error: false,
    validatorType: "Text",
    requiredErrorText: "",
    textValidator: {
      errorText: "",
      minLength: 0,
      maxLength: 0,
      allowDigits: true,
    },
    numericValidator: {
      errorText: "",
      minValue: 0,
      maxValue: 0,
    },
    emailValidator: {
      errorText: "",
      maxLength: 0,
    },
    choiceDataValidator: {
      requiredErrorText: "",
      minCount: 0,
      maxCount: 0,
    },
  },

  boolQuestion: {
    labelTrue: "Yes",
    labelFalse: "No",
    valueTrue: "",
    valueFalse: "",
    defaultAnswer: false,
    correctAnswer: false,
    userAnswer: false,
  },

  rating: {
    minRate: 1,
    maxRate: 5,
    rateStep: 1,
    minRateDisc: "No Skill",
    maxRateDisc: "Expert",
    defaultAnswer: -1,
    correctAnswer: -1,
    userAnswer: -1,
  },

  matrix: {
    columns: [
      {
        value: "",
        text: "",
      },
      {
        value: "",
        text: "",
      },
      {
        value: "",
        text: "",
      },
    ],
    rows: [
      {
        value: "",
        text: "",
        defaultAnswer: [
          { choice: false },
          { choice: false },
          { choice: false },
        ],
        correctAnswer: [
          { choice: false },
          { choice: false },
          { choice: false },
        ],
        userAnswer: [{ choice: false }, { choice: false }, { choice: false }],
      },
      {
        value: "",
        text: "",
        defaultAnswer: [
          { choice: false },
          { choice: false },
          { choice: false },
        ],
        correctAnswer: [
          { choice: false },
          { choice: false },
          { choice: false },
        ],
        userAnswer: [{ choice: false }, { choice: false }, { choice: false }],
      },
      {
        value: "",
        text: "",
        defaultAnswer: [
          { choice: false },
          { choice: false },
          { choice: false },
        ],
        correctAnswer: [
          { choice: false },
          { choice: false },
          { choice: false },
        ],
        userAnswer: [{ choice: false }, { choice: false }, { choice: false }],
      },
    ],
  },

  multipleTextData: {
    multipleText: [
      {
        name: "",
        text: "",
        isRequired: false,
        defaultAnswer: "",
        correctAnswer: "",
        userAnswer: "",
      },
      {
        name: "",
        text: "",
        isRequired: false,
        defaultAnswer: "",
        correctAnswer: "",
        userAnswer: "",
      },
    ],
  },
};

export const handleField = (target, question, setQuestion) => {
  setQuestion({ ...question, [target.name]: target.value });
};

export const handleFieldBool = (target, value, question, setQuestion) => {
  setQuestion({ ...question, [target.name]: value });
};

export const handleSingleDataDefaultValue = (value, question, setQuestion) => {
  setQuestion({
    ...question,
    singleData: { ...question.singleData, defaultValue: value },
  });
};

export const handleSingleDataCorrectAnswer = (value, question, setQuestion) => {
  setQuestion({
    ...question,
    singleData: { ...question.singleData, correctAnswer: value },
  });
};

export const resetSingleDataDefaultValue = (question, setQuestion) => {
  setQuestion({
    ...question,
    singleData: { ...question.singleData, defaultValue: "" },
  });
};

export const choicesValueChange = (
  choiceIndex,
  value,
  question,
  setQuestion
) => {
  let newArray = [...question.choiceData.choices];
  newArray[choiceIndex] = { ...newArray[choiceIndex], value: value };
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const choicesTextChange = (
  choiceIndex,
  value,
  question,
  setQuestion
) => {
  let newArray = [...question.choiceData.choices];
  newArray[choiceIndex] = { ...newArray[choiceIndex], text: value };
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const addNewChoice = (question, setQuestion) => {
  let newArray = [
    ...question.choiceData.choices,
    {
      value: "",
      text: "",
      defaultAnswer: false,
      correctAnswer: false,
      userAnswer: false,
    },
  ];
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const removeSingleChoice = (index, question, setQuestion) => {
  let newArray = [...question.choiceData.choices];
  let temp = newArray.filter((item, i) => i !== index);
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: temp },
  });
};

export const removeAllChoices = (question, setQuestion) => {
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: [] },
  });
};

export const checkBoxDefaultAnswerChange = (
  choiceIndex,
  value,
  question,
  setQuestion
) => {
  let newArray = [...question.choiceData.choices];
  newArray[choiceIndex] = {
    ...newArray[choiceIndex],
    defaultAnswer: value,
    userAnswer: value,
  };
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const checkBoxCorrectAnswerChange = (
  choiceIndex,
  value,
  question,
  setQuestion
) => {
  let newArray = [...question.choiceData.choices];
  newArray[choiceIndex] = {
    ...newArray[choiceIndex],
    correctAnswer: value,
  };
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const resetDefaultChoices = (question, setQuestion) => {
  let newArray = [...question.choiceData.choices];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = { ...newArray[i], defaultAnswer: false, userAnswer: false };
  }
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const resetCorrectChoices = (question, setQuestion) => {
  let newArray = [...question.choiceData.choices];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = { ...newArray[i], correctAnswer: false };
  }
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const radioGroupDefaultAnswerChange = (
  choiceIndex,
  question,
  setQuestion
) => {
  let newArray = [...question.choiceData.choices];
  for (let i = 0; i < newArray.length; i++) {
    if (i === choiceIndex) {
      newArray[i] = { ...newArray[i], defaultAnswer: true, userAnswer: true };
    } else {
      newArray[i] = { ...newArray[i], defaultAnswer: false, userAnswer: false };
    }
  }
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const radioGroupCorrectAnswerChange = (
  choiceIndex,
  question,
  setQuestion
) => {
  let newArray = [...question.choiceData.choices];
  for (let i = 0; i < newArray.length; i++) {
    if (i === choiceIndex) {
      newArray[i] = { ...newArray[i], correctAnswer: true };
    } else {
      newArray[i] = { ...newArray[i], correctAnswer: false };
    }
  }
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, choices: newArray },
  });
};

export const dropDownValueChange = (name, value, question, setQuestion) => {
  if (name === "dropDownDefaultAnswer") {
    setQuestion({
      ...question,
      choiceData: {
        ...question.choiceData,
        dropDownDefaultAnswer: value,
        dropDownUserAnswer: value,
      },
    });
  } else if (name === "dropDownCorrectAnswer") {
    setQuestion({
      ...question,
      choiceData: { ...question.choiceData, dropDownCorrectAnswer: value },
    });
  }
};

export const resetDropdownDefaultChoice = (question, setQuestion) => {
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, dropDownDefaultAnswer: "" },
  });
};

export const resetDropdownCorrectChoice = (question, setQuestion) => {
  setQuestion({
    ...question,
    choiceData: { ...question.choiceData, dropDownCorrectAnswer: "" },
  });
};

export const handleRatingChange = (field, value, question, setQuestion) => {
  if (field === "minRate") {
    setQuestion({
      ...question,
      rating: { ...question.rating, minRate: value },
    });
  } else if (field === "maxRate") {
    setQuestion({
      ...question,
      rating: { ...question.rating, maxRate: value },
    });
  } else if (field === "rateStep") {
    setQuestion({
      ...question,
      rating: { ...question.rating, rateStep: value },
    });
  } else if (field === "minRateDisc") {
    if (value.length <= 20) {
      setQuestion({
        ...question,
        rating: { ...question.rating, minRateDisc: value },
      });
    }
  } else if (field === "maxRateDisc") {
    if (value.length <= 20) {
      setQuestion({
        ...question,
        rating: { ...question.rating, maxRateDisc: value },
      });
    }
  } else if (field === "defaultAnswer") {
    setQuestion({
      ...question,
      rating: { ...question.rating, defaultAnswer: value, userAnswer: value },
    });
  } else if (field === "correctAnswer") {
    setQuestion({
      ...question,
      rating: { ...question.rating, correctAnswer: value },
    });
  }
};

export const resetRating = (question, setQuestion) => {
  setQuestion({
    ...question,
    rating: { ...question.rating, defaultAnswer: 0, correctAnswer: 0 },
  });
};

export const changeValidationType = (type, question, setQuestion) => {
  setQuestion({
    ...question,
    validators: { ...question.validators, validatorType: type },
  });
};

export const changeValidationErrorValues = (
  type,
  field,
  value,
  question,
  setQuestion
) => {
  if (type === "textValidator" && field === "errorText") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        textValidator: {
          ...question.validators.textValidator,
          errorText: value,
        },
      },
    });
  } else if (type === "textValidator" && field === "minLength") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        textValidator: {
          ...question.validators.textValidator,
          minLength: value,
        },
      },
    });
  } else if (type === "textValidator" && field === "maxLength") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        textValidator: {
          ...question.validators.textValidator,
          maxLength: value,
        },
      },
    });
  } else if (type === "textValidator" && field === "allowDigits") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        textValidator: {
          ...question.validators.textValidator,
          allowDigits: value,
        },
      },
    });
  } else if (type === "numericValidator" && field === "errorText") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        numericValidator: {
          ...question.validators.numericValidator,
          errorText: value,
        },
      },
    });
  } else if (type === "numericValidator" && field === "minValue") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        numericValidator: {
          ...question.validators.numericValidator,
          minValue: value,
        },
      },
    });
  } else if (type === "numericValidator" && field === "maxValue") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        numericValidator: {
          ...question.validators.numericValidator,
          maxValue: value,
        },
      },
    });
  } else if (type === "emailValidator" && field === "errorText") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        emailValidator: {
          ...question.validators.emailValidator,
          errorText: value,
        },
      },
    });
  } else if (type === "emailValidator" && field === "maxLength") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        emailValidator: {
          ...question.validators.emailValidator,
          maxLength: value,
        },
      },
    });
  } else if (type === "choiceDataValidator" && field === "requiredErrorText") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        choiceDataValidator: {
          ...question.validators.choiceDataValidator,
          requiredErrorText: value,
        },
      },
    });
  } else if (type === "choiceDataValidator" && field === "minCount") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        choiceDataValidator: {
          ...question.validators.choiceDataValidator,
          minCount: value,
        },
      },
    });
  } else if (type === "choiceDataValidator" && field === "maxCount") {
    setQuestion({
      ...question,
      validators: {
        ...question.validators,
        choiceDataValidator: {
          ...question.validators.choiceDataValidator,
          maxCount: value,
        },
      },
    });
  }
};
