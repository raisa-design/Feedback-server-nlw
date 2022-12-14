import express from 'express'
import cors from 'cors'
import { routes } from './routes';



const app= express();


/*GET= Buscar inforações
POST= buscarinformações
put =Atualizar informações de uma entidade
PATCH = Atualizar uma informação única de uma entidade.
Delete = Deletar uma informação
*/
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333,() => {
    console.log('HTTP server running!');
})