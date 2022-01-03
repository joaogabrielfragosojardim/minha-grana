import { Container } from "../Components/ContainerPage";

import { useState } from "react";

import { AddAccount } from "../Components/AddAccount";

export const Profile = () => {
  const [accounts, setAccounts] = useState([]);
  const user = "João";

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
          {accounts.length ? null : <AddAccount />}
        </div>
      </Container>
    </>
  );
};
