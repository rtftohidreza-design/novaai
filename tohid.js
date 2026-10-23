const tools = [

  // IMAGE
  {
    name: "AI Image Generator",
    category: "image",
    icon: "✦",
    desc: "Create stunning images from simple text prompts."
  },
  {
    name: "AI Poster Maker",
    category: "image",
    icon: "▣",
    desc: "Generate professional posters for any occasion."
  },
  {
    name: "AI Logo Maker",
    category: "image",
    icon: "◈",
    desc: "Create unique logos for your brand."
  },
  {
    name: "AI Thumbnail Maker",
    category: "image",
    icon: "▤",
    desc: "Make attention-grabbing YouTube thumbnails."
  },
  {
    name: "Background Remover",
    category: "image",
    icon: "◌",
    desc: "Remove image backgrounds automatically."
  },
  {
    name: "AI Image Enhancer",
    category: "image",
    icon: "✧",
    desc: "Improve image quality with AI."
  },
  {
    name: "AI Image Upscaler",
    category: "image",
    icon: "⤢",
    desc: "Upscale low-resolution images."
  },
  {
    name: "AI Avatar Maker",
    category: "image",
    icon: "●",
    desc: "Create creative AI avatars."
  },
  {
    name: "AI Profile Picture",
    category: "image",
    icon: "◎",
    desc: "Generate professional profile pictures."
  },
  {
    name: "AI Background Generator",
    category: "image",
    icon: "▧",
    desc: "Generate beautiful backgrounds."
  },

  // WRITING
  {
    name: "AI Writer",
    category: "writing",
    icon: "✎",
    desc: "Write articles, posts and creative content."
  },
  {
    name: "Blog Generator",
    category: "writing",
    icon: "▤",
    desc: "Generate complete blog posts quickly."
  },
  {
    name: "Caption Generator",
    category: "writing",
    icon: "❝",
    desc: "Create engaging social media captions."
  },
  {
    name: "Ad Copy Generator",
    category: "writing",
    icon: "⚡",
    desc: "Write high-converting advertising copy."
  },
  {
    name: "Product Description",
    category: "writing",
    icon: "▣",
    desc: "Generate compelling product descriptions."
  },
  {
    name: "Email Writer",
    category: "writing",
    icon: "✉",
    desc: "Write professional emails in seconds."
  },
  {
    name: "Resume Builder",
    category: "writing",
    icon: "▥",
    desc: "Create professional resumes with AI."
  },
  {
    name: "Text Summarizer",
    category: "writing",
    icon: "≡",
    desc: "Summarize long text instantly."
  },
  {
    name: "Translator",
    category: "writing",
    icon: "文",
    desc: "Translate your content into different languages."
  },

  // BUSINESS
  {
    name: "Business Name Generator",
    category: "business",
    icon: "◆",
    desc: "Find creative names for your business."
  },
  {
    name: "Brand Name Generator",
    category: "business",
    icon: "◇",
    desc: "Generate memorable brand names."
  },
  {
    name: "Slogan Generator",
    category: "business",
    icon: "✦",
    desc: "Create powerful brand slogans."
  },
  {
    name: "Business Plan",
    category: "business",
    icon: "▦",
    desc: "Build a structured business plan."
  },
  {
    name: "Marketing Plan",
    category: "business",
    icon: "↗",
    desc: "Create an AI-powered marketing strategy."
  },
  {
    name: "Invoice Maker",
    category: "business",
    icon: "▤",
    desc: "Create clean professional invoices."
  },
  {
    name: "QR Code Generator",
    category: "business",
    icon: "▦",
    desc: "Generate QR codes for your business."
  },

  // VIDEO
  {
    name: "AI Video Generator",
    category: "video",
    icon: "▶",
    desc: "Turn your ideas into engaging videos."
  },
  {
    name: "YouTube Script",
    category: "video",
    icon: "▰",
    desc: "Generate scripts for YouTube videos."
  },
  {
    name: "Reels Script",
    category: "video",
    icon: "◉",
    desc: "Create viral short-video scripts."
  },
  {
    name: "Subtitle Generator",
    category: "video",
    icon: "CC",
    desc: "Generate subtitles automatically."
  },
  {
    name: "Voice Over",
    category: "video",
    icon: "◖",
    desc: "Create AI voice-over content."
  },
  {
    name: "Video Storyboard",
    category: "video",
    icon: "▥",
    desc: "Plan your video scene by scene."
  }
];


