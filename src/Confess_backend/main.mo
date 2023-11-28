import Text "mo:base/Text";
import List "mo:base/List";
import Int "mo:base/Int";

actor {
  type Review = {
    id: Text;
    review: Text;
    likecount: Int;
    dislikecount: Int;
  };

  stable var idCount = 0;
  stable var reviews : List.List<Review> = List.nil<Review>();

  public query func getReviews(): async [Review] {
    return List.toArray(reviews);
  };

  public func addConfession(confessionText: Text) {
    idCount := idCount + 1;
    var confessionReview: Review = {
      id = Int.toText(idCount);
      review = confessionText;
      likecount = 0;
      dislikecount = 0;
    };
    reviews := List.push(confessionReview, reviews);
  };
};
