import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/products`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByFilter = async (params) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/search${params}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
