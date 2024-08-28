import { Rating } from "react-simple-star-rating";

function ProductRating({ rate }) {
  return (
    <Rating
      initialValue={rate}
      allowFraction={true}
      readonly={true}
      allowHover={false}
      disableFillHover={true}
      size={20}
    />
  );
}

export default ProductRating;
