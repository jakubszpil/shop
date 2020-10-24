import React from "react";

export async function getServerSideProps({ req, res }) {
  res.writeHead(301, {
    Location: "/customer/login",
  });
  res.end();
}

const Customer = () => {
  return <div>customer</div>;
};

export default Customer;
