import { apiUrl } from "../constants/constants";

export const getProductDataByBarCode = async (barcode) => {
    console.log('barcode @ getProductDataByBarCode --> ', barcode);

    const response = await fetch(
        `${apiUrl}/product/${barcode}`
      );
      const data = await response.json();
    
      return data;
}