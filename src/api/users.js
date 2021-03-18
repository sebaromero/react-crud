import Axios from "axios";

export const getUsers = async () => {
  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.error("error", error);
  }
};
