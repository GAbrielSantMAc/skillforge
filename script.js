let skills = [];

function addSkill() {
  const skillInput = document.getElementById("skillInput");
  const skillName = skillInput.value.trim();
  if (!skillName) return;

  const skill = {
    id: Date.now(),
    name: skillName
  };

  skills.push(skill);
  updateSkillList();
  skillInput.value = "";
}

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

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.name;
    li.onclick = () => showAISuggestions(skill.name);
    skillList.appendChild(li);
  });
}

function showAISuggestions(skillName) {
  const aiOutput = document.getElementById("aiOutput");

  // Simulação de respostas de IA
  const suggestions = {
    "JavaScript": "Pratique funções, objetos e DOM manipulation.",
    "Python": "Foque em listas, dicionários e pequenos projetos.",
    "React": "Aprenda hooks, state management e props.",
    "HTML": "Estude tags semânticas, formulários e layout."
  };

  aiOutput.textContent = suggestions[skillName] || "Explore tutoriais e pratique projetos!";
}
let skills = JSON.parse(localStorage.getItem("skills")) || [];
updateSkillList();
function addSkill() {
  skills.push(skill);
  localStorage.setItem("skills", JSON.stringify(skills)); // SALVA
  updateSkillList();
  skillInput.value = "";
}
function gerarSugestao(skillName) {
  const nome = skillName.toLowerCase();

  if (nome.includes("javascript")) {
    return "Pratique funções, objetos e manipulação do DOM.";
  }
  if (nome.includes("python")) {
    return "Foque em listas, dicionários e pequenos projetos.";
  }
  if (nome.includes("react")) {
    return "Aprenda hooks, gerenciamento de estado e props.";
  }
  if (nome.includes("html")) {
    return "Estude tags semânticas, formulários e layout.";
  }
  if (nome.includes("css")) {
    return "Aprofunde em flexbox, grid e animações.";
  }
  return `Explore conteúdos e pratique bastante ${skillName}!`;
}
function showAISuggestions(skillName) {
  const aiOutput = document.getElementById("aiOutput");
  const sugestao = gerarSugestao(skillName);
  aiOutput.textContent = sugestao;
}
