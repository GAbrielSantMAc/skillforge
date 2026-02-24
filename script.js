// Carrega habilidades do localStorage ou inicializa vazio
let skills = JSON.parse(localStorage.getItem("skills")) || [];

// Atualiza a lista na tela
function updateSkillList() {
  const skillList = document.getElementById("skillList");
  skillList.innerHTML = "";

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.name;
    li.style.cursor = "pointer";
    li.onclick = () => showAISuggestions(skill.name);
    skillList.appendChild(li);
  });
}

// Adiciona nova habilidade
function addSkill() {
  const skillInput = document.getElementById("skillInput");
  const skillName = skillInput.value.trim();
  if (!skillName) return;

  const skill = {
    id: Date.now(),
    name: skillName
  };

  skills.push(skill);

  // Salva no localStorage
  localStorage.setItem("skills", JSON.stringify(skills));

  updateSkillList();
  skillInput.value = "";
}

// Gera sugestão dinâmica para qualquer habilidade
function gerarSugestao(skillName) {
  const nome = skillName.toLowerCase();

  if (nome.includes("javascript")) return "Pratique funções, objetos e manipulação do DOM.";
  if (nome.includes("python")) return "Foque em listas, dicionários e pequenos projetos.";
  if (nome.includes("react")) return "Aprenda hooks, gerenciamento de estado e props.";
  if (nome.includes("html")) return "Estude tags semânticas, formulários e layout.";
  if (nome.includes("css")) return "Aprofunde em flexbox, grid e animações.";

  // Sugestão genérica para qualquer outra habilidade
  return `Explore conteúdos e pratique bastante ${skillName}!`;
}

// Mostra sugestão no HTML
function showAISuggestions(skillName) {
  const aiOutput = document.getElementById("aiOutput");
  const sugestao = gerarSugestao(skillName);
  aiOutput.textContent = sugestao;
}

// Inicializa lista ao carregar a página
updateSkillList();
