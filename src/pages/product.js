import ProductNotFound from "../components/ProductNotFound";
import Loading from "../components/Loading";
import { getProductDataByBarCode } from "../service/service";
import { apiUrl } from "../constants/constants";

export default function Product({ product }) {
  product && console.log("product @ Product --> ", product);
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  console.log('searchHistory', searchHistory)
  
  return (
    <div>
      <h1>Product Data</h1>
      <h2>Based on query</h2>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const data = await getProductDataByBarCode(req.cookies.barcode);

  return { props: { product: data || {} } };
}
