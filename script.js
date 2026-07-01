/**
 * arcade.terminal — portfólio de jogos
 * Boot sequence animada, depois revela o conteúdo.
 * Links dos jogos configurados aqui em baixo.
 */

(() => {
    "use strict";

    // ─── CONFIGURE OS LINKS DOS JOGOS AQUI ───────────────────────────────────
    const GAME_LINKS = {
        minesweeper: "https://hohnhenrique.github.io/minesweeper",
        memory:      "https://hohnhenrique.github.io/memory-game",
        snake:       "https://hohnhenrique.github.io/snake-game",
    };
    // ─────────────────────────────────────────────────────────────────────────

    // Aplica os links nos cards
    document.getElementById("card-minesweeper").href = GAME_LINKS.minesweeper;
    document.getElementById("card-memory").href      = GAME_LINKS.memory;
    document.getElementById("card-snake").href       = GAME_LINKS.snake;

    // ─── BOOT SEQUENCE ───────────────────────────────────────────────────────

    const bootEl   = document.getElementById("boot");
    const linesEl  = document.getElementById("boot-lines");
    const siteEl   = document.getElementById("site");

    const BOOT_LINES = [
        { text: "arcade.terminal OS v1.0.0",             cls: "is-bright", delay: 0    },
        { text: "inicializando subsistemas...",           cls: "",          delay: 300  },
        { text: "✓ motor de renderização  [OK]",          cls: "",          delay: 550  },
        { text: "✓ módulo de entrada      [OK]",          cls: "",          delay: 750  },
        { text: "✓ gerador de mapas       [OK]",          cls: "",          delay: 950  },
        { text: "✓ sistema de ranking     [OK]",          cls: "",          delay: 1150 },
        { text: "detectando módulos de jogo...",          cls: "",          delay: 1400 },
        { text: "  › campo-minado.js      carregado",    cls: "is-amber",  delay: 1650 },
        { text: "  › memory-game.js       carregado",    cls: "is-amber",  delay: 1850 },
        { text: "  › snake.js             carregado",    cls: "is-amber",  delay: 2050 },
        { text: "3 módulo(s) prontos.",                   cls: "is-bright", delay: 2300 },
        { text: "iniciando interface...",                  cls: "",          delay: 2550 },
    ];

    const TOTAL_BOOT_DURATION = 3050; // ms até revelar o site

    // renderiza cada linha no tempo certo
    BOOT_LINES.forEach(({ text, cls, delay }) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.className = `line ${cls}`;
            span.textContent = text;
            linesEl.appendChild(span);
            // pequena pausa antes de tornar visível (efeito de "aparecimento")
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { span.classList.add("is-visible"); });
            });
        }, delay);
    });

    // ao final do boot: esconde a tela de boot e mostra o site
    setTimeout(() => {
        bootEl.style.transition = "opacity .4s ease";
        bootEl.style.opacity    = "0";

        setTimeout(() => {
            bootEl.remove();
            siteEl.hidden = false;
        }, 420);
    }, TOTAL_BOOT_DURATION);

    // ─── ACESSIBILIDADE: pula boot com qualquer tecla/clique ─────────────────
    function skipBoot() {
        clearTimeout(skipBoot._t);
        bootEl.remove();
        siteEl.hidden = false;
        document.removeEventListener("keydown", skipBoot);
        document.removeEventListener("click",   skipBoot);
    }

    // aguarda um instante antes de permitir o skip (evita clique acidental)
    setTimeout(() => {
        document.addEventListener("keydown", skipBoot);
        document.addEventListener("click",   skipBoot);
    }, 400);

})();