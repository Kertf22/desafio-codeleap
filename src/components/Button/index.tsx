import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled: boolean;
  variant?: "primary" | "danger" | "success" | 'outline';
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      data-disabled={props.disabled}
      className={twMerge(
        "min-w-[100px] rounded-lg text-white bg-blue_1 py-1 px-6 data-[disabled=true]:bg-gray data-[disabled=true]:cursor-not-allowed",
        props.className,
        variant === "primary" && "bg-blue_1 hover:bg-blue_2",
        variant === "danger" && "bg-red_1 hover:bg-red_2",
        variant === "success" && "bg-green_1 hover:bg-green_2",
        variant === "outline" && "bg-transparent border border-black text-black hover:bg-gray-300"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
