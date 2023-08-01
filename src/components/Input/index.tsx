interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      {label && <label className="text-md font-semibold">{label}</label>}
      <input
        {...props}
        className="rounded-lg border border-gray bg-white py-2 px-4"
      />
    </div>
  );
};


export default Input;