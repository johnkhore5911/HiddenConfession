import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Review {
  'id' : string,
  'review' : string,
  'dislikecount' : bigint,
  'likecount' : bigint,
}
export interface _SERVICE {
  'addConfession' : ActorMethod<[string], undefined>,
  'getReviews' : ActorMethod<[], Array<Review>>,
}
