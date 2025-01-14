import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { serviceKeys } from "../constants";

export const baseQuery = fetchBaseQuery({
  baseUrl: serviceKeys.baseUrl,
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});
