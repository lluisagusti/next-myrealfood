import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function BackButton() {
  // hooks
  const router = useRouter();

  // go back function
  const handleGoBack = () => {
    return router.push("/");
  };

  return <Button onClick={handleGoBack}>GoBack</Button>;
}
