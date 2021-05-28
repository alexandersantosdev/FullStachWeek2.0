import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, message, Layout, Menu, Input, DatePicker, Select } from "antd";
import { Link } from "react-router-dom";
import Form from "antd/lib/form";
import { FormInstance } from 'antd/lib/form';
import CategoriaService from "../../services/CategoriaService";
import InvestimentoService from "../../services/InvestimentoService";

const { Option } = Select;
const { Header, Content, Footer } = Layout;

function CadastrarInvestimentos() {
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(null);
  var formRef = React.createRef(FormInstance);

  useEffect(() => {
    refreshCategorias();
  }, []);

  const refreshCategorias = () => {
    CategoriaService.getAllcategorias().then((categ) => {
      setCategorias(categ.data);
    });
  };

  const onChangeCategoria = (codcategoria) => {
    setCategoria(codcategoria);
  };

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 3 },
  };
  const tailLayout = {
    wrapperCol: { offset: 5, span: 10 },
  };

  const onFinish = (values) => {
    InvestimentoService.saveInvestimento(values).then((r) => {
      message.success("Investimento cadastrado com sucesso!");
    });
    onReset();
  };

  const onReset = () => {
    formRef.current.resetFields();
  }

  const onFinishFailed = () => {};

  return (
    <div className="container">
      <Layout className="layout">
        <Header>
          <Link to="/">
            <div className="logo" />
          </Link>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
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
            <h2>CADASTRAR INVESTIMENTO</h2>

            <Form
              ref={formRef}
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              
            >
              <Form.Item
                label="Código do ativo"
                name="codigoAtivo"
                rules={[
                  {
                    required: true,
                    message: "Insira o código do ativo!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Valor"
                name="valorCota"
                rules={[
                  {
                    required: true,
                    message: "Insira o valor da cota!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Quantidade de cotas"
                name="qtdCotas"
                rules={[
                  {
                    required: true,
                    message: "Insira quantidade de cotas!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Data da compra"
                name="data"
                rules={[
                  {
                    required: true,
                    message: "Insira a data da compra!",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item label="Categoria" name="categoria">
                <Select onChange={onChangeCategoria}>
                  {categorias.map((categoria) => {
                    return (
                      <Option key={categoria.id} value={categoria.id}>
                        {categoria.nome}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" >
                  Salvar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>My Invest 2021</Footer>
      </Layout>
    </div>
  );
}

export default CadastrarInvestimentos;
