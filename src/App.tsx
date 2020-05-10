import React from "react";
import Layout from "./layout";
import Home from "./views/Home";

export default function App(): JSX.Element {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
