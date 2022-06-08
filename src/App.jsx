import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Teste</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            facere similique labore cumque? Aut hic recusandae, aliquam ad
            facilis perspiciatis explicabo animi et porro! Tenetur, similique.
            Veritatis, praesentium corrupti. Aliquam.
          </p>
        </main>
      </div>
    </>
  );
};
