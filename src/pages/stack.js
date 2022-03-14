import { Grid, Message } from "semantic-ui-react";
import { stack } from "../constants/constants";

export default function Stack() {
  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="1"
      style={{ height: "20vh", padding: "5em" }}
    >
      {stack.map((item, index) => {
        return (
          <Grid.Row key={index}>
            <Grid.Column textAlign="center">
              <Message>
                <Message.Header>{item.name}</Message.Header>
                <a href={item.url} target="_blank">
                  <p>{item.url}</p>
                </a>
              </Message>
            </Grid.Column>
          </Grid.Row>
        );
      })}
    </Grid>
  );
}
