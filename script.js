// 🔐 Coloque sua chave da OpenAI aqui (apenas para teste local)
const OPENAI_API_KEY = "SUA_CHAVE_AQUI";

let skills = JSON.parse(localStorage.getItem("skills")) || [];

function updateSkillList() {
  const skillList = document.getElementById("skillList");
  skillList.innerHTML = "";

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.name;
    li.onclick = () => gerarSugestaoIA(skill.name);
    skillList.appendChild(li);
  });
}

function addSkill() {
  const skillInput = document.getElementById("skillInput");
  const skillName = skillInput.value.trim();

  if (!skillName) {
    alert("Digite uma habilidade antes de adicionar!");
    return;
  }

  skills.push({
    id: Date.now(),
    name: skillName
  });

  localStorage.setItem("skills", JSON.stringify(skills));
  updateSkillList();
  skillInput.value = "";
}

// 🧠 Função que chama IA real
async function gerarSugestaoIA(skillName) {
  const aiOutput = document.getElementById("aiOutput");
  aiOutput.innerHTML = "🤖 Pensando...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Você é um mentor especialista em aprendizado e produtividade."
          },
          {
            role: "user",
            content: `Crie um plano de estudo prático e direto para aprender ${skillName}.`
          }
        ],
        max_tokens: 200
      })
    });

    const data = await response.json();
    const sugestao = data.choices[0].message.content;

    aiOutput.innerHTML = sugestao;

  } catch (error) {
    aiOutput.innerHTML = "Erro ao gerar sugestão. Verifique sua chave API.";
    console.error(error);
  }
}

updateSkillList();
