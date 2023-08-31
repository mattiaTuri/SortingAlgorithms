interface CustomButtonProps {
  functionClick: () => void;
  title: string;
}

function CustomButton({ functionClick, title }: CustomButtonProps) {
  return (
    <button
      className="border border-[#faa916] text-white p-2"
      onClick={functionClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
