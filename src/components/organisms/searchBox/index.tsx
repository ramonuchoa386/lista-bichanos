import React from "react";
import { Result } from "../../molecules";
import { SearchResultsWrapper } from "./styles";

const SearchBox: React.FC = () => {
  const [results, setResult] = React.useState([]);
  const [options, setOptions] = React.useState([]);
  const [selectedBreed, setSelectedBreed] = React.useState("none");

  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      method: "GET",
      headers: new Headers({
        "x-api-key": "2a69daf0-8250-45b2-a41f-109d65cd74d8",
      }),
      mode: "cors",
      cache: "default",
    })
      .then((res) => res.json())
      .then((data) => {
        const rawOptions = [];

        data.forEach((cat) => {
          rawOptions.push({ name: cat.name, id: cat.id });
        });

        setOptions(rawOptions);
      });
  }, []);

  React.useEffect(() => {
    if (selectedBreed != "none") {
      fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}&limit=8`,
        {
          method: "GET",
          headers: new Headers({
            "x-api-key": "2a69daf0-8250-45b2-a41f-109d65cd74d8",
          }),
          mode: "cors",
          cache: "default",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const rawResults = [];

          // data.forEach((cat) => {
          rawResults.push({
            imageSrc: data[0].url,
            breedName: data[0].breeds[0].name,
            breedDescription: data[0].breeds[0].description,
            temperaments: [
              {
                ratingType: "Affection Level",
                stars: [...Array(data[0].breeds[0].affection_level)],
              },
              {
                ratingType: "Adaptability",
                stars: [...Array(data[0].breeds[0].adaptability)],
              },
              {
                ratingType: "Child Friendly",
                stars: [...Array(data[0].breeds[0].child_friendly)],
              },
              {
                ratingType: "Dog Friendly",
                stars: [...Array(data[0].breeds[0].dog_friendly)],
              },
            ],
          });
          // });

          setResult(rawResults);
        });
    }
  }, [selectedBreed]);

  const handleSelectChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  return (
    <SearchResultsWrapper>
      <label htmlFor="search">
        Select the breed:
        <select
          name="breedSelection"
          onChange={handleSelectChange}
          defaultValue={selectedBreed}
        >
          <option value="none">Select the breed name</option>
          {options.map((option, index) => {
            return (
              <option key={index + option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </label>
      {/* <Text>
        {results.length > 0 &&
          results.length +
            (results.length > 1 ? " results found" : " result found")}
      </Text> */}
      {results.length === 0 ? (
        <p style={{ textAlign: "center" }}>Nenhum selecionado</p>
      ) : (
        results.map((breedData, index) => (
          <Result
            key={breedData.breedName + index}
            imageSrc={breedData.imageSrc}
            alterText={breedData.breedName}
            breedName={breedData.breedName}
            breedDescription={breedData.breedDescription}
            temperaments={breedData.temperaments}
          />
        ))
      )}
      {/* {results.length > 0 && (
        <Button btnContent="Load more" className="load-more" />
      )} */}
    </SearchResultsWrapper>
  );
};

export default SearchBox;
