type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline" | "nav";
  onClick?: () => void;
};

function Button({children, variant = "default", onClick}: ButtonProps) {
    const base = "rounded-md w-30 p-3 text-lg transition cursor-pointer"
    const variants = {
        default: "bg-gray-200 text-black border-gray-300 hover:bg-gray-300",
        primary: "w-fit bg-rose-900 text-white text-shadow-lg text-shadow-black hover:bg-rose-800",
        secondary: "bg-green-600 text-white border-green-600 hover:bg-green-700",
        outline: "bg-transparent text-black border-black hover:text-white hover:bg-black",
        nav: "text-white/[.90] text-shadow-black text-shadow-lg border-2 border-transparent hover:border-white",
    };

    return <button className={`${base} ${variants[variant]}`} onClick={onClick}>{children}</button>;
}
export default Button;
