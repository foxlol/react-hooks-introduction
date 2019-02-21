import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    console.log(`Sending Http request for ${url}`);

    setIsLoading(true);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch data!");
        }
        return response.json();
      })
      .then(data => {
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
