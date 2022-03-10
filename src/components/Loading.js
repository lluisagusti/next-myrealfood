import { Grid, Loader, } from "semantic-ui-react";

export default function Loading() {
  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="1"
      style={{ height: "80vh" }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center">
          <img src="red-pepper.png" alt="myrealfood-logo" />
          <Loader active inline='centered' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
