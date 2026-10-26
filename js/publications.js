// Publications data — single source of truth for both the Publications
// page (filterable list) and the Research page (per-module paper lists).

const PUBLICATIONS = [
  // ---- Computing Systems & Data Center Sustainability ----
  {
    title: "Rethinking Data Center Sustainability Metrics Through a Life-Cycle Lens",
    venue: "Chen, Z. &mdash; Poster, 2026 Gordon Research Conference (GRC) on Industrial Ecology",
    year: 2026, type: "poster", status: "published", topic: "computing"
  },
  {
    title: "Material efficiency key for decarbonizing global data centers",
    venue: "Chen, Z., Kleijn, R., Cao, Z., Yao, Y., Chen, W., Wei, S., Peng, P. &amp; Lin, H.-X. &mdash; journal name withheld while under review",
    year: null, type: "journal", status: "under-review", topic: "computing"
  },
  {
    title: "Quantifying the carbon footprint of next directions in 3D NAND flash and DRAM fabrication",
    venue: "Grey-Stewart, D., Elgamal, M., Kong, D., Chen, Z., Piao, Z., Yao, Y. &amp; Hills, G. &mdash; 2026 International Conference on Computer-Aided Design (ICCAD)",
    year: 2026, type: "conference", status: "published", topic: "computing"
  },
  {
    title: "Quantifying Trade-Offs in Power, Performance, Area, and Total Carbon Footprint (PPAtC) of Next Directions in FET Technologies for VLSI Digital Logic Circuits",
    venue: "Kong, D.*, Grey-Stewart, D.*, Elgamal, M., Chen, Z., Piao, Z., Morris, J., Yao, Y. &amp; Hills, G. &mdash; 72nd International Electron Devices Meeting (IEDM). *Equal contribution.",
    year: 2026, type: "conference", status: "published", topic: "computing"
  },

  // ---- Renewable Energy: Material Demand & Environmental Impacts ----
  {
    title: "Metal requirements for building electrical grid systems of global wind power and utility-scale solar photovoltaic until 2050",
    venue: "Chen, Z., Kleijn, R. &amp; Lin, H.-X. &mdash; Environmental Science &amp; Technology 57(2), 1080&ndash;1091",
    year: 2023, type: "journal", status: "published", topic: "renewable",
    link: "https://doi.org/10.1021/acs.est.2c06496"
  },
  {
    title: "Fuel cell and electric vehicles: resource use and associated environmental impacts",
    venue: "Chen, Z., Kleijn, R., Zhang, C. &amp; Lin, H.-X. &mdash; Resources, Conservation &amp; Recycling 226, 108646",
    year: 2026, type: "journal", status: "published", topic: "renewable",
    link: "https://doi.org/10.1016/j.resconrec.2025.108646"
  },
  {
    title: "Integrating resource constraints into green hydrogen scenarios: material demand and mitigation pathways for electrolyzer metals",
    venue: "Chen, Z., Kleijn, R. &amp; Lin, H.-X. &mdash; PhD dissertation chapter, Leiden University",
    year: 2026, type: "working-paper", status: "working-paper", topic: "renewable",
    link: "https://hdl.handle.net/1887/4289526"
  },
  {
    title: "Dynamic material flow analysis of aluminum from automobiles in China during 2000&ndash;2050 for standardized recycling management",
    venue: "Yang, C., Zhang, L., Chen, Z., Gao, Y. &amp; Xu, Z. &mdash; Journal of Cleaner Production 337, 130544",
    year: 2022, type: "journal", status: "published", topic: "renewable",
    link: "https://doi.org/10.1016/j.jclepro.2022.130544"
  },
  {
    title: "Tracking and quantifying the cobalt flows in mainland China during 1994&ndash;2016",
    venue: "Chen, Z., Zhang, L. &amp; Xu, Z. &mdash; Science of The Total Environment 672, 752&ndash;762",
    year: 2019, type: "journal", status: "published", topic: "renewable",
    link: "https://doi.org/10.1016/j.scitotenv.2019.02.411"
  },
  {
    title: "Global supply risk assessment of the metals used in clean energy technologies",
    venue: "Zhang, L., Chen, Z., Yang, C. &amp; Xu, Z. &mdash; Journal of Cleaner Production 331, 129602",
    year: 2022, type: "journal", status: "published", topic: "renewable",
    link: "https://doi.org/10.1016/j.jclepro.2021.129602"
  },

  // ---- E-Waste Recycling & Waste Valorization ----
  {
    title: "Recovery of tantalum from waste tantalum capacitors by supercritical water treatment",
    venue: "Niu, B., Chen, Z. &amp; Xu, Z. &mdash; ACS Sustainable Chemistry &amp; Engineering 5(5), 4421&ndash;4428",
    year: 2017, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1021/acssuschemeng.7b00496"
  },
  {
    title: "Vacuum pyrolysis characteristics and parameter optimization of recycling organic materials from waste tantalum capacitors",
    venue: "Chen, Z., Niu, B., Zhang, L. &amp; Xu, Z. &mdash; Journal of Hazardous Materials 342, 192&ndash;200",
    year: 2018, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1016/j.jhazmat.2017.08.021"
  },
  {
    title: "Analysis of cobalt flows in mainland China: exploring potential opportunities for improving resource efficiency and supply security",
    venue: "Chen, Z., Zhang, L. &amp; Xu, Z. &mdash; Journal of Cleaner Production 275, 122841",
    year: 2020, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1016/j.jclepro.2020.122841"
  },
  {
    title: "Method for recycling tantalum from waste tantalum capacitors by chloride metallurgy",
    venue: "Niu, B., Chen, Z. &amp; Xu, Z. &mdash; ACS Sustainable Chemistry &amp; Engineering 5(2), 1376&ndash;1381",
    year: 2017, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1021/acssuschemeng.6b01839"
  },
  {
    title: "Application of pyrolysis to recycling organics from waste tantalum capacitors",
    venue: "Niu, B., Chen, Z. &amp; Xu, Z. &mdash; Journal of Hazardous Materials 335, 39&ndash;46",
    year: 2017, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1016/j.jhazmat.2017.04.024"
  },
  {
    title: "An integrated and environmental-friendly technology for recovering valuable materials from waste tantalum capacitors",
    venue: "Niu, B., Chen, Z. &amp; Xu, Z. &mdash; Journal of Cleaner Production 166, 512&ndash;518",
    year: 2017, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1016/j.jclepro.2017.08.043"
  },
  {
    title: "Recovery of valuable materials from waste tantalum capacitors by vacuum pyrolysis combined with mechanical&ndash;physical separation",
    venue: "Niu, B., Chen, Z. &amp; Xu, Z. &mdash; ACS Sustainable Chemistry &amp; Engineering 5(3), 2639&ndash;2647",
    year: 2017, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1021/acssuschemeng.6b02988"
  },
  {
    title: "Recycling waste tantalum capacitors to synthesize high value-added Ta2O5 and polyaniline-decorated Ta2O5 photocatalyst",
    venue: "Niu, B., Chen, Z. &amp; Xu, Z. &mdash; Journal of Cleaner Production 252, 117206",
    year: 2020, type: "journal", status: "published", topic: "ewaste",
    link: "https://doi.org/10.1016/j.jclepro.2019.06.037"
  },
  {
    title: "Supply chain and environmental implications of waste-to-graphite",
    venue: "Zhang, B., Chen, Z., Wang, H., Xu, Y., Piao, Z., Klee, R., Reck, B. K., Li, T., Park, S., Hu, L. &amp; Yao, Y. &mdash; Nature Reviews Clean Technology",
    year: 2026, type: "journal", status: "published", topic: "ewaste",
    link: "https://www.nature.com/articles/s44359-026-00219-5"
  },
  {
    title: "Process for synthesizing tantalum oxynitride (TaON) photocatalysts from spent tantalum capacitors",
    venue: "Xu, Z., Niu, B. &amp; Chen, Z. &mdash; Patent CN106276827B, Shanghai Jiao Tong University",
    year: 2018, type: "patent", status: "granted", topic: "ewaste",
    link: "https://patents.google.com/patent/CN106276827B"
  },
  {
    title: "Method and technical process for producing ultrafine Ta₂O₅ from spent tantalum capacitors",
    venue: "Xu, Z., Niu, B. &amp; Chen, Z. &mdash; Patent CN106186066B, Shanghai Jiao Tong University",
    year: 2018, type: "patent", status: "granted", topic: "ewaste",
    link: "https://patents.google.com/patent/CN106186066B"
  }
];

