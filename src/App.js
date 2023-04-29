import InputBlock from "./components/InputBlock/InputBlock";
import ImagesBlock from "./components/ImagesBlock/ImagesBlock";
import NavigationBlock from "./components/NavigationBlock/NavigationBlock";
import { useEffect, useState } from "react";

function App() {
  const options = {
    method: "GET",
  }; 

  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);

  const apiUrl = `https://api.unsplash.com/search/photos?page=${pageNumber}&orientation=landscape&query=${inputValue}&per_page=20/&client_id=AxtrcYmGhEN-akH7z3ocH5gPdiYF_cdAPuhtJEIXRC0`;

  useEffect(() => {
    const useEffectOptions = {
      method: "GET",
    };

    const apiUrl = `https://api.unsplash.com/search/photos?page=${pageNumber}&orientation=landscape&query=world&per_page=20/&client_id=AxtrcYmGhEN-akH7z3ocH5gPdiYF_cdAPuhtJEIXRC0`;

    const getApiDataOnLoad = async () => {
      const apiResponse = await fetch(apiUrl, useEffectOptions);
      const responseJson = await apiResponse.json();

      setApiData(responseJson.results);
    };

    getApiDataOnLoad();
  }, [pageNumber]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const searchButtonHandler = async () => {
    const apiResponse = await fetch(apiUrl, options);
    const responseJson = await apiResponse.json();

    setApiData(responseJson.results);
    console.log(apiData);
  };

  const nextButtonHandler = async () => {
    setPageNumber(pageNumber += 1);
    
    const apiResponse = await fetch(apiUrl, options);
    const responseJson = await apiResponse.json();

    setApiData(responseJson.results);
  };

  const previousButtonHandler = async () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber -= 1);
    }

    const apiResponse = await fetch(apiUrl, options);
    const responseJson = await apiResponse.json();

    setApiData(responseJson.results);
  };

  return (
    <div className="App">
      <header>
        <InputBlock 
          inputOnChange={inputHandler}
          buttonOnClick={searchButtonHandler}
        />
      </header>

      <ImagesBlock apiDataProp={apiData} />

      <footer>
        <NavigationBlock 
          previousButtonOnClick={previousButtonHandler}
          nextButtonOnClick={nextButtonHandler}
        />   
      </footer>   
    </div>
  );
}

export default App;
