#  Portfólio - Handrey Gama

🔗 **Acesse o projeto online:**  
👉 https://handreygamaportifolio.vercel.app/

---

##  Sobre o projeto

Este é meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos, formações e tecnologias que utilizo no dia a dia como desenvolvedor.

O objetivo do projeto é criar uma experiência interativa e moderna, mostrando não apenas informações estáticas, mas também animações, interações dinâmicas e integração com APIs externas (como o GitHub).

---

##  Features

-  Interface moderna com tema dark
-  Navegação com scroll spy (indicador de seção ativa)
-  Carrossel de projetos dinâmico
- Animações suaves com AOS (Animate On Scroll)
-  Efeito de digitação com Typed.js
-  Efeito de texto criptografado com Baffle.js
-  Fundo interativo com tsParticles
- 🖱 Cursor customizado animado
-  Integração com API do GitHub (lista automática de repositórios)
-  Layout responsivo

---

##  Stack utilizada

### Frontend
- HTML5
- CSS3
- JavaScript (ES Modules)
- Bootstrap 5.3

### Bibliotecas e ferramentas
-  [Bootstrap](https://getbootstrap.com/) — estilização e componentes responsivos
-  [AOS](https://michalsnik.github.io/aos/) — animações ao rolar a página
-  [Typed.js](https://github.com/mattboldt/typed.js/) — efeito de texto digitado
-  [Baffle.js](https://camwiegert.github.io/baffle/) — efeito de texto embaralhado
-  [tsParticles](https://particles.js.org/) — fundo animado com partículas
-  Font Awesome — ícones
-  Devicon — ícones de tecnologias

### Backend (simples)
- Node.js
- Express.js
- GitHub REST API

---


---

##  Integração com GitHub API

O projeto consome a API do GitHub para buscar automaticamente meus repositórios públicos:

- Filtra repositórios privados
- Remove projetos sem descrição
- Ordena por data de criação
- Renderiza dinamicamente os cards na interface

---

##  Funcionalidades principais do sistema

###  Renderização dinâmica de projetos
Os projetos são carregados diretamente da API do GitHub e inseridos no DOM via JavaScript.

###  Carrossel interativo
Os cards de projetos possuem navegação lateral com botões e centralização automática.

###  Scroll Spy
Um sistema de detecção de seção ativa baseado em `IntersectionObserver`.

###  Animações inteligentes
Elementos aparecem conforme o usuário navega pela página.

---

##  Demonstração


---

## 🛠 Como rodar localmente

```bash
# clonar o projeto
git clone https://github.com/HandreyGama/Portifolio.git

# entrar na pasta
cd seu-repo

# instalar dependências
npm install

# rodar servidor
node app.js