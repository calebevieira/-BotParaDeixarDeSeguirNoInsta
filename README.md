# bot para deixar de seguir pessoas no instagram (Playwright)

Automação simples e segura para deixar de seguir perfis no Instagram usando **Node.js + Playwright**.

> ⚠️ Projeto educacional para aprendizado de automação de processos.

---

##  Sobre o projeto

Esse script automatiza uma tarefa repetitiva do Instagram: deixar de seguir contas manualmente.

A ideia foi aplicar automação na prática e demonstrar como é possível resolver problemas reais com código, mesmo com conhecimentos básicos.

---

##  Funcionalidades

-  Login manual (mais seguro)
-  Automação de unfollow
-  Pausas aleatórias (comportamento humano)
-  Delay estratégico para evitar bloqueios
-  Scroll automático da lista
-  Suporte para PT-BR e EN

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Playwright

---

##  Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/insta-unfollow.git
cd insta-unfollow
```

Instale as dependências:

```bash
npm install
```

Instale o navegador do Playwright:

```bash
npx playwright install chromium
```

---

##  Como usar

Execute o script:

```bash
npm start
```

### Passos:

1. O navegador será aberto automaticamente
2. Faça login manual no Instagram, vá no perfil e clique em seguindo
3. Após logar, volte ao terminal e pressione **ENTER**
4. O bot começará a deixar de seguir automaticamente

---

##  Configuração

No arquivo `unfollow.js`, você pode ajustar:

```javascript
const maxUnfollows = 50;
```

Recomendado:
- 🔹 30–50 por execução (seguro)
- 🔸 Evitar números altos para não ser bloqueado

---

## ⚠️ Aviso importante

- Não utilize em excesso
- Pode haver bloqueios temporários pelo Instagram
- Use por sua conta e risco
- Evite rodar múltiplas vezes seguidas

---


---

##  Aprendizados

Esse projeto mostra como:

- Automatizar tarefas reais
- Trabalhar com browser automation
- Simular comportamento humano
- Criar soluções práticas rapidamente

---

