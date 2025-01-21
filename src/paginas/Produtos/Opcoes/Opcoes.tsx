import BotaoRadio from "@/componentes/BotaoRadio/BotaoRadio";
import BotaoRadioGrupo from "@/componentes/BotaoRadio/BotaoRadioGrupo";
import { ChangeEvent, useState } from "react";

const opcoes = [
  { id: "cor-branca", value: "branco", label: "Branco" },
  { id: "cor-prata", value: "prata", label: "Prata" },
  { id: "cor-cinza", value: "cinza-chumbo", label: "Cinza chumbo" },
];

const Opcoes = () => {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const aoSelecionaOpcao = (e: ChangeEvent) => {
    setOpcaoSelecionada(e.target.id);
  }

  return (
    <div className="pagina__produto--opcoes">
      <BotaoRadioGrupo ariaLabel="Grupo de opções de Cor">
          {opcoes.map((opcao) => {
            return (
              <BotaoRadio
              key={opcao.label}
              id={opcao.id}
              nome="escolher-cor"
              valor={opcao.value}
              selecionado={opcaoSelecionada === opcao.id}
              aoMudar={aoSelecionaOpcao}
              textoLegenda={opcao.label}  
              />
            );
          })}
      </BotaoRadioGrupo>
    </div>
  );
};

export default Opcoes;
