import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import Scanner from "./Scanner";

export default function CameraModal({ onDetected }) {
  // state
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Webcam</Button>}
    >
      <Scanner onDetected={onDetected} />
    </Modal>
  );
}
