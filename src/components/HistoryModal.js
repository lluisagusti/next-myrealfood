import { useState, useEffect } from "react";
import { Button, Modal, Card, Grid } from "semantic-ui-react";

export default function HistoryModal() {
  // state
  const [open, setOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    setSearchHistory(JSON.parse(localStorage.getItem("searchHistory")));
  }, []);

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
                  return (
                    <Grid.Column key={index}>
                      <Card href="#" header={item} />
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
      </Modal.Actions>
    </Modal>
  );
}
