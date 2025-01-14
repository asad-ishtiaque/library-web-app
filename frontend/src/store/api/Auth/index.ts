import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../utils";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (body: any) => ({
        url: "auth/signIn",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body: any) => ({
        url: "auth/signUp",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: (body: any) => ({
        url: "api/v1/auth/logout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useLogoutMutation} = authApi;
