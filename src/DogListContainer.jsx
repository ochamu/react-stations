// @ts-check
import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBread] = useState("");//初期値をdummyとしてテスト通過
  const [images, setImages] = useState([]);


  const breedslist = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breedsdata) => {
      setBreeds(Object.keys(breedsdata.message));
    })
  };

  const selectbreedimages = () => {
    if (selectedBreed) {

      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then((response) => response.json())
      .then((imagesdata) => {
        setImages(imagesdata.message);
      });
    }
  };

  useEffect(() => {
    selectbreedimages(), breedslist();
  }, []);
  
  return (
  <>
  <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={setSelectedBread} />
  <button onClick={selectbreedimages}>表示</button>

  <div>
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image} alt='犬の画像'/>
        </li>
      ))}
    </ul>
  </div>
  </>
  );
};

export default DogListContainer
