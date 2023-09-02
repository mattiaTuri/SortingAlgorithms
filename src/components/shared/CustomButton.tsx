import Button from "@mui/material/Button";

interface CustomButtonProps {
  functionClick: () => void;
  title: string;
}

function CustomButton({ functionClick, title }: CustomButtonProps) {
  return (
    <Button
      disableRipple
      sx={{
        border: "2px solid #faa916",
        color: "white",
        transitionDuration: "300ms",
        "&:hover": {
          backgroundColor: "#faa916",
        },
      }}
      className="p-2 rounded-[4px] hover:text-[#262626]"
      onClick={functionClick}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
