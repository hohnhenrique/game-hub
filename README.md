# arcade.terminal — game-hub

Página de portfólio para os meus jogos em **JavaScript puro**, sem frameworks. Tema visual de terminal/CRT retrô, com uma sequência de boot animada antes de revelar o conteúdo.

## Jogos

| Jogo | Descrição | Link |
|---|---|---|
| 🎯 **Campo Minado** | Revelar todas as células sem detonar nenhuma mina. Primeiro clique sempre seguro, revelação em cascata, 3 dificuldades e estatísticas salvas no navegador. | *a definir* |
| 🧠 **Jogo da Memória** | Encontre todos os pares no menor tempo possível. Ranking por dificuldade salvo no navegador. | *a definir* |
| 🐍 **Snake** | Guie a cobra para comer os alvos e crescer, sem colidir com as paredes ou com o próprio corpo. 3 velocidades, controle por teclado/toque/gesto e recorde salvo no navegador. | [snake-game](https://github.com/hohnhenrique/snake-game) |

## Funcionalidades da página

- Sequência de boot animada (pode ser pulada com qualquer tecla ou clique)
- Grid de cards responsivo, com preview em imagem, descrição, lista de recursos e badges de tecnologia
- Tema CRT: scanlines, vinheta e paleta fósforo verde/âmbar
- Totalmente estático — sem build, sem backend

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, grid layout)
- JavaScript (ES6+, sem bibliotecas)

## Como rodar localmente

Não há etapa de build. Basta abrir o `index.html` no navegador, ou rodar um servidor local simples:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Depois acesse `http://localhost:8000`.

## Estrutura do projeto

```
game-hub/
├── index.html          # estrutura da página e cards dos jogos
├── style.css            # tema visual (CRT / terminal)
├── script.js             # sequência de boot e links dos jogos
├── images/
│   ├── image_mines.png    # preview do Campo Minado
│   ├── image_memory.png   # preview do Jogo da Memória
│   └── image_snake.png    # preview do Snake
└── README.md
```

## Como adicionar um novo jogo

1. Adicione uma imagem de preview em `images/`.
2. Copie um dos blocos `<a class="card" ...>` dentro de `index.html` e ajuste título, descrição, lista de recursos e `id`.
3. Em `script.js`, adicione uma entrada em `GAME_LINKS` com o `id` do card e a URL do jogo (pode ser um link externo, como um repositório separado, ou um link relativo se o jogo estiver embutido neste mesmo projeto).
4. Opcional: atualize o badge de contagem de jogos no cabeçalho e a sequência de boot para mencionar o novo módulo.

## Licença

Livre para uso e modificação.
