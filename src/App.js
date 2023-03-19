import styles from "./test.module.scss";

import Header from "./components/Header/Header";

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
