interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = ({ label, ...props }: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      {label && <label className="text-md font-semibold">{label}</label>}

      <textarea
        {...props}
        className="min-h-[80px] rounded-lg border border-gray bg-white py-2 px-4"
      />
    </div>
  );
};

export default TextArea;
