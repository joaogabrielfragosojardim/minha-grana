import { IBankAccount } from "../../Components/AddAccountModal";

export function addAccounts(account: IBankAccount) {
  return {
    type: "ADD_ACCOUNT",
    payload: account,
  };
}
