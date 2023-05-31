import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios
          .get("http://capstone-webtooner.com/user", {
            params: {
              userId: 11,
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

    fetchUsers();
  }, []);

  if (loading) return <div>,,,,,,,,,,</div>;
  if (error) return <div>error</div>;
  if (!users) return <div>!users</div>;
  return <ul></ul>;
}

export default Users;
