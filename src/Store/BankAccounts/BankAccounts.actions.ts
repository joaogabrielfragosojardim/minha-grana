export function addAccounts(account: string[]){
    return{
        type: "ADD_ACCOUNT",
        payload: [account]
    }
}