import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Cabecalho(props) {
  return (
    <div className="cabeçalho">
      <h1>{props.titulo}</h1>
      <p>{props.texto1}</p>
      <p>{props.texto2}</p>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="apresentacao">
      <Cabecalho 
        titulo="Lista de Presentes"
        texto1="Bem vindos a nossa página!"
        texto2="Aqui você encontrará sugestões de produtos para nos presentear."
      
      />
    </div>
  );
}

function Inicio() {
  return <PageTitle />
}


const itens = [
  {
    nome: "Máquina de Lavar Consul 12Kg CWH12AB - Branca",
    imagem: "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1072441964",
    valor: "R$ 1.748,00",
    link: "https://www.pontofrio.com.br/lavadora-de-roupas-consul-12kg-cwh12ab-com-dosagem-extra-economica-branca/p/14226782",
  },
  {
    nome:"Liquidificador Philco PH900 12 Velocidades 1200W - Preto",
    imagem:"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=149305041",
    valor:"R$ 159,90",
    link:"https://m.pontofrio.com.br/liquidificador-philco-ph900-12-velocidades-1200w-preto-5082530.html?IdSku=5082530",
  },
  {
    nome:"Batedeira Mondial Due Cake Inox NB-04 com 4 Velocidade 400W – Preta",
    imagem:"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=899740089",
    valor:"R$ 109,90",
    link:"https://www.pontofrio.com.br/batedeira-mondial-due-cake-inox-nb-04-com-4-velocidade-400w-preta/p/12639696",
  },
  {
    nome:"Torradeira Toast Due Black Mondial T-05 - Prata",
    imagem:"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=244341587",
    valor:"R$ 109,90",
    link:"https://www.pontofrio.com.br/torradeira-toast-due-black-mondial-t-05-com-6-opcoes-de-tostagem-preta/p/3230335",
  },
  {
    nome:"Cafeteira Elétrica Britânia CP15 15 Xícaras - Preta",
    imagem:"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=243372341",
    valor:"R$ 89,90",
    link:"https://www.pontofrio.com.br/cafeteira-eletrica-britania-cp15-15-xicaras-preta/p/1591124",
  },
  {
    nome:"Mixer Britânia 3 em 1 com Triturador de Alimento e Batedor de Claras - 200W",
    imagem:"https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=887648349",
    valor:"R$ 149,90",
    link:"https://www.pontofrio.com.br/mixer-britania-3-em-1-com-triturador-de-alimento-e-batedor-de-claras-200w/p/411048",
  },
  
];


function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.item.nome}</h2>
      <img src={props.item.imagem} alt="Imagem do produto" width="100" height="100" />
      <br />
      <p>{props.item.valor}</p>
      <a href={props.item.link}>Clique para mais detalhes</a>
    </div>
  );
}


function ListarItens() {
  return (
    <div className="lista_itens">
      {itens.map(item => (
                <CardItem item={item} />
      ))}
    </div>
  );
}


function App() {
  return <ListarItens />;
}

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

