# AppOficina

## Parte 1


### Passo 0: 
- **Explicar rotas e estrtura das paginas**
- **Adicionar Imagem que sera usada**

### Passo 1: Mudar layout do tabs

- **(tabs)/_layout.tsx**
- **Mudar estilo do menu para o desejado**
Mudar o Colors para adicionar o Therion, e mudar os icones e cores do menu 

### Passo 2: Criando pagina de Inserir Tarefas

- **(tabs)/index.tsx**
- **Criar pagina de adicionar tarefa**
Renomear a index.tsx para adicionarTarefa.tsx, seguir o passo a passo para criar pagina e estilizar, Explicar sobre o UseState para armazenar dados inseridos

### Passo 3: Criando pagina de Inserir Tarefas

- **(tabs)/lista.tsx**
- **Criar pagina da lista**
Renomear o segundo arquivo do (tabs) em lista.tsx e seguir o passo a passo para criar a pagina com tarefas estaticas


## Parte 2


### Passo 0: 
- **Criar conta no Firebase**
- **Criar env com chaves do firebase**
No firabase criar projeto e adicionar o firebase ao aplicativo com Web ai vai aparecer as chaves e o npm nescessario
criar arquivo env.ts na pasta raiz do projeto (aplicativo) e adicionar ele no .gitignore
criar arquivo firebase.ts na pasta raiz e colocar as informaçoes do env 

install nescessarios: 
npm i firabase
npx expo install @react-native-async-storage/async-storage

### Passo 1: Criar pasta rota (login)

- **Criar (login)/login.tsx e (login)/registro**
- **Fazer paginas simples com estilo parecido com outras**
Criar paginas simples para login e registro

### Passo 2: Mudando app/_layout.tsx

- **app/_layout.tsx**
- **fazer mudanças nas propriedades das rotas**
Mudar secção Stack

### Passo 3: Adicionando firebase nos handleLogin e handleRegistro

- **(login)/login.tsx e (login)/registro**
- **Colocar firebase para registrar e verificar login**
Seguir passo a passo simples mudando os handles

### Passo 4: Adicionando firebase para salvar tarefas

- **(tabs)**
- **Colocar fireStorage para salvar e mostrar listas**
Seguir passo a passo simples para salvar tarefas inseridas e exibir elas na lista, conforma for marcada como concluida ou removida na lista deve ser alterado no fireStorage

