import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface BackdropProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Backdrop = ({
  children,
  onClick = () => {},
  className,
  ...props
}: BackdropProps) => {
  return (
    <motion.div
      className={twMerge(
        `fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-25 flex justify-center items-center `,
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface UserModalProps {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export const ModalRoot = ({
  isOpen,
  setModalOpen,
  children,
}: UserModalProps) => {
  if (isOpen) {
    return (
      <Backdrop
        onClick={() => {
          setModalOpen(false);
        }}
      >
        <div className="top-0 left-0 w-full h-full z-50 flex justify-center items-center">
          <div
            className="fixed  bg-white rounded-lg w-full max-w-2xl h-auto p-6"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            {children}
          </div>
        </div>
      </Backdrop>
    );
  }

  return null;
};
