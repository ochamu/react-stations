// DO NOT DELETE

import { useState } from 'react';
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const initialState = "https://images.dog.ceo/breeds/sheepdog-english/n02105641_2586.jpg"
  const [dogUrl, setDogUrl] = useState(initialState)

  return (
    <>
    <header>
      <h1>Dogアプリ</h1>
    </header>
    <div>
      犬の画像を表示するサイトです。
    </div>
    <img src={dogUrl} alt="犬の画像" />
    
    </>
  );
}
