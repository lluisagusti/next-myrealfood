import { useState } from "react";
import { Button, Grid, Input } from "semantic-ui-react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { useEffect } from "react";
import HistoryModal from "../components/HistoryModal";
import CameraModal from "../components/CameraModal";
// import Scanner from "../components/Scanner";
// import { validationWebcam } from "../constants/constants";
import Quagga from "quagga";
import Loading from "../components/Loading";

export default function Home() {
  // hooks
  const router = useRouter();

  // state
  const [typedBarCode, setTypedBarCode] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [loading, showLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSearchHistory(JSON.parse(localStorage.getItem("searchHistory")) || []);
  }, []);

  // handles webcam lib
  const handleDetect = (barCode) => {
    console.log("barCode @ handleWebcam >> ", barCode);
    // setScannedBarcode(barCode);
    handleSearch(barCode);
  };

  // const handleWebcamStop = () => {
  //   console.log("stop");
  // };

  // handles search
  const handleSearch = (barCode) => {
    let searchString = "";
    if (barCode !== null && barCode.length > 8) {
      searchString = barCode;
      Quagga.stop();
    } else {
      searchString = typedBarCode;
      setTypedBarCode(null);
    }

    if (searchString.length > 8) {
      setError(null);
      // adds search using js-cookie
      cookie.set("barcode", searchString);

      // manage search history using localStorage
      const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      if (searchString.toString() !== history[history.length - 1]) {
        localStorage.setItem(
          "searchHistory",
          JSON.stringify([...history, searchString])
        );
        setSearchHistory([...history, searchString]);
      } else {
        setSearchHistory([searchString]);
        // ??
      }

      // shows loading
      showLoading(true);

      // push to product path
      router.push("/product");

      // hides loading
      showLoading(false);
    } else {
      setError("error msg @ input")
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid centered verticalAlign="middle" columns="3">
          <Grid.Row style={{ height: "20vh" }}>
            <Grid.Column textAlign="center">
              <h2>_barcode scanner</h2>
              <Input
                placeholder="Buscar"
                type="number"
                onChange={(event) => setTypedBarCode(event.target.value)}
              />
              {/* ERROR MSG HERE */}
              {/* error ? <span>Error msg</span> : null */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Button color="teal" onClick={handleSearch}>
              Buscar
            </Button>
            <HistoryModal />
          </Grid.Row>
          <CameraModal onDetected={handleDetect} />
          <Grid.Row></Grid.Row>
        </Grid>
      )}
    </>
  );
}
