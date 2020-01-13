import React from "react";
import SubscriptionMedia from "../../components/SubscriptionMedia";
export default { title: "SubscriptionMedia" };

const PLACEHOLDER_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/placeholder-img.jpg?alt=media&token=bc0920f1-79f9-4b7c-bf72-429671a2d95e";
export const subscriptionMedia = () => (
  <SubscriptionMedia src={PLACEHOLDER_IMAGE} />
);
