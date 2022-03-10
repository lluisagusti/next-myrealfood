// import ProductNotFound from "../components/ProductNotFound";
// import Error from "../components/Error";
import Loading from "../components/Loading";
import { apiUrl } from "../constants/constants";

export default function Product({ product }) {
  product && console.log("product @ Product --> ", product);

  return (
    <div>
      <h1>Product Data</h1>
      <h2>Based on query</h2>
    </div>
  );
}

export async function getServerSideProps({req, res}) {

  const response = await fetch(
    `${apiUrl}/product/${req.cookies.barcode}`
  );
  const data = await response.json();

  return { props: { product: data || {} } };
}