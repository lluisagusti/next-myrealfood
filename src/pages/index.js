import { useState } from "react";
import { Button, Form, Grid, Input, Dropdown } from "semantic-ui-react";
import { useRouter } from "next/router";
import cookie from 'js-cookie';
import { useEffect } from "react";
import HistoryModal from "../components/HistoryModal";
// import Loading from "../components/Loading";

export default function Home() {

  // hooks
  const router = useRouter();

  // state
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    setSearchHistory(JSON.parse(localStorage.getItem('searchHistory')) || []);
  }, [])

  // handles webcom library
  const handleWebcam = () => {
    console.log('handleWebcam')
  };

  // handles search
  const handleSearch = () => {
    // adds search using js-cookie
    cookie.set('barcode', search)

    // manage search history using localStorage
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (search.toString() !== history[history.length - 1]) {
      localStorage.setItem('searchHistory', JSON.stringify([...history, search]));
      setSearchHistory([...history, search])
    } else {
      setSearchHistory([search])
    }

    // push to path
    router.push("/product");
  };

  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="3"
      style={{ height: "80vh" }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Form>
            <h2>MyRealFood</h2>
            <Form.Input
              placeholder="Buscar"
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button color="teal" onClick={handleSearch}>
              Buscar
            </Button>
            <Button onClick={handleWebcam}>Webcam</Button>
            <HistoryModal />
          </Form>
          {/* <Loading /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
