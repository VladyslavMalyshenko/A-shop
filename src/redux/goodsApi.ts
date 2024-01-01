import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  tagTypes: ["Goods"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (category = "macbooks", limit = "") => `/${category && `${category}`}${limit && `?_limit=${limit}`}`,
      providesTags: (result) => result
      ? [
        ...result.map(({ id }: any) => ({type: "Goods", id})),
        { type: "Goods", id: "LIST" }
      ]
      : [
        {type: "Goods", id: "LIST"}
      ]        
    })
  }),
})

export const { useGetGoodsQuery } = goodsApi;