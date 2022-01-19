import { Container } from "../Components/ContainerPage";
import { AddAccount } from "../Components/AddAccount";

import { RootStateOrAny, useSelector } from "react-redux";

export const Profile = () => {
  const user = "João";

  const bankAccountRedux = useSelector((state: RootStateOrAny) => state.bankAccounts);
  console.log(bankAccountRedux);

  const data = new Date();
  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();
  const today = `${month}/${day}/${year}`;

  return (
    <>
      <Container>
        <div>
          <h2>Hello, {user}</h2>
          <p>Today is {today}</p>
        </div>
        <div>
          <h3>Your Accounts</h3>
          {bankAccountRedux.length ? <div>aaaa</div> : <AddAccount />}
        </div>
      </Container>
    </>
  );
};
