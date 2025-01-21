import { ReactNode } from "react"
import Botao from "../Botao"

interface ModalCabecalhoProps {
    children?: ReactNode;
    aoFechar: () => void;
}

const ModalCabecalho = ({ children, aoFechar }: ModalCabecalhoProps) => {
  return (
    <>
    {children}
    <Botao
    onClick={aoFechar}
    aria-label="fechar modal"
    title="fechar modal"
    style={{ float: "right", fontWeight: "bold" }}
    >
        X
    </Botao>
    </>
  );
}

export default ModalCabecalho;