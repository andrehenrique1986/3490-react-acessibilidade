import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";
import "./Modal.css";

interface ModalProps extends React.HTMLProps<HTMLDialogElement> {
  estaAberta: boolean;
  ariaLabel: string;
  fecharModal: () => void;
}

const Modal = ({ fecharModal, estaAberta, ariaLabel, ...rest }: ModalProps) => {
  return (
    <>
      <div className="modal__overlay" onClick={fecharModal} />
      <dialog
        className="modal__container"
        aria-label={ariaLabel}
        open={estaAberta}
        onClose={fecharModal}
        {...rest}
      >
        <ModalCabecalho aoFechar={fecharModal} />
        <ModalConteudo aoFechar={fecharModal} />
      </dialog>
    </>
  );
};

export default Modal;
