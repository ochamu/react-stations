// @ts-check
import './App.css';

export const DogImage = ({ imageUrl }) => {
  return (
    <>
    <div>
      <img src={imageUrl} alt="犬の画像" />
    </div>
    </>
  );
};

export default DogImage
