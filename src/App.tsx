import React from "react";
import { Sidebar, Header, SearchBox } from "./components/organisms";
import { AppWrapper, Main } from "./styles/mainStyles";

const App: React.FC = () => (
  <AppWrapper>
    <Sidebar />
    <Main>
      <Header pageTitle="Breeds" />
      <SearchBox />
    </Main>
  </AppWrapper>
);

export default App;
