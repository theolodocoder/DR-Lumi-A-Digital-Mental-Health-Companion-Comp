import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const buttonVariants = {
  intent: {
    default: "bg-red-600 text-center ",
    secondary: "bg-green-500",
    primary: ["bg-[#4B3425] text-white"],
    outline: "bg-none border border-2",
  },
  size: {
    small: ["text-sm", "py-2", "px-4"],
    medium: ["text-base", "py-2", "px-4"],
    large: ["text-lg", "py-5", "px-8"],
  },
};

const buttonStyles = cva(
  ["rounded-full align-center flex-row items-center justify-center"],
  {
    variants: buttonVariants,
    compoundVariants: [
      {
        intent: "primary",
        size: "small",
        className: "",
      },
    ],
  }
);

export const Button = ({
  children,
  intent,
  size,
  className,
  disabled,
  ...props
}: TouchableOpacityProps & VariantProps<typeof buttonStyles>) => {
  return (
    <TouchableOpacity
      className={cn(buttonStyles({ intent, size }), className)}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1,
      }}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
