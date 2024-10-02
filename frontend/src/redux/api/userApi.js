import { baseApi } from "./apiSlice";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (arg) => ({
        url: "/user",
        params: arg,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    getSingleUser: build.query({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/user/${data.userId}`,
        method: "PATCH",
        data: data.data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: build.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
