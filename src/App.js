import styles from './App.module.css';
import Main from "./pages/Main";
import Header from "./common/header/Header"
import Personal from './pages/Personal'
import Team from './pages/Team'
import Login from './pages/Login'
import Modal from './pages/Modal'
import { useRecoilState } from 'recoil';
import {pageIdx , modalOpen} from './atoms'


function App() {
  const [page,setPageIdx]=useRecoilState(pageIdx);
  const [modalIsOpen, setModalIsOpen]=useRecoilState(modalOpen);
  const returnToMain=()=>{
    setPageIdx(0);
  }
  // const pageIdx=0;
  const change=()=>{
      switch(page){
        case 0:
          return <Main></Main>
        case 1:
          return <Personal></Personal>
        case 2:
          return <Team></Team>
        case 3:
          return <Login></Login>
      }
  }


  return (
    <>
      {modalIsOpen && <Modal></Modal>}
      <Header changePage={()=>returnToMain()}></Header>
      <div className={styles.app}>
        {change()}
      </div>
    </>
  );
}

export default App;
