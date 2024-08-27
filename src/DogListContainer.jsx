// @ts-check
import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBread] = useState([]);

  const breedslist = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breedsdata) => {
      setBreeds(Object.keys(breedsdata.message));
    })
  };

  useEffect(() => {
    breedslist();
  }, []);
  
  return (
  <>
  <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={setSelectedBread} />
  </>)
}

export default DogListContainer
