import './Acordeao.css';
import { ReactNode } from "react";


interface AcordeaoProps {
    children: ReactNode;
}

const Acordeao = ({ children } : AcordeaoProps) => {
  return (
    <div className="acordeao__container">{children}</div>
  );
}

export default Acordeao;