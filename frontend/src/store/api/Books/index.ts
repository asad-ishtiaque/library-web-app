import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils";

export const bookApi = createApi({
  reducerPath: "books",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "books",
        method: "GET",
      }),
    }),
    requestBook: builder.mutation({
      query: (body: any) => ({
        url: "book-requests/createBookRequest",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useRequestBookMutation } = bookApi;
