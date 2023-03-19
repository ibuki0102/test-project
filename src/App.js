import React from "react";

import Header from "./components/Header/Header";

import styles from "./test.module.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <h1 className={styles.Title}>Test Title</h1>
      </div>
    </div>
  );
}

export default App;
