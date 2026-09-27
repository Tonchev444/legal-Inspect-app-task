import { createApi } from "@reduxjs/toolkit/query/react";
import { updateSummaryText } from "../features/fileSlice";
import { SAMPLE_REWRITES } from "../consts/consts";

const customBaseQuery = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const shouldFail = Math.random() < 0.15;
  if (shouldFail) {
    return {
      error: {
        status: 500,
        data: "Failed to generate rewrite. Rolled back changes.",
      },
    };
  }

  const randomRewrite =
    SAMPLE_REWRITES[Math.floor(Math.random() * SAMPLE_REWRITES.length)];

  return { data: { suggestedText: randomRewrite } };
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getSuggestedRewrite: builder.mutation({
      query: ({ documentId }) => documentId,

      async onQueryStarted({ newText }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(updateSummaryText(newText));

        try {
          const { data } = await queryFulfilled;

          if (data?.suggestedText) {
            dispatch(updateSummaryText(data.suggestedText));
          }
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetSuggestedRewriteMutation } = apiSlice;
