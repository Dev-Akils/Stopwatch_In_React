import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.post(url, {
          username: "newuser",
          email: "newuser@example.com",
          password: "securepassword",
        });
        setResponse(result.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [url]);
// Handling loading and error states
if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error fetching data: {error.message}</p>;
}
  return { response, loading, error };
};

export default useFetch;
