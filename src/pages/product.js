// import ProductNotFound from "../components/ProductNotFound";
// import Loading from "../components/Loading";
import Error from "../components/Error";
import { getProductDataByBarCode } from "../service/service";
import { servingsPerProduct } from "../utils/utils";
// import { apiUrl } from "../constants/constants";

export default function Product({ product }) {

  if (product.status === 0) return <Error />

  const { code, product: info } = product;

  return (
    <>
        <div>
          <h1>Product Data</h1>
          <h2>barCode: {code}</h2>
          <h3>Name: {info && info.product_name_en}</h3>
          <h3>Quantity: {info && info.quantity}</h3>
          <h3>Serving Quantity: {info && info.serving_quantity}</h3>
          <h3>
            ...so Units:{" "}
            {servingsPerProduct(info && info.quantity, info && info.serving_quantity, 1) || "-"}
          </h3>
        </div>

    </>
  );
}

export async function getServerSideProps({ req }) {
  // service call to retrieve product info
  const product = await getProductDataByBarCode(req.cookies.barcode);

  // props returned on top of current page
  return { props: { product: product || {} } };
}
