import Typography from "@mui/material/Typography";
import { Algorithm } from "../../model/Algorithm";

function ModalParagraph({ name, description }: Algorithm) {
  return (
    <div className="py-4 w-full">
      <Typography id="modal-modal-title" component="h2" className="text-center">
        {name.toUpperCase()}
      </Typography>
      <Typography id="modal-modal-description" component="p" sx={{ mt: 2 }}>
        {description}
      </Typography>
    </div>
  );
}

export default ModalParagraph;
