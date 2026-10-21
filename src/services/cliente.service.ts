import { Pool } from "pg";
import type {clientes, CadastrarCliente} from "../types/cliente.js";


export class ClienteService {
  async getAll(): Promise<clientes[]> {
    const res = await pool.query<clientes>("SELECT * FROM camas ");
    return res.rows;
  }
async getById(): Promise <clientes | undefined> =>{
    const res = await pool.query <clientes>
    ("SELECT * FROM clientes WHERE id =$1");
    return res.rows;
}

async create(dados:CadastrarCliente): Promise<clientes>=>{
    const res = await pool.query<clientes>(
        "INSERT INTO clientes RETURNING *", [dados.nome,dados.telefone,dados.dt_nascimento,dados.email] )
        return res.rows[0]
}

async update(dados:CadastrarCliente): Promise <clientes>=>{
    const res = await pool.query <clientes>
    ("UPDATE clientes SET nome,telefone,dt_nascimento,email WHERE id = $1 RETURNING *", [dados.nome,dados.telefone,dados.dt_nascimento,dados.email])
}

}
