import { City } from "./../model/city";
import { ListRes } from "./../model/common";
import axiosClient from "./axiosClient";

const cityApi = {
  getAll(): Promise<ListRes<City>> {
    const url = "/cities";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
