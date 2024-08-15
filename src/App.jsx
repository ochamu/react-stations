// DO NOT DELETE

import { useState } from 'react';
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/sheepdog-english/n02105641_2586.jpg");

  const Nexturl = () => {
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
  };
  return (
    <>
    <header>
      <h1>Dogアプリ</h1>
    </header>
    <div>
      犬の画像を表示するサイトです。
    </div>
    <img src={dogUrl} alt="犬の画像" />
    <button onClick={Nexturl}>更新</button>
    </>
  );
};
