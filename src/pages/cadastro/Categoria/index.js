import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

/*ESTILIZAR O SLIDER E COLOCAR O JOGO NO 404!!*/
function CadastroCategoria (){
    return (
      <PageDefault>
       <h1>Cadastro de Categoria</h1>
       <form>

          <label>

              <input type="text" placeholder="Título:" required/>

          </label>

          <label>

          <input type="text" placeholder="Escolha uma categoria:" required/>

          </label>

          <label>
            
            <input type="text"placeholder="Cor:"/>

          </label>

          <label>

            
          <input type="text" placeholder="Descrição:"/>

          </label>

            <button>
              Cadastrar
            </button>

       </form>


        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
  
    )
  }

  export default CadastroCategoria;