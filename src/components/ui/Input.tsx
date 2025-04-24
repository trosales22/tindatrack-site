import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text text-sm font-medium">{label}</span>
        </label>
      )}
      <input
        {...props}
        className={clsx(
          "input input-bordered w-full p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary",
          className
        )}
      />
    </div>
  );
};

export default Input;
