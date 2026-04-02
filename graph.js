// Knowledge Graph Data Structure
const graphData = {
  nodes: [
    { id: 1, label: "Amarnath R.", type: "person", x: 600, y: 450 },
    { id: 2, label: "PhD", type: "education", x: 250, y: 150 },
    { id: 3, label: "M.Tech", type: "education", x: 100, y: 300 },
    { id: 4, label: "Publications", type: "research", x: 800, y: 150 },
    { id: 5, label: "Experience", type: "experience", x: 950, y: 350 },
    { id: 6, label: "Research", type: "research", x: 800, y: 700 },
    { id: 7, label: "Tech Stack", type: "skills", x: 250, y: 750 },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 1, target: 4 },
    { source: 1, target: 5 },
    { source: 1, target: 6 },
    { source: 1, target: 7 },
    { source: 2, target: 4 },
  ]
};

// Node Details Content
const nodeContent = {
  1: {
    type: "Profile",
    title: "Dr. Amarnath R.",
    content: `
      <strong>Principal AI Architect</strong>
      <p>Ph.D. in Computer Vision | GenAI & Multi-Agent Systems</p>
      <p>15+ years bridging deep academic research with enterprise-scale engineering. I architect Agentic AI systems and Deep Learning pipelines that move beyond POCs into production-grade, high-ROI innovation.</p>
      <h3>Impact Highlights</h3>
      <ul>
        <li>$3M+ in funding secured (DST & VC)</li>
        <li>50+ global clients served (Bosch, Amazon, Flipkart)</li>
        <li>40% operational efficiency gains for enterprise clients</li>
        <li>500+ students trained through Codeidea.in</li>
        <li>21+ peer-reviewed publications</li>
      </ul>
    `
  },
  2: {
    type: "Education",
    title: "Ph.D., Computer Science",
    content: `
      <strong>University of Mysore &bull; 2016–2019</strong>
      <p><em>Thesis: Segmentation in Compressed Document Images</em></p>
      <h3>Research Focus</h3>
      <ul>
        <li>Document image segmentation & layout analysis</li>
        <li>Run-length encoding techniques</li>
        <li>Text-line segmentation in compressed domain</li>
        <li>Novel approach to document recognition systems</li>
      </ul>
      <h3>Key Achievement</h3>
      <p>Published 10+ papers in SCIE, SCOPUS, IEEE, and IAPR-endorsed conferences</p>
    `
  },
  3: {
    type: "Education",
    title: "M.Tech., Computer Cognition & Technology",
    content: `
      <strong>University of Mysore &bull; 2011–2013</strong>
      <p><em>Thesis: Indian Paper Currency Recognition Systems for Visually Impaired</em></p>
      <h3>Focus Areas</h3>
      <ul>
        <li>Image processing and pattern recognition</li>
        <li>Accessibility technology</li>
        <li>Currency recognition systems</li>
        <li>Assistive technology design</li>
      </ul>
    `
  },
  4: {
    type: "Research",
    title: "Academic Publications (21)",
    content: `
      <h3>Recent & Notable</h3>
      <div class="publication-item">
        <div class="pub-year-badge">2026</div>
        <div class="pub-title">HMS-VesselNet: Hierarchical Multi-Scale Attention Network with Topology-Preserving Loss for Retinal Vessel Segmentation</div>
        <div class="pub-venue">arXiv:2603.21891 [eess.IV]</div>
      </div>
      <div class="publication-item">
        <div class="pub-year-badge">2024</div>
        <div class="pub-title">Hard Exudates Segmentation in Diabetic Retinopathy Using DiaRetDB1</div>
        <div class="pub-venue">IEEE Access, vol. 12</div>
      </div>
      <div class="publication-item">
        <div class="pub-year-badge">2019</div>
        <div class="pub-title">Automatic Localization and Extraction of Tables from Handheld Mobile-Camera Captured Handwritten Document Images</div>
        <div class="pub-venue">Journal of Intelligent & Fuzzy Systems (SCIE, SCOPUS, DBLP)</div>
      </div>
      <p style="margin-top: 16px; font-size: 12px;"><strong>21+ publications</strong> in peer-reviewed journals and conferences</p>
    `
  },
  5: {
    type: "Experience",
    title: "Career Overview",
    content: `
      <h3>Solutions Architect @ HCL Technologies (2022–2024)</h3>
      <p>Architected AI-powered applications for 50+ clients. Delivered 40% operational efficiency improvements through LLM integration.</p>
      
      <h3>Principal Technical Architect @ Cocoslabs (2020–2020)</h3>
      <p>Principal Investigator for COVID-19 thermal screening AI. Secured $3M+ DST funding. Built real-time video analytics pipeline.</p>
      
      <h3>ML Lead @ Text Mercato Solutions (2019–2020)</h3>
      <p>Built OCR and NLP models. Achieved 70% reduction in manual cataloguing effort. Contributed to $2M seed funding.</p>
      
      <h3>Founder @ Codeidea.in (2024–2025)</h3>
      <p>Built competitive coding platform. Organized 3+ hackathons. Acquired by IVISLabs Pvt. Ltd.</p>
      
      <p style="margin-top: 16px; font-weight: 500;"><strong>15+ years</strong> of experience defining AI strategy and system architecture</p>
    `
  },
  6: {
    type: "Research",
    title: "Research Domains",
    content: `
      <h3>Computer Vision & Image Processing</h3>
      <ul>
        <li>Retinal vessel segmentation</li>
        <li>Document image analysis</li>
        <li>Medical image analysis</li>
        <li>OCR systems</li>
      </ul>
      
      <h3>Generative AI & LLMs</h3>
      <ul>
        <li>Multi-agent orchestration</li>
        <li>Agentic AI systems (LangGraph, CrewAI)</li>
        <li>RAG (Retrieval Augmented Generation)</li>
        <li>LLM evaluation & optimization</li>
      </ul>
      
      <h3>Systems & Infrastructure</h3>
      <ul>
        <li>ML system design</li>
        <li>Production-grade AI deployment</li>
        <li>Kubernetes & containerization</li>
        <li>MLOps pipelines</li>
      </ul>
    `
  },
  7: {
    type: "Skills",
    title: "Technical Toolkit",
    content: `
      <h3>Languages</h3>
      <p>Python (2016+) • Java (2007+) • JavaScript (2019+) • MATLAB (2013+)</p>
      
      <h3>AI/ML Frameworks</h3>
      <p>PyTorch • TensorFlow • Keras • Transformers • Scikit-learn</p>
      
      <h3>Agentic AI / LLM</h3>
      <p>LangGraph • LangChain • LangSmith • CrewAI • Multi-Agent Orchestration</p>
      
      <h3>Cloud & DevOps</h3>
      <p>AWS • Docker • Kubernetes • MLflow • CI/CD</p>
      
      <h3>Databases</h3>
      <p>PostgreSQL • MongoDB • Pinecone • Weaviate • ChromaDB</p>
      
      <h3>Full Stack</h3>
      <p>FastAPI • Flask • React • GraphQL • WebRTC • WebSocket</p>
    `
  }
};

