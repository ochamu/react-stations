// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  return (
  <>
  <select value={selectedBreed} onChange={(e) => onBreedChange(e.target.value)}>
  <option value="">犬種を選択してください</option>
  {breeds.map((breed, index) => (
        <option key={index} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  </>
  );
};

export default BreedsSelect
