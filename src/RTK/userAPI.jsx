import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi =createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({ baseUrl: 'https://663dae5ee1913c476794ffa1.mockapi.io' }),
    tagTypes:["User"],
    endpoints: (builder) => ({
        getUsers: builder.query({
          query: () => `/name/user`,
          providesTags:["User"],
        }),  
        getUser: builder.query({    
          query: (id) => `/name/user/${id}`,
          providesTags:["User"]
        }),   
        addUser: builder.mutation({ 
          query: (user) => ({
            url:'/name/user',      
            method:'POST',  
            body:user, 
          }),    
          invalidatesTags:["User"]   
        }),    
        updateUser: builder.mutation({   
          query: (user) => ({   
            url:`/name/user/${user.id}`,   
            method:'PUT',
            body:user,
          }),
          invalidatesTags:["User"]
        }),
        deleteUser: builder.mutation({
          query: (id) => ({
            url:`/name/user/${id}`,   
            method:'DELETE'
          }),
          invalidatesTags:["User"]
        }),
      }),
      
})

export const { 
  useGetUsersQuery , 
  useGetUserQuery , 
  useAddUserMutation , 
  useUpdateUserMutation ,
  useDeleteUserMutation ,
} = userApi