// Initialize Graph
function initializeGraph() {
  const container = document.getElementById('graph-container');
  const svg = d3.select(container).append('svg').attr('width', '100%').attr('height', '100%');
  
  // Get container dimensions
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  // Force simulation with adjusted strength for larger canvas
  const simulation = d3.forceSimulation(graphData.nodes)
    .force('link', d3.forceLink(graphData.links).id(d => d.id).distance(150))
    .force('charge', d3.forceManyBody().strength(-500))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(60));

  // Create links
  const link = svg.selectAll('.link')
    .data(graphData.links)
    .enter()
    .append('line')
    .attr('class', 'link')
    .attr('stroke-width', 2);

  // Create nodes
  const node = svg.selectAll('.node')
    .data(graphData.nodes)
    .enter()
    .append('g')
    .attr('class', 'node')
    .call(d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded));

  // Add circles - larger nodes
  node.append('circle')
    .attr('class', 'node-circle')
    .attr('r', d => d.id === 1 ? 32 : 24);

  // Add labels
  node.append('text')
    .attr('class', 'node-label')
    .text(d => d.label.split(' ')[0])
    .attr('x', 0)
    .attr('y', 0);

  // Click handler
  node.on('click', function(event, d) {
    event.stopPropagation();
    showNodeDetails(d.id);
    
    // Highlight connected nodes
    link.classed('active', l => l.source.id === d.id || l.target.id === d.id);
    node.select('circle').classed('node-detail-circle', n => n.id === d.id);
  });

  // Update positions on simulation tick
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });

  // Drag functions
  function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  // Click outside to deselect
  svg.on('click', () => {
    link.classed('active', false);
    node.select('circle').classed('node-detail-circle', false);
  });
}