const TOPIC_LABELS = {
  computing: "Computing Systems & Data Center Sustainability",
  renewable: "Renewable Energy: Material Demand & Environmental Impacts",
  ewaste: "E-Waste Recycling & Waste Valorization"
};

const TYPE_LABELS = {
  journal: "Journal", conference: "Conference", poster: "Poster",
  patent: "Patent", "working-paper": "Working Paper"
};

const STATUS_LABELS = {
  published: "Published", "under-review": "Under review",
  granted: "Granted", "working-paper": "Working paper"
};

// ---------- Publications page (filterable list) ----------

let activeTopic = "all";
let activeType = "all";

function renderFilters() {
  const topicGroup = document.getElementById("topic-filters");
  const typeGroup = document.getElementById("type-filters");
  if (!topicGroup || !typeGroup) return;

  const topics = ["all", ...Object.keys(TOPIC_LABELS)];
  topicGroup.innerHTML = topics.map(t =>
    `<button class="filter-btn${t === activeTopic ? ' active' : ''}" data-topic="${t}">${t === 'all' ? 'All topics' : TOPIC_LABELS[t]}</button>`
  ).join("");

  const types = ["all", ...Object.keys(TYPE_LABELS)];
  typeGroup.innerHTML = types.map(t =>
    `<button class="filter-btn${t === activeType ? ' active' : ''}" data-type="${t}">${t === 'all' ? 'All types' : TYPE_LABELS[t]}</button>`
  ).join("");

  topicGroup.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTopic = btn.dataset.topic;
      renderFilters();
      renderList();
    });
  });
  typeGroup.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeType = btn.dataset.type;
      renderFilters();
      renderList();
    });
  });
}

