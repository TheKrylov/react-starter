import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    baseURL: '/',
});

export const exampleService = {
  
  async getExample() {
    return instance.get(`/api`)
    .then(res => {
        return res.data;
    });
  }
}

