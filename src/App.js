import styles from './App.module.css';
import Main from "./pages/Main";
import Header from "./common/header/Header"
import { Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.app}>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
