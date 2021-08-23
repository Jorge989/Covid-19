import axios from "axios";

export const api = axios.create({
  baseURL: "https://disease.sh/v3/covid-19/",
});
