import { useState, useEffect } from "react";
import { Button, Header, Image, Modal, List, Card, Grid } from "semantic-ui-react";

export default function HistoryModal() {
  // state
  const [open, setOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Historial</Button>}
    >
      <Modal.Header>Historial de las últimas búsquedas</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Grid columns={3}>
            <Grid.Row>
              {searchHistory &&
                searchHistory.map((item, index) => {
                  //   return <List.Item key={index}>{item}</List.Item>;
                  return (
                    <Grid.Column>
                      {" "}
                      <Card key={index} href="#" header={item} />
                    </Grid.Column>
                  );
                })}
            </Grid.Row>
          </Grid>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="teal" onClick={() => setOpen(false)}>
          Cerrar
        </Button>
        {/* <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
  );
}
