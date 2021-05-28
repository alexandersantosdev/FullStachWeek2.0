import "antd/dist/antd.css";

import { Table, Button, message, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import InvestimentoService from '../../services/InvestimentoService';

const { Header, Content, Footer } = Layout;
const { Column } = Table;


function ListarInvestimentos() {
  const [investimentos, setInvestimentos] = useState([]);

  const remover = (record) => {
    InvestimentoService.deleteInvestimento(record.codigo).then(r => {
      refreshInvestimentos();
      message.success("Removido");
    });
  };

  const refreshInvestimentos = () =>{
    InvestimentoService.getAllInvestimentos()
    .then(res=>{
      setInvestimentos(res.data)
     
    })
    
  }

  useEffect(()=>{
    refreshInvestimentos();
  },[])

  return (
    <div className="container">
      <Layout className="layout">
        <Header>
          <Link to="/">
            <div className="logo" />
          </Link>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/cadastrar-investimento">Cadastrar investimento</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/listar-investimentos">Listar investimentos</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h2>INVESTIMENTOS</h2>
            <Table dataSource={investimentos}>
              <Column
                title="Código do ativo"
                dataIndex="codigoAtivo"
                key="codigoAtivo"
              />
              <Column title="Valor" dataIndex="valorCota" key="valorCota" />
              <Column
                title="Quantidade de cotas"
                dataIndex="qtdCotas"
                key=""
              />
              <Column
                title="Data da compra"
                dataIndex="data"
                key="data"
              />
              
              <Button
                title="Remover"
                key="atualizar"
                render={(text, record) => (
                  <Button onClick={() => remover(record)} type="primary">
                    Remover
                  </Button>
                )}
              />
            </Table>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>My Invest 2021</Footer>
      </Layout>
    </div>
  );
}

export default ListarInvestimentos;
