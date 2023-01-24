import { Student } from './../model/student';
import { ListParams } from "./../model/common";
import { City } from "../model/city";
import { ListRes } from "../model/common";
import axiosClient from "./axiosClient";

const studentApi = {
  getAllStudent(params: ListParams): Promise<ListRes<City>> {
    const url = "/students";
    return axiosClient.get(url, {
      params,
    });
  },

  getStudentById(id: string): Promise<ListRes<City>> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  add(params: Student) {
    const url = "/students";
    return axiosClient.post(url, {
      params,
    });
  },

  update(params: Student) {
    const url = "/students";
    return axiosClient.post(url, {
      params,
    });
  },

  remove(id: string) {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
