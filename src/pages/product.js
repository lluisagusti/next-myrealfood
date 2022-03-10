import ProductNotFound from "../components/ProductNotFound";

export default function Product({ result }) {

    result && console.log('result @ Home --> ', result)
   return (
     <div>
       <h1>Product Data</h1>
       <h2>Based on query</h2>
       <ProductNotFound />
     </div>
   );
 }
 
 export async function getServerSideProps({ query }) {
   console.log('GETTING SERVER SIDE PROPS !!!!');
 
   // const res = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barCode}`)
   const res = await fetch(`https://world.openfoodfacts.org/api/v2/product/04963406`);
   const data = await res.json();
   // console.log('data @ getServerSideProps --> ' , data);
 
   return {
     props: {
       result: data
     }
   }
 }
 

 // status: 1 -------------> product_verbose: "product found"