import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../constant";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage

        if (!token) {
          throw new Error("No token found in localStorage.");
        }

        const response = await axios.get(`${URL}/api/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetch;