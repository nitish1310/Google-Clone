import { useState, useEffect } from "react";
import API_KEY from "./keys";

//Custom Hook

// Tell google to know which search engine to use
const CONTEXT_KEY = "a5c31fc6045b2a8e1";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  //term - Data layer variable. When ever item change useEffect get called
  return { data };
};

export default useGoogleSearch;