const grid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");


function renderTools(list) {

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        padding:50px;
        text-align:center;
        color:#77788f;">
        No tools found.
      </div>
    `;
    return;
  }

  list.forEach(tool => {

    const card = document.createElement("div");

    card.className = "tool-card";

    card.innerHTML = `
      <div class="tool-icon">${tool.icon}</div>

      <h3>${tool.name}</h3>

      <p>${tool.desc}</p>

      <button onclick="openTool('${tool.name}')">
        Open Tool →
      </button>
    `;

    grid.appendChild(card);
  });
}


renderTools(tools);


/* FILTER */

filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const category = button.dataset.category;

    if (category === "all") {
      renderTools(tools);
    } else {
      renderTools(
        tools.filter(tool =>
          tool.category === category
        )
      );
    }
  });

});


/* SEARCH */

searchInput.addEventListener("input", () => {

  const query =
    searchInput.value.toLowerCase().trim();

  renderTools(
    tools.filter(tool =>
      tool.name.toLowerCase().includes(query) ||
      tool.desc.toLowerCase().includes(query)
    )
  );
});


/* MODAL */

const modal = document.getElementById("toolModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription =
  document.getElementById("modalDescription");

function openTool(name) {

  const tool =
    tools.find(t => t.name === name);

  modalTitle.textContent = name;

  modalDescription.textContent =
    tool
      ? tool.desc
      : "Turn your ideas into amazing creations.";

  document.getElementById("modalIcon").textContent =
    tool ? tool.icon : "✦";

  document.getElementById("prompt").value = "";

  document.getElementById("result").innerHTML = `
    <div class="result-icon">✦</div>
    <b>Your creation will appear here</b>
    <p>Enter a prompt and click Generate.</p>
  `;

  modal.classList.add("show");

  document.body.style.overflow = "hidden";
}


function closeTool() {

  modal.classList.remove("show");

  document.body.style.overflow = "";
}


modal.addEventListener("click", e => {

  if (e.target === modal) {
    closeTool();
  }

});


document.addEventListener("keydown", e => {

  if (e.key === "Escape") {
    closeTool();
  }

});


/* DEMO GENERATION */

function generateDemo() {

  const prompt =
    document.getElementById("prompt").value.trim();

  const result =
    document.getElementById("result");

  if (!prompt) {

    result.innerHTML = `
      <div class="result-icon">⚠</div>
      <b>Please enter a prompt</b>
      <p>Describe what you want AI to create.</p>
    `;

    return;
  }

  result.innerHTML = `
    <div class="result-icon">◌</div>
    <b>AI is creating...</b>
    <p>Processing your idea.</p>
  `;

  setTimeout(() => {

    result.innerHTML = `
      <div class="result-icon">✦</div>
      <b>Ready for AI generation</b>
      <p>
        Your prompt:
        "${escapeHTML(prompt)}"
      </p>
      <small style="
        display:block;
        color:#8c8da6;
        margin-top:10px;">
        Connect your backend/API here for real AI generation.
      </small>
    `;

  }, 1200);
}


function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* SCROLL */

function scrollToTools() {

  document
    .getElementById("tools")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* CTRL + K SEARCH */

document.addEventListener("keydown", e => {

  if ((e.ctrlKey || e.metaKey) && e.key === "k") {

    e.preventDefault();

    searchInput.focus();
  }

});
