import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode
  hidden: boolean
}

const Modal: FC<ModalProps> = ({ children, hidden}) => {
  return (
    <dialog id="my_modal_1" className={`modal ${hidden ? "" : "modal-open"}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Ventana</h3>
        <div className="flex flex-col space-y-3">
            {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
