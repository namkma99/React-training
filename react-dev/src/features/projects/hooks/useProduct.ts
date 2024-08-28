import React from "react";

const useProduct = () => {
  const [data, setData] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const fetchApi = React.useCallback(() => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve("API data fetched successfully!");
        } else {
          reject(new Error("API request failed."));
        }
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    fetchApi()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchApi]);
  return { fetchApi, loading, data };
};

export default useProduct;
