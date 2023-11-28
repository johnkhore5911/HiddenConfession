export const idlFactory = ({ IDL }) => {
  const Review = IDL.Record({
    'id' : IDL.Text,
    'review' : IDL.Text,
    'dislikecount' : IDL.Int,
    'likecount' : IDL.Int,
  });
  return IDL.Service({
    'addConfession' : IDL.Func([IDL.Text], [], ['oneway']),
    'getReviews' : IDL.Func([], [IDL.Vec(Review)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
