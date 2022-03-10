import { Button, Grid } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Error() {
  // hooks
  const router = useRouter();

//   // go back function
//   const handleGoBack = (e) => {
//       e.preventDefault();
//     router.push("/");
//   };

  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="1"
      style={{ height: "80vh" }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h2>Error</h2>
          <img src="red-pepper.png" alt="myrealfood-logo"></img>
          <div>
            <Button color="teal" onClick={() => router.push("/")}>
              GoBack
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
