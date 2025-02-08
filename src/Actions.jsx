import "./Actions.css";

export function Actions() {
  return (
    <div className="acoes">
      <div>
        <select name="select">
          <option value="1">Licitar Digital</option>
          <option value="2">BLL, Compras-BR e VA Sistemas</option>
          <option value="3">BBMNET - Bolsa Brasileira de Mercadorias</option>
          <option value="4">Licitanet</option>
          <option value="5">Banco do Brasil - Licitações-E</option>
        </select>
        <a href="#">
          <p>Enviar</p>
        </a>
        <a href="#">
          <p>Cancelar</p>
        </a>
      </div>
    </div>
  );
}
