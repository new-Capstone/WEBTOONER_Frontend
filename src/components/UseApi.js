import React, { useState, useEffect } from "react";
import axios from "axios";

function UseApi() {
  const [users, setUse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUse = async () => {
      try {
        setError(null);
        setUse(null);
        setLoading(true);

        const response = await axios
          .get("http://capstone-webtooner.com/portfolio", {
            params: {
              portfolioId: 1,
            },
          })
          .then((response) => {
            console.log(response.data);
          });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUse();
  }, []);

  if (loading) return <div>,,,,,,,,,,</div>;
  if (error) return <div>error</div>;
  if (!users) return <div>!users</div>;
  return <ul></ul>;
}

export default UseApi;
