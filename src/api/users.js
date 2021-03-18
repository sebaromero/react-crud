import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    });
    return response;
  } catch (error) {
    return error;
  }
};
