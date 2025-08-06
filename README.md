
---

## **README.md**

# Agritech Management API

API RESTful desenvolvida em **Node.js**, **TypeScript**, **Prisma** e **PostgreSQL** para gerenciar empresas, campanhas, técnicos e produtores de uma solução Agritech.

---

## **1. Tecnologias Utilizadas**

* **Node.js** + **Express** – Servidor backend
* **TypeScript** – Tipagem estática
* **PostgreSQL** – Banco de dados relacional
* **Prisma ORM** – Modelagem e acesso ao banco
* **ts-node-dev** – Hot reload em ambiente de desenvolvimento
* **dotenv** – Gerenciamento de variáveis de ambiente
* **Joi** – Validação de dados

---

## **2. Estrutura do Projeto**

```
challenge/
│── prisma/
│   ├── schema.prisma        # Modelo do banco
│   ├── migrations/          # Migrações do Prisma
│
│── src/
│   ├── controllers/         # Controladores (lógica de entrada/saída)
│   ├── services/            # Regras de negócio
│   ├── routes/              # Definição das rotas
│   ├── index.ts             # Ponto de entrada do servidor
│
│── .env                     # Variáveis de ambiente
│── package.json
│── tsconfig.json
│── README.md
```

---

## **3. Configuração do Ambiente**

### **3.1. Requisitos**

* **Node.js** (>=18)
* **PostgreSQL** (>=13)
* **npm** ou **yarn**

### **3.2. Clonar o repositório**

```bash
git clone https://github.com/seu-usuario/agritech-backend-challenge.git
cd agritech-backend-challenge
```

### **3.3. Instalar dependências**

```bash
npm install
```

### **3.4. Configurar variáveis de ambiente**

Crie o arquivo **.env**:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/agritech"
PORT=4000
```

### **3.5. Criar as tabelas**

```bash
npx prisma migrate dev --name init
```

---

## **4. Rodando o Projeto**

### **4.1. Ambiente de desenvolvimento**

```bash
npm run dev
```

### **4.2. Build e produção**

```bash
npm run build
npm start
```

---

## **5. Endpoints da API**

### **5.1. Cadastro de Empresas**

**POST** `/api/empresas`
**Body**:

```json
{
  "nome": "AgroTech Ltda",
  "cnpj": "12345678901234",
  "telefone": "99999-9999",
  "email": "contato@agrotech.com"
}
```

**Resposta**:

```json
{
  "id": 1,
  "nome": "AgroTech Ltda",
  "cnpj": "12345678901234",
  "telefone": "99999-9999",
  "email": "contato@agrotech.com"
}
```

---

### **5.2. Cadastro de Campanhas**

**POST** `/api/campanhas`
**Body**:

```json
{
  "nome": "Safra 2025",
  "empresaId": 1,
  "dataInicio": "2025-01-01",
  "dataFim": "2025-12-31"
}
```

---

### **5.3. Cadastro de Técnicos**

**POST** `/api/tecnicos`
**Body**:

```json
{
  "nome": "João Silva",
  "campanhaId": 1
}
```

---

### **5.4. Cadastro de Produtores**

**POST** `/api/produtores`
**Body**:

```json
{
  "nome": "Carlos Souza",
  "localizacao": "Fazenda Santa Maria"
}
```

---

### **5.5. Atribuição de Produtor a Técnico**

**POST** `/api/produtores/atribuir`
**Body**:

```json
{
  "produtorId": 1,
  "tecnicoId": 1,
  "campanhaId": 1
}
```

---

### **5.6. Transferência de Produtor**

**PUT** `/api/produtores/transferir`
**Body**:

```json
{
  "produtorId": 1,
  "tecnicoAntigoId": 1,
  "tecnicoNovoId": 2,
  "campanhaId": 1
}
```

---

### **5.7. Listar Produtores por Técnico**

**GET** `/api/tecnicos/:id/produtores`
**Resposta**:

```json
[
  {
    "id": 1,
    "nome": "Carlos Souza",
    "localizacao": "Fazenda Santa Maria"
  }
]
```

---

## **6. Scripts Disponíveis**

* `npm run dev` → Rodar em desenvolvimento
* `npm run build` → Compilar TypeScript
* `npm start` → Rodar versão compilada
* `npm run prisma:migrate` → Aplicar migrações
* `npm run prisma:generate` → Gerar client do Prisma

---

## **7. Estrutura dos Controllers**

* `empresa.controller.ts` → CRUD de empresas
* `campanha.controller.ts` → Cadastro e listagem de campanhas
* `tecnico.controller.ts` → Cadastro de técnicos e listagem de produtores
* `produtor.controller.ts` → Cadastro, atribuição e transferência de produtores

Cada controller chama um **service** responsável pela lógica de negócio.

---

## **8. Banco de Dados**

* PostgreSQL é usado como banco relacional.
* Modelagem via Prisma com as seguintes entidades:

  * **Empresa** (id, nome, cnpj, telefone, email)
  * **Campanha** (id, nome, empresaId, dataInicio, dataFim)
  * **Tecnico** (id, nome, campanhaId)
  * **Produtor** (id, nome, localizacao)
  * **ProdutorCampanha** (relacionamento entre produtores, técnicos e campanhas)

---

## **9. Testando com Postman**

* Crie uma **Collection** no Postman.
* Configure a URL base: `http://localhost:4000/api`
* Teste os endpoints na ordem:

  1. Criar empresa
  2. Criar campanha
  3. Criar técnico
  4. Criar produtor
  5. Atribuir produtor a técnico
  6. Transferir produtor
  7. Listar produtores por técnico

---


---


