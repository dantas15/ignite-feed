import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Teste"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            facere similique labore cumque? Aut hic recusandae, aliquam ad
            facilis perspiciatis explicabo animi et porro! Tenetur, similique.
            Veritatis, praesentium corrupti. Aliquam."
          />
        </main>
      </div>
    </>
  );
};
