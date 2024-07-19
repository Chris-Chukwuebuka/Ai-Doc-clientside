import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentUser } from "../redux/userSlice";

let BASE_URL;
if (process.env.NODE_ENV === "production") {
  BASE_URL = process.env.REACT_APP_API_PROD_BASE_URL;
} else {
  BASE_URL = process.env.REACT_APP_API_DEV_BASE_URL;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCurrentUser: builder.mutation({
      query: (token) => ({
        url: '/auth/user',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),

      async onQueryStarted({ payload }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data?.user));
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useGetCurrentUserMutation } = userApi;