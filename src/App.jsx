// DO NOT DELETE

import { useEffect, useState } from 'react';
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/sheepdog-english/n02105641_2586.jpg");

  const updateUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setDogUrl(data.message);
    })
  };

  return (
    <>
    <header className='title'>
      <h1>Dogアプリ</h1>
    </header>
    <div>
      犬の画像を表示するサイトです。
    </div>
    <img src={dogUrl} alt="犬の画像" />
    <button onClick={updateUrl}>更新</button>
    </>
  );
};
