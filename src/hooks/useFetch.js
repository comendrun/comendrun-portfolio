import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not Fetch the data");
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data: data, isPending: isPending, error: error };
};
