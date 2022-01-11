export const BankAccountsReducer = (state: string[] = [], action: any) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return action.payload;

    default:
      return state;
  }
};
