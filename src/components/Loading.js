import { Grid } from "semantic-ui-react";
import Spinner from "./Spinner";

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
          <Spinner />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
