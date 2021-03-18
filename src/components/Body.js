import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { fetchData } from "../api/users";
import Table from "./Table";

import "../styles/Spinner.css";

export const Body = () => {
  const [state, setState] = React.useState({
    loading: false,
    users: [],
    error: null,
  });

  const { loading, users, error } = state;

  React.useEffect(() => {
    const doFetchUsers = async () => {
      setState({ loading: true, users: [], error: null });

      try {
        setTimeout(async () => {
          const { data } = await fetchData();
          setState({ loading: false, users: data, error: null });
        }, 1500);
      } catch (e) {
        setState({ loading: false, users: [], error: e.message });
      }
    };

    doFetchUsers();
  }, []);

  console.log("users", users);

  if (loading) {
    return (
      <div className="spinner-container">
        <FontAwesomeIcon
          size="6x"
          icon={faSpinner}
          className="spinner"
        ></FontAwesomeIcon>
      </div>
    );
  } else if (error) {
    <div className="spinner-container">
      <h1 className="error">{error}</h1>;
    </div>;
  }

  return <Table users={users} />;
};