// Show Node Details Panel
function showNodeDetails(nodeId) {
  const panel = document.getElementById('node-details');
  const content = document.querySelector('.details-content');
  const nodeData = nodeContent[nodeId];
  
  if (nodeData) {
    content.innerHTML = `
      <div class="node-details-type">${nodeData.type}</div>
      <h2 class="node-details-title">${nodeData.title}</h2>
      <div class="node-details-body">${nodeData.content}</div>
    `;
    panel.classList.add('active');
  }
}

// Close Details Panel
function closeNodeDetails() {
  document.getElementById('node-details').classList.remove('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeGraph();
  
  // Close button
  document.querySelector('.details-close').addEventListener('click', closeNodeDetails);
  
  // Populate publications list
  populatePublications();
});

// Populate publications section
function populatePublications() {
  const publications = [
    { year: 2026, title: "HMS-VesselNet: Hierarchical Multi-Scale Attention Network with Topology-Preserving Loss for Retinal Vessel Segmentation", venue: "arXiv:2603.21891 [eess.IV]" },
    { year: 2024, title: "Hard Exudates Segmentation in Diabetic Retinopathy Using DiaRetDB1", venue: "IEEE Access, vol. 12" },
    { year: 2023, title: "Pruning distorted images in MNIST handwritten digits", venue: "CoRR, abs/2307.14343" },
    { year: 2022, title: "Segmentation of pectoral muscle in mammograms using granular computing", venue: "J. of Information Technology Research, vol. 15, no. 1" },
    { year: 2021, title: "Detection and classification of hard exudates in retinal images", venue: "J. of Intelligent & Fuzzy Systems, vol. 38, no. 2" },
    { year: 2021, title: "An experimental study on the effect of noise in CCITT Group 4 compressed document images", venue: "Advances in AI and Data Engineering" },
    { year: 2019, title: "Regression-based sub-image matching methodology for recognizing an Indian paper bill", venue: "IJEEA" },
    { year: 2019, title: "Word and character segmentation directly in run-length compressed handwritten document images", venue: "CoRR" },
    { year: 2019, title: "Automatic localization and extraction of tables from handheld mobile-camera captured handwritten document images", venue: "JIFS, vol. 36, no. 3 (SCIE, SCOPUS, DBLP)" },
    { year: 2018, title: "Text line segmentation in compressed representation of handwritten document using tunneling algorithm", venue: "IJISAE, vol. 6, no. 4" },
    { year: 2018, title: "Novel approach to locate region of interest in mammograms for breast cancer", venue: "IJISAE, vol. 6, no. 3" },
    { year: 2018, title: "Enabling text-line segmentation in run-length encoded handwritten document image using entropy-driven incremental learning", venue: "CVIP-2018, IIIT Jabalpur (IAPR Endorsed)" },
    { year: 2018, title: "Entropy-based approach for enabling text line segmentation in handwritten documents", venue: "Springer LNNS, DAL'18, Mysore" },
    { year: 2018, title: "Line detection in run-length encoded document images using monotonically increasing graph model", venue: "IEEE ICACCI, Bangalore" },
    { year: 2017, title: "Segmentation of handwritten text document directly in compressed image version", venue: "SSDA, Jaipur (IAPR Endorsed)" },
    { year: 2017, title: "Spotting separator points at line terminals in compressed document images for text-line segmentation", venue: "IJCA, vol. 172, no. 4" },
    { year: 2009, title: "Fingerprint Biometrics with movement enhanced technique", venue: "NCCCIS-2009, Coimbatore" },
    { year: 2009, title: "Image Processing over IP Networks", venue: "NCCCIS-2009, Coimbatore" },
    { year: 2008, title: "Magic at Zero desk-space: Designing and implementing an advanced human-computer interaction system", venue: "MNGSA, Karunya University" },
    { year: 2008, title: "An optimized string searching algorithmic technique", venue: "MNGSA, Karunya University" },
    { year: 2008, title: "Designing a novel web-based e-learning authoring tool for dynamic content management", venue: "MNGSA, Karunya University" },
  ];

  const listDiv = document.getElementById('publications-list');
  listDiv.innerHTML = publications.map(pub => `
    <div class="pub-entry">
      <div class="pub-entry-year">${pub.year}</div>
      <div class="pub-entry-title">${pub.title}</div>
      <div class="pub-entry-venue">${pub.venue}</div>
    </div>
  `).join('');
}

// Navbar scroll effect and hamburger menu (from previous script.js)
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function closeMenu() {
  navLinks.classList.remove('open');
}
