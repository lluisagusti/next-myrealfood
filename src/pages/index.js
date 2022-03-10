import { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import { useRouter } from "next/router";
import cookie from 'js-cookie';

export default function Home() {

  // hooks
  const router = useRouter();

  // state
  const [search, setSearch] = useState("");

  // handles webcom library
  const handleWebcam = () => {
    console.log('handleWebcam')
  };

  // handles search
  const handleSearch = () => {
    // adds search to cookie
    cookie.set('barcode', search)

    // add search to search history
  //   let historyObj = { city: [] };

  //   function onLoad() {
  //     if(localStorage.getItem('history')) {
  //       historyObj = JSON.parse(localStorage.getItem('history'));
  //     }
  //   }
    
  //   function addHistory(dataToSave) {
  //     historyObj.city.push(dataToSave);
  //     localStorage.setItem('history',JSON.stringify(historyObj));
  //   }lStorage.setItem("searchHistory",historyTmp);
  //  }
    
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
            <Form.Input placeholder="Buscar" onChange={(event) => setSearch(event.target.value)} />
            <Button color="teal" onClick={handleSearch}>Buscar</Button>
            <Button onClick={handleWebcam}>Webcam</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
