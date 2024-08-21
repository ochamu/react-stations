// @ts-check
import { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

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
  <p>{breeds}</p>
  </>)
}

export default DogListContainer
