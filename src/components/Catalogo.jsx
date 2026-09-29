import { useState } from 'react';
import { viagens } from '../data/viagens';
import CartaoViagem from './CartaoViagem';

function Catalogo() {
  const [categoria, setCategoria] = useState('Todas');

  const categorias = ['Todas', 'Cidade', 'Natureza', 'Praia'];

  const viagensFiltradas = viagens.filter((viagem) => {
    return categoria === 'Todas' || viagem.tipo === categoria;
  });

  return (
    <section
      className="catalogo"
      id="destinos"
      aria-labelledby="titulo-destinos"
    >
      <div className="topo-secao">
        <div>
          <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>
          <h2 id="titulo-destinos">Destinos para descobrir</h2>
        </div>

        <p className="contagem">
          {viagensFiltradas.length}{' '}
          {viagensFiltradas.length === 1 ? 'viagem' : 'viagens'}
        </p>
      </div>

      <div
        className="barra-filtros"
        role="group"
        aria-label="Filtrar viagens por tipo"
      >
        {categorias.map((tipo) => (
          <button
            key={tipo}
            className={
              categoria === tipo ? 'filtro filtro--ativo' : 'filtro'
            }
            type="button"
            aria-pressed={categoria === tipo}
            onClick={() => setCategoria(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="grelha">
        {viagensFiltradas.map((viagem) => (
          <CartaoViagem key={viagem.id} viagem={viagem} />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;