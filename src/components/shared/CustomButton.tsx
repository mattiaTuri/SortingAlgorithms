interface CustomButtonProps {
  functionClick: () => void;
  title: string;
}

function CustomButton({ functionClick, title }: CustomButtonProps) {
  return (
    <button
      className="border border-[#faa916] text-white p-2 rounded-[4px]"
      onClick={functionClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
