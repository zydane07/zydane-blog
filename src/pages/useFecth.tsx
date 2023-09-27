import { useEffect, useState } from "react";

const useFecth = (url: any) => {
  const [data, setData] = useState<any | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Can't fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err);
        });
    }, 500);
  }, [url]);

  return { data, isPending, error };
};

export default useFecth;
