function voltarHub() {
  document.getElementById("voltarHub");
  location.href = "hub.html";
}

function voltarHubChapas() {
  document.getElementById("voltarHubChapas");
  location.href = "hub_chapas.html";
}

function voltarHubEleitores() {
  document.getElementById("voltarHubEleitores");
  location.href = "hub_eleitor.html";
}

function cadastrar() {
  document.getElementById("cadastrar");
  location.href = "cadastroAdmin.html";
}

function alt_snh() {
  document.getElementById("AlterarSenhas");
  location.href = "alterarsenha.html";
}


function iniciarProcesso() {
  document.getElementById("hub");
  location.href = "id_eleitor.html";
}

function hubSair() {
  document.getElementById("hubSair");
  location.href = "index.html";
}

function Adm() {
  document.getElementById("botao_ADM");
  location.href = "administracao.html";
}


function entrarCadastrarChapas() {
  document.getElementById("cadastrarChapas");
  location.href = "cadastroChapas.html";
}

function entrarGerenciadorChapas() {
  document.getElementById("gerenciador_chapas");
  location.href = "gerenciador_chapas.html";
}

function entrarHubChapas() {
  document.getElementById("HubChapas");
  location.href = "hub_chapas.html";
}

function entrarCadastrarEleitor() {
  document.getElementById("cadastrarEleitor");
  location.href = "cadastro-teste.html";
}

function entrarHubEleitor() {
  document.getElementById("HubEleitor");
  location.href = "hub_eleitor.html";
}


function entrarGerenciadorEleitor() {
  document.getElementById("gerenciador_eleitores");
  location.href = "gerenciador_eleitores.html";
}


function entrarContagem() {
  document.getElementById("entrarContagem");
  location.href = "contagem.html";
}


const switcher = document.getElementById('md_es');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const button = document.getElementById('md_es');

  if (document.body.classList.contains('dark-theme')) {
    switcher.textContent = 'Modo Claro';
    localStorage.setItem('theme', 'dark');
  } else {
    switcher.textContent = 'Modo Escuro';
    localStorage.setItem('theme', 'light');
  }
}

// Aplicar o tema salvo do Local Storage ao carregar a página
// document.addEventListener('DOMContentLoaded', function () {
//   const savedTheme = localStorage.getItem('theme');
//   const button = document.getElementById('md_es');

//   if (savedTheme === 'dark') {
//     document.body.classList.add('dark-theme');
//     button.textContent = 'Modo Claro';
//   } else {
//     button.textContent = 'Modo Escuro';
//   }
// });

// function toggleTheme() {
//   document.body.classList.toggle('dark-theme');
//   document.body.classList.toggle('light-theme');

//   if (document.body.classList.contains('dark-theme')) {
//     switcher.textContent = 'Tema Claro';
//     localStorage.setItem('theme', 'dark');
//   } else {
//     switcher.textContent = 'Tema Escuro';
//     localStorage.setItem('theme', 'light');
//   }
//   console.log('current class name: ' + document.body.className);
// }

// if (switcher) {
//   switcher.addEventListener('click', toggleTheme);
// }

document.addEventListener('DOMContentLoaded', function () {

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (switcher) {
      switcher.textContent = 'Modo Claro';
    }
  } else {
    document.body.classList.remove('dark-theme');
    if (switcher) {
      switcher.textContent = 'Modo Escuro';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const trapContainer = document.getElementById('trap-container');
  const focusableElements = trapContainer.querySelectorAll('input, select, textarea, button');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById("menuItems");
  menu.classList.toggle("menu-opened");
}
document.querySelector('.fa-bars').addEventListener('click', function () {
  document.body.classList.toggle('menu-opened');
});

function openPopup() {
  document.getElementById('helpPopup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('helpPopup').classList.add('hidden');
}

document.getElementById('question').addEventListener('click', openPopup);
