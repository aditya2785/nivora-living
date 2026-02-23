const Button = ({ text, mode = "outline" }) => {
  return (
    <button
      className={`
        px-10 py-4
        text-xs tracking-[0.2em] uppercase
        transition-all duration-300
        border
        ${mode === "black"
          ? "bg-blackPrimary text-white border-blackPrimary hover:bg-white hover:text-blackPrimary"
          : "bg-transparent text-blackPrimary border-blackPrimary hover:bg-blackPrimary hover:text-white"}
      `}
    >
      {text}
    </button>
  );
};

export default Button;