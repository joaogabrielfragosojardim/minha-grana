import { createStore, combineReducers } from "redux";
import { BankAccountsReducer } from "./BankAccounts/BankAccounts.reducer";

const rootReducers = combineReducers({
  bankAccounts: BankAccountsReducer,
});

export const store = createStore(rootReducers);
