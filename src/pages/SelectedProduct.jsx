import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../ui/Loader";
import { getSelectedProduct } from "../features/products/productsSlice";

function SelectedProduct() {
  const { productId } = useParams();
  const selectedProduct = useSelector(getSelectedProduct(parseInt(productId)));

  const productStatus = useSelector((state) => state.product.status);
  const isLoadingProduct = productStatus === "loading";

  return (
    <div className="">
      {isLoadingProduct && <Loader />}

      <div>Selected Product ID: {selectedProduct.id}</div>
    </div>
  );
}

export default SelectedProduct;
