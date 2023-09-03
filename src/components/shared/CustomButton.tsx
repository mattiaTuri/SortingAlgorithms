import Button from "@mui/material/Button";

interface CustomButtonProps {
  functionClick: () => void;
  title: string;
  disabled: boolean;
}

function CustomButton({ functionClick, title, disabled }: CustomButtonProps) {
  return (
    <Button
      disableRipple
      disabled={disabled}
      sx={{
        border: "2px solid #faa916",
        color: "white",
        transitionDuration: "300ms",
        "&:hover": {
          backgroundColor: "#faa916",
        },
      }}
      className={`p-2 rounded-[4px] hover:text-[#262626] ${
        disabled && "opacity-50"
      }`}
      onClick={functionClick}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