function renderList() {
  const list = document.getElementById("pub-list");
  if (!list) return;
  const filtered = PUBLICATIONS.filter(p =>
    (activeTopic === "all" || p.topic === activeTopic) &&
    (activeType === "all" || p.type === activeType)
  );

  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty-state">No publications match this filter.</div>`;
    return;
  }

  list.innerHTML = filtered.map(p => `
    <div class="pub-item">
      <div class="year">${p.year || '&mdash;'}</div>
      <div>
        <p class="title">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</p>
        <p class="venue">${p.venue}</p>
        <div class="meta">
          <span class="badge type">${TYPE_LABELS[p.type]}</span>
          <span class="badge status-${p.status.replace('-', '')}">${STATUS_LABELS[p.status]}</span>
          <span class="badge type">${TOPIC_LABELS[p.topic].split(':')[0]}</span>
        </div>
      </div>
    </div>
  `).join("");
}

// ---------- Research page (per-module full paper list) ----------

function renderResearchModules() {
  document.querySelectorAll("[data-paper-topic]").forEach(container => {
    const topic = container.dataset.paperTopic;
    const papers = PUBLICATIONS.filter(p => p.topic === topic);
    container.innerHTML = papers.map(p => `
      <li>
        <p class="paper-title">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</p>
        <p class="paper-venue">${p.venue}<span class="status">${p.year ? ' &middot; ' + p.year : ''} &middot; ${STATUS_LABELS[p.status]}</span></p>
      </li>
    `).join("");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderList();
  renderResearchModules();
});
