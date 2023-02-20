import axios from "axios";


export const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res.data)
  return res.data;
};

export const fetchTodos = async (userId: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
  console.log(res.data);
  return res.data;
};
