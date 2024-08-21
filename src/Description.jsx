// @ts-check
import { useState, useEffect } from 'react';
import './App.css';
import { DogImage } from './DogImage';

export const Description = () => {
  const [imageUrl, setDogUrl] = useState('');

  const updateUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setDogUrl(data.message);
    })
  };

  useEffect(() => {
    updateUrl();
  }, []);

  return (
    <>
    <div>
      犬の画像を表示するサイトです。
      <DogImage imageUrl={imageUrl} />
      <button onClick={updateUrl}>更新</button>
    </div>
    </>
  );
};

export default Description

