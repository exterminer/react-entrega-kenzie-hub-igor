import { useContext } from "react";
import { TechContext } from "../../providers/techProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTechSchema } from "../../utils/techSchema";
import { StyledModal } from "./styles";

export function ModalEditTech() {
  const bg = {
    overlay: {
      background: "#00000065",
    },
  };
  const {
    modaEditlIsOpen,
    closeEditModal,
    onEditTech,
    techNames,
    onExcludeTech,
  } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(editTechSchema) });

  return (
    <div className="pageContainer">
      <StyledModal
        isOpen={modaEditlIsOpen}
        onRequestClose={closeEditModal}
        style={bg}
      >
        <div className="modalTittle">
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={closeEditModal}>x</button>
        </div>
        <form onSubmit={handleSubmit(onEditTech)} className="styledForm">
          <label htmlFor="title">Nome</label>
          <input type="text" placeholder={techNames} readOnly />

          <label htmlFor="status">Selecionar Status</label>
          <select name="status" id="status" {...register("status")}>
            <option value=""></option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <div className="buttonContainer">
            <button type="submit">Editar</button>
            <button onClick={onExcludeTech}>Excluir</button>
          </div>
        </form>
      </StyledModal>
    </div>
  );
}
