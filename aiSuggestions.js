export function gerarSugestao(skillName) {
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
