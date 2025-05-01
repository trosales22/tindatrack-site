import { FC, ReactNode, SelectHTMLAttributes } from 'react';

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  badge?: ReactNode;
  className?: string;
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  options: { label: string; value: string; disabled?: boolean }[];
}

const Select: FC<SelectProps> = ({
  label,
  badge,
  className = '',
  color,
  size = 'md',
  options,
  ...props
}) => {
  const baseClass = [
    'w-full',
    'rounded-md',
    'border',
    'border-gray-300',
    'bg-white',
    'py-2',
    'px-3',
    'text-base',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary',
    'transition',
    'duration-150',
    'ease-in-out',
    className,
  ];

  const colorClass = color ? `border-${color}` : '';
  const sizeClass = {
    xs: 'text-xs py-1 px-2',
    sm: 'text-sm py-2 px-3',
    md: 'text-base py-2.5 px-3.5',
    lg: 'text-lg py-3 px-4',
  }[size];

  return (
    <div className="w-full space-y-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex items-center space-x-2">
        <select className={[...baseClass, colorClass, sizeClass].join(' ')} {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        {badge && <span>{badge}</span>}
      </div>
    </div>
  );
};

export default Select;
