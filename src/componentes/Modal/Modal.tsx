import { HTMLProps, useCallback, useEffect, useRef } from "react";
import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";
import './Modal.css';

interface ModalProps extends HTMLProps<HTMLDialogElement> {
  estaAberta: boolean;
  ariaLabel: string;
  fecharModal: () => void;
}

const Modal = ({
  fecharModal,
  estaAberta,
  ariaLabel,
  ...rest
}: ModalProps) => {

    const modalRef = useRef<HTMLDialogElement>(null);

    const escutadorTecla = useCallback((evento: KeyboardEvent) => {
        if (evento.key === "Escape"){
            fecharModal();
        }
    }, [fecharModal]);


    const capturarFoco = useCallback((evento: FocusEvent) => {
        if (!modalRef.current ?.contains(evento.target as Node)){
            modalRef.current?.focus();
        }
    }, []);

    useEffect(() => {
        if (estaAberta){
            document.addEventListener('keydown', escutadorTecla);
            document.addEventListener('focusin', capturarFoco);

            modalRef.current?.focus();
        }

        return () => {
            document.removeEventListener('keydown', escutadorTecla);
            document.removeEventListener('focusin', capturarFoco);
        }
    }, [estaAberta, capturarFoco, escutadorTecla]);

  return (
    <>
      <div onClick={fecharModal}/>
      <dialog
        className="modal__container"
        aria-label={ariaLabel}
        open={estaAberta}
        onClose={fecharModal}
        {...rest}
        ref={modalRef}
      >
        <ModalCabecalho aoFechar={fecharModal}/>
        <ModalConteudo aoFechar={fecharModal}/>
      </dialog>
    </>
  );
};

export default Modal;


