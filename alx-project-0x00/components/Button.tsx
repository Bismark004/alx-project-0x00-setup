import {ButtonProps} from "@/interfaces";
const Button : React.FC<ButtonProps> = ({label, onClick, variant = "primary"}) => {
    const styles = variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-700":
    "bg-gray-200 text-black hover:bg-gray-400";
    return (
        <button
          onClick={onClick}
          className={`px-4 py-2 rounded-md font-medium transition ${styles}`}
        >
           {label} 
        </button>
    )
};
export default Button;