type action = {
  type: string;
  payload: string[];
};

const INITAL_STATE = [] as object[];

export const BankAccountsReducer = (state = INITAL_STATE, action: action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};
