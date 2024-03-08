import { useEffect, useState } from "react";
import { CardProps, FetchResult } from "../interfaces/interface";

const useFetch = (): FetchResult => {
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/data.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData: CardProps[] = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
