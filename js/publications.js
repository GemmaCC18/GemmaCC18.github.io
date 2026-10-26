// Publications data + client-side filtering (topic tag + type)

const PUBLICATIONS = [
  // ---- Computing Systems & Data Center Sustainability ----
  {
    title: "Rethinking Data Center Sustainability Metrics Through a Life-Cycle Lens",
    venue: "Poster, 2026 Gordon Research Conference (GRC) on Industrial Ecology",
    year: 2026, type: "poster", status: "published", topic: "computing"
  },
  {
    title: "Material efficiency key for decarbonizing global data centers",
    venue: "Journal article (journal name withheld while under review)",
    year: null, type: "journal", status: "under-review", topic: "computing"
  },
  {
    title: "Quantifying the carbon footprint of next directions in 3D NAND flash and DRAM fabrication",
    venue: "Grey-Stewart, Elgamal, Kong, Chen, Piao, Yao, Hills &mdash; ICCAD 2026",
    year: 2026, type: "conference", status: "published", topic: "computing"
  },
  {
    title: "Quantifying trade-offs in power, performance, area, and total carbon footprint (PPAtC) of next directions in FET technologies for VLSI digital logic circuits",
    venue: "Kong, Grey-Stewart, Elgamal, Chen, Piao, Morris, Yao et al. &mdash; IEDM 2026",
    year: 2026, type: "conference", status: "published", topic: "computing"
  },

  // ---- Renewable Energy: Material Demand & Environmental Impacts ----
  {
    title: "Metal requirements for building electrical grid systems of global wind power and utility-scale solar photovoltaic until 2050",
    venue: "Chen, Kleijn &amp; Lin &mdash; Environmental Science &amp; Technology 57, 1080&ndash;1091",
    year: 2023, type: "journal", status: "published", topic: "renewable"
  },
  {
    title: "Fuel cell and electric vehicles: resource use and associated environmental impacts",
    venue: "Chen, Kleijn, Zhang &amp; Lin &mdash; Resources, Conservation &amp; Recycling 226, 108646",
    year: 2026, type: "journal", status: "published", topic: "renewable"
  },
  {
    title: "Integrating resource constraints into green hydrogen scenarios: material demand and mitigation pathways for electrolyzer metals",
    venue: "Chen, Kleijn &amp; Lin &mdash; PhD dissertation chapter",
    year: 2026, type: "working-paper", status: "working-paper", topic: "renewable",
    link: "https://hdl.handle.net/1887/4289526"
  },
  {
    title: "Dynamic material flow analysis of aluminum from automobiles in China during 2000&ndash;2050 for standardized recycling management",
    venue: "Yang, Zhang, Chen, Gao &amp; Xu &mdash; Journal of Cleaner Production 337, 130544",
    year: 2022, type: "journal", status: "published", topic: "renewable"
  },
  {
    title: "Tracking and quantifying the cobalt flows in mainland China during 1994&ndash;2016",
    venue: "Chen, Zhang &amp; Xu &mdash; Science of The Total Environment 672, 752&ndash;762",
    year: 2019, type: "journal", status: "published", topic: "renewable"
  },
  {
    title: "Global supply risk assessment of the metals used in clean energy technologies",
    venue: "Zhang, Chen, Yang &amp; Xu &mdash; Journal of Cleaner Production 331, 129602",
    year: 2022, type: "journal", status: "published", topic: "renewable",
    link: "https://doi.org/10.1016/j.jclepro.2021.129602"
  },

  // ---- Electronic Waste Recycling ----
  {
    title: "Recovery of tantalum from waste tantalum capacitors by supercritical water treatment",
    venue: "Niu, Chen &amp; Xu &mdash; ACS Sustainable Chemistry &amp; Engineering 5(5), 4421&ndash;4428",
    year: 2017, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Vacuum pyrolysis characteristics and parameter optimization of recycling organic materials from waste tantalum capacitors",
    venue: "Chen, Niu, Zhang &amp; Xu &mdash; Journal of Hazardous Materials 342, 192&ndash;200",
    year: 2018, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Analysis of cobalt flows in mainland China: exploring potential opportunities for improving resource efficiency and supply security",
    venue: "Chen, Zhang &amp; Xu &mdash; Journal of Cleaner Production 275, 122841",
    year: 2020, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Method for recycling tantalum from waste tantalum capacitors by chloride metallurgy",
    venue: "Niu, Chen &amp; Xu &mdash; ACS Sustainable Chemistry &amp; Engineering 5(2), 1376&ndash;1381",
    year: 2017, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Application of pyrolysis to recycling organics from waste tantalum capacitors",
    venue: "Niu, Chen &amp; Xu &mdash; Journal of Hazardous Materials 335, 39&ndash;46",
    year: 2017, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "An integrated and environmental-friendly technology for recovering valuable materials from waste tantalum capacitors",
    venue: "Niu, Chen &amp; Xu &mdash; Journal of Cleaner Production 166, 512&ndash;518",
    year: 2017, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Recovery of valuable materials from waste tantalum capacitors by vacuum pyrolysis combined with mechanical&ndash;physical separation",
    venue: "Niu, Chen &amp; Xu &mdash; ACS Sustainable Chemistry &amp; Engineering 5(3), 2639&ndash;2647",
    year: 2017, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Recycling waste tantalum capacitors to synthesize high value-added Ta2O5 and polyaniline-decorated Ta2O5 photocatalyst",
    venue: "Niu, Chen &amp; Xu &mdash; Journal of Cleaner Production 252, 117206",
    year: 2020, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Supply chain and sustainability implications of waste-to-graphite",
    venue: "Zhang, Chen, Wang, Xu, Piao, Klee, Reck, Li, Park et al. &mdash; Nature Reviews Clean Technology, 1&ndash;18",
    year: 2026, type: "journal", status: "published", topic: "ewaste"
  },
  {
    title: "Process for synthesizing tantalum oxynitride (TaON) photocatalysts from spent tantalum capacitors",
    venue: "Xu, Niu &amp; Chen &mdash; Patent CN106276827B, Shanghai Jiao Tong University",
    year: 2018, type: "patent", status: "granted", topic: "ewaste"
  },
  {
    title: "Method and technical process for producing ultrafine Ta₂O₅ from spent tantalum capacitors",
    venue: "Xu, Niu &amp; Chen &mdash; Patent CN106186066B, Shanghai Jiao Tong University",
    year: 2018, type: "patent", status: "granted", topic: "ewaste"
  }
];

const TOPIC_LABELS = {
  computing: "Computing Systems & Data Center Sustainability",
  renewable: "Renewable Energy: Material Demand & Environmental Impacts",
  ewaste: "Electronic Waste Recycling"
};

const TYPE_LABELS = {
  journal: "Journal", conference: "Conference", poster: "Poster",
  patent: "Patent", "working-paper": "Working Paper"
};

const STATUS_LABELS = {
  published: "Published", "under-review": "Under review",
  granted: "Granted", "working-paper": "Working paper"
};

let activeTopic = "all";
let activeType = "all";

function renderFilters() {
  const topicGroup = document.getElementById("topic-filters");
  const typeGroup = document.getElementById("type-filters");

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

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderList();
});
