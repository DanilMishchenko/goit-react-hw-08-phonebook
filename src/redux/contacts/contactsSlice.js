import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
      }),
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'post',
        data: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: contact => {
        const { id, ...data } = contact;
        return {
          url: `/contacts/${id}`,
          method: 'patch',
          data: data,
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
