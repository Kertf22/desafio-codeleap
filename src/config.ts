import axios, { AxiosInstance } from "axios";

export function getAPIClient() {
  const api: AxiosInstance = axios.create({
    baseURL: "https://dev.codeleap.co.uk/careers/",
  });

  return api;
}

export const api = getAPIClient();
