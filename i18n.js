// English ↔ Traditional Chinese toggle.
// Keys are the English innerHTML of each translatable element (whitespace collapsed);
// anything without an entry simply stays in English.
const zh = {
  // Shared header / footer
  'Skip to main content': '跳至主要內容',
  'About': '關於',
  'Home': '首頁',
  'Publications': '論文發表',
  'Skills': '技能',
  'Experience': '經歷',
  'Honors': '榮譽',
  '© 2026 Wei-Kuan Chiang. Built with curiosity and care.': '© 2026 Wei-Kuan Chiang. 以好奇與用心打造。',
  'Back to top ↑': '回到頂部 ↑',
  '← Back home': '← 回首頁',

  // Profile
  'Researcher · Engineer': '研究者 · 工程師',
  'MSc Advanced Computer Science<br>The University of Manchester': '曼徹斯特大學<br>進階電腦科學碩士',
  'Manchester, United Kingdom': '英國・曼徹斯特',
  'Research areas': '研究領域',
  'Machine Learning · ML Systems · AI Systems · Edge AI': '機器學習 · 機器學習系統 · AI 系統 · 邊緣 AI',
  'Open to research collaboration': '歡迎研究合作',

  // About
  'ABOUT ME': '關於我',
  'Stay curious.<br><em>Build with purpose.</em>': '保持好奇，<br><em>為意義而打造。</em>',
  'I am Wei-Kuan Chiang, a Computer Science graduate from Yuan Ze University and an incoming MSc Advanced Computer Science student at <strong>The University of Manchester</strong>. My research focuses on <strong>memory reliability, RTL/FPGA design, edge AI, and intelligent systems</strong>. Through an NSTC undergraduate research project, I have worked across the full research pipeline—from test algorithms and hardware architecture to fault injection and on-device FPGA validation.':
    '我是 Wei-Kuan Chiang，畢業於元智大學資訊工程學系，即將就讀<strong>曼徹斯特大學</strong>進階電腦科學碩士。我的研究聚焦於<strong>記憶體可靠度、RTL/FPGA 設計、邊緣 AI 與智慧系統</strong>。透過國科會大專學生研究計畫，我完整走過研究的每個環節——從測試演算法、硬體架構，到錯誤注入與 FPGA 實機驗證。',
  'I also develop real-time AI and software systems in industry, integrating speech interaction, visual perception, streaming, and model inference. These experiences shaped a simple principle behind my work: technology should not only succeed in a paper; it should be deployable, useful, and accountable in the real world.':
    '我也在業界開發即時 AI 與軟體系統，整合語音互動、視覺感知、串流與模型推論。這些經驗讓我確立了一個簡單的原則：技術不該只在論文裡成功，更要能在真實世界中落地、有用，並且可被信賴。',
  'At Manchester, I plan to deepen my work in machine learning, software engineering, and distributed systems while continuing to turn research ideas into reliable deployed systems.':
    '在曼徹斯特，我計畫深化機器學習、軟體工程與分散式系統的能力，並持續把研究構想轉化為可靠、可部署的系統。',
  'Machine Learning': '機器學習',
  'ML Systems': '機器學習系統',
  'Memory Reliability': '記憶體可靠度',
  'Edge AI': '邊緣 AI',
  'AI Systems': 'AI 系統',

  // Section titles
  'News': '最新消息',
  'SELECTED UPDATES': '近期動態',
  'Research &amp; Projects': '研究與專案',
  'SELECTED GITHUB WORK': '精選 GITHUB 作品',
  'TECH STACK': '技術棧',
  'Professional Experience': '工作經歷',
  'INDUSTRY': '業界',
  'Academic Research': '學術研究',
  'RELIABLE SYSTEMS': '可靠系統',
  'Teaching Experience': '教學經驗',
  'FIVE COURSES': '五門課程',
  'Leadership &amp; International Experience': '領導與國際經驗',
  'COMMUNITY': '社群',

  // News
  'Posted a new preprint, <strong>ContraFM-S2O</strong>, on arXiv (cs.CV) — a flow matching model for one-step SAR-to-optical image translation.':
    '於 arXiv (cs.CV) 發表新預印本 <strong>ContraFM-S2O</strong>——一個以 flow matching 實現單步 SAR 轉光學影像的模型。',
  'Beginning the <strong>MSc Advanced Computer Science</strong> programme at The University of Manchester.':
    '開始於曼徹斯特大學攻讀<strong>進階電腦科學碩士</strong>。',
  'Received the <strong>Yuan Ze University Academic Gold Award</strong> for outstanding academic and research performance.':
    '以優異的學業與研究表現獲頒<strong>元智大學學業金質獎</strong>。',
  'Received the <strong>Outstanding Paper Award</strong> at TANET &amp; NCS 2025.':
    '於 TANET &amp; NCS 2025 榮獲<strong>優秀論文獎</strong>。',
  'Completed FPGA validation and PPA analysis for an NSTC project on an optimized March mSR+ memory BIST architecture.':
    '完成國科會計畫「最佳化 March mSR+ 記憶體 BIST 架構」的 FPGA 驗證與 PPA 分析。',
  'Published research in <strong>IEEE Transactions on VLSI Systems</strong>.':
    '研究成果刊登於 <strong>IEEE Transactions on VLSI Systems</strong>。',

  // Publications
  'TANET &amp; NCS · 2025 · OUTSTANDING PAPER AWARD': 'TANET &amp; NCS · 2025 · 優秀論文獎',
  'A one-step flow matching model for SAR-to-optical image translation that replaces instantaneous with average velocity along the interpolation path and adds contrastive learning for sharper detail, reaching state-of-the-art results on SAR2Opt and QXS with lower inference latency.':
    '一個單步 flow matching 的 SAR 轉光學影像模型：沿插值路徑以平均速度取代瞬時速度，並加入對比學習強化細節，在 SAR2Opt 與 QXS 資料集上達到 SOTA，同時降低推論延遲。',
  'An LLM-based framework that treats RTL debugging as instruction-based program repair, fine-tuning Qwen2.5-Coder-14B with LoRA and QLoRA on a 2,351-sample dataset of injected semantic, functional, and FSM-level bugs.':
    '一個以大型語言模型為基礎的框架，將 RTL 除錯視為指令式程式修復；以 LoRA 與 QLoRA 微調 Qwen2.5-Coder-14B，訓練資料為 2,351 筆注入語意、功能與 FSM 層級錯誤的樣本。',
  'A low-power, high-fault-coverage RTL-BIST IP core designed to improve the efficiency and reliability of embedded memory testing.':
    '一個低功耗、高錯誤覆蓋率的 RTL-BIST IP 核心，用以提升嵌入式記憶體測試的效率與可靠度。',
  'A memory-reliability solution for AI-driven automation systems, integrating testing, fault analysis, and hardware validation.':
    '針對 AI 驅動自動化系統的記憶體可靠度解決方案，整合測試、錯誤分析與硬體驗證。',
  'An HLS-designed CNN inference core deployed on the PYNQ-Z2 board for MNIST digit recognition, cutting per-image inference to about 0.29s while using under 13% of the board\'s LUT and DSP resources.':
    '以 HLS 設計的 CNN 推論核心，部署於 PYNQ-Z2 開發板進行 MNIST 手寫數字辨識，單張推論時間縮短至約 0.29 秒，且僅使用不到 13% 的 LUT 與 DSP 資源。',
  'A PYNQ-Z2 FPGA deployment of YOLOv3 using an HLS-synthesized DPU and DNNK-based quantization, evaluated on power, latency, and throughput to deliver efficient edge object detection for AIoT.':
    '在 PYNQ-Z2 FPGA 上部署 YOLOv3，採用 HLS 合成的 DPU 與 DNNK 量化，並從功耗、延遲與吞吐量進行評估，為 AIoT 提供高效的邊緣物件偵測。',
  'A hardware architecture that combines built-in self-test with OTP redundancy information for memory fault localization and self-repair.':
    '結合內建自我測試與 OTP 備援資訊的硬體架構，可進行記憶體錯誤定位與自我修復。',
  'Paper': '論文',
  'Award Paper': '得獎論文',

  // Projects
  'A focused selection of systems across interpretable machine learning, deployable generative AI, and full-stack engineering with an eye for security and usability.':
    '精選的系統作品，涵蓋可解釋機器學習、可落地的生成式 AI，以及兼顧資安與易用性的全端工程。',
  '01 · INTERPRETABLE ML': '01 · 可解釋機器學習',
  '02 · AI-ASSISTED LEARNING': '02 · AI 輔助學習',
  '03 · DEPLOYED GENERATIVE AI': '03 · 落地生成式 AI',
  '04 · FULL-STACK &amp; SECURITY': '04 · 全端與資安',
  '05 · HUMAN-CENTRED SYSTEM': '05 · 以人為本的系統',
  'Private industry project': '業界非公開專案',
  'ECG Stress Analysis': 'ECG 壓力分析',
  'DSA Learning System': '資料結構與演算法學習系統',
  'AI Wine Cabinet': 'AI 智慧酒櫃',
  'Mahjong Ledger': '麻將記帳本',
  'Pet Farm — Family Care Platform': 'Pet Farm — 家庭關懷平台',
  'An end-to-end research pipeline for stress classification from WESAD ECG signals: sliding-window HRV extraction, subject-wise cross-validation, Random Forest modelling, SHAP explanations, and a local dashboard that turns model outputs into reviewable reports.':
    '以 WESAD ECG 訊號進行壓力分類的端到端研究流程：滑動視窗 HRV 特徵擷取、依受試者切分的交叉驗證、隨機森林建模、SHAP 可解釋性分析，以及把模型輸出轉成可審閱報告的本地儀表板。',
  'An interactive Flask platform that animates sorting, tree, and graph algorithms step-by-step in the browser, paired with an optional OpenAI-powered chat tutor for contextual, on-demand explanations.':
    '一個互動式 Flask 平台，在瀏覽器中逐步動畫呈現排序、樹與圖論演算法，並可搭配 OpenAI 驅動的聊天助教，隨時依情境提供解說。',
  'A voice-first interactive AI installation combining retrieval, speech understanding, response generation, and coordinated multimedia playback for an in-person user experience.':
    '以語音為核心的互動式 AI 裝置，結合檢索、語音理解、回應生成與多媒體同步播放，打造實體現場的使用體驗。',
  'A full-stack Flask app with Google OAuth sign-in, per-user session records, and yearly performance dashboards — built with CSRF-aware session handling, HttpOnly/SameSite cookies, and a SQLAlchemy/PostgreSQL backend.':
    '一個全端 Flask 應用，支援 Google OAuth 登入、個人牌局紀錄與年度戰績儀表板——並具備防 CSRF 的 session 處理、HttpOnly/SameSite cookie，以及 SQLAlchemy/PostgreSQL 後端。',
  'A gamified family-care application that turns daily check-ins, shared tasks, reflective prompts, and private photo memories into a collaborative virtual-farm experience.':
    '一個遊戲化的家庭關懷應用，把每日打卡、共同任務、反思提問與私密照片回憶，化為全家一起經營的虛擬農場體驗。',

  // Skills
  'Languages': '程式語言',
  'Machine Learning &amp; AI': '機器學習與 AI',
  'Systems &amp; Hardware': '系統與硬體',
  'Web &amp; Backend': '網頁與後端',
  'RTL Design': 'RTL 設計',
  'Embedded Systems': '嵌入式系統',

  // Experience page
  'CURRICULUM VITAE': '個人履歷',
  'Research, engineering, teaching, and leadership across reliable hardware and deployable intelligent systems.':
    '橫跨可靠硬體與可落地智慧系統的研究、工程、教學與領導經驗。',
  'Dec. 2024 — Present': '2024.12 — 至今',
  'NSTC Project': '國科會計畫',
  'Feb. — Jun. 2026': '2026.02 — 2026.06',
  'Sep. 2025 — Jan. 2026': '2025.09 — 2026.01',
  'Feb. — Jun. 2025': '2025.02 — 2025.06',
  'Sep. 2024 — Feb. 2025': '2024.09 — 2025.02',
  'Sep. 2023 — Feb. 2024': '2023.09 — 2024.02',
  'Feb. 2023 — Feb. 2024': '2023.02 — 2024.02',
  'Jan. — Feb. 2025': '2025.01 — 2025.02',
  'Feb. — Jun. 2024': '2024.02 — 2024.06',
  'Taoyuan, Taiwan': '台灣・桃園',
  'Yuan Ze University': '元智大學',
  'Providence University': '靜宜大學',
  'Manchester': '曼徹斯特',
  'University of Calgary': '卡加利大學',
  'Siaoli Elementary School': '霄裡國小',
  'Software Engineer <span>· Robust</span>': '軟體工程師 <span>· Robust</span>',
  'Led a three-person team that integrated voice interaction, eye tracking, and crowd recognition into an AI digital-human panel within four weeks, delivering the production system ahead of schedule for a major cinema in Taipei.':
    '帶領三人團隊，在四週內將語音互動、眼動追蹤與人群辨識整合進 AI 數位人看板，並提前為台北一家大型影城完成正式系統上線。',
  'Developed a real-time face-tracking system for context-aware advertising in taxis and other smart-display environments.':
    '開發即時人臉追蹤系統，應用於計程車及其他智慧看板的情境感知廣告。',
  'Developed and integrated an AI-powered smart wine-cabinet solution for FamilyMart retail environments, supporting interactive product presentation and smart retail operations.':
    '為全家便利商店開發並整合 AI 智慧酒櫃方案，支援互動式商品展示與智慧零售營運。',
  'Built smart-home functions and device-integration workflows with Home Assistant, connecting sensors, devices, and automation logic into unified control scenarios.':
    '以 Home Assistant 建置智慧家庭功能與設備整合流程，把感測器、裝置與自動化邏輯串成統一的控制情境。',
  'Implemented vehicle-flow analytics using YOLO object detection and the Hungarian algorithm for frame-to-frame association, enabling vehicle tracking and traffic counting.':
    '以 YOLO 物件偵測搭配匈牙利演算法進行跨影格關聯，實作車流分析，達成車輛追蹤與流量計數。',
  'Researcher <span>· Hardware Optimization of March mSR+ Algorithm</span>': '研究員 <span>· March mSR+ 演算法硬體最佳化</span>',
  'Led an NSTC-funded project focused on improving memory built-in self-test performance.': '主持國科會補助計畫，致力提升記憶體內建自我測試的效能。',
  'Designed and verified hardware implementations using RTL-level techniques.': '以 RTL 層級技術設計並驗證硬體實作。',
  'Research was accepted for presentation at ICRAS 2025 in Osaka, Japan.': '研究成果獲選於日本大阪 ICRAS 2025 發表。',
  'Research Assistant <span>· Automatic Synthesis of OTP Memory IP</span>': '研究助理 <span>· OTP 記憶體 IP 自動合成</span>',
  'Supported memory-IP development for low-power SoC applications under Prof. Ming-Yi Lin.': '在林銘儀教授指導下，協助開發低功耗 SoC 應用的記憶體 IP。',
  'Microprocessor Teaching Assistant': '微處理機課程助教',
  'Prepared exercises on processor architecture, instruction sets, interrupts, timers, and memory-mapped I/O.': '準備處理器架構、指令集、中斷、計時器與記憶體映射 I/O 的練習題。',
  'Guided embedded-system labs in C and assembly, including peripheral interfaces and hardware–software integration.': '指導以 C 與組合語言進行的嵌入式系統實驗，包含周邊介面與軟硬體整合。',
  'Competitive Programming Teaching Assistant': '程式競賽課程助教',
  'Designed weekly training in algorithmic problem solving, data structures, dynamic programming, and graph algorithms.': '設計每週的演算法解題、資料結構、動態規劃與圖論訓練。',
  'Led hands-on sessions and provided individual code reviews and debugging guidance.': '帶領實作課程，並提供個別的程式碼審查與除錯指導。',
  'Assembly Language &amp; Computer Organization Teaching Assistant': '組合語言與計算機組織課程助教',
  'Reviewed assignments, identified learning gaps, and provided targeted after-class support in assembly language and computer architecture.': '批改作業、找出學習落差，並針對組合語言與計算機架構提供課後輔導。',
  'Digital Systems Design &amp; Practice Teaching Assistant': '數位系統設計與實習課程助教',
  'Planned Verilog exercises and FPGA experiments using ModelSim.': '規劃 Verilog 練習與使用 ModelSim 的 FPGA 實驗。',
  'Improved laboratory workflows and prepared tutorials and example files for independent problem solving.': '改善實驗課流程，並準備教學講義與範例檔，幫助學生獨立解題。',
  'Programming (II) &amp; Calculus Teaching Assistant': '程式設計（二）與微積分課程助教',
  'Tutored advanced C/C++ and supported approximately 10 students each week; built an automated grading system that improved grading efficiency by 60%.': '輔導進階 C/C++，每週協助約 10 位學生；並建置自動批改系統，使批改效率提升 60%。',
  'Prepared calculus materials and tutored more than 20 students; the course achieved an 85% final pass rate.': '準備微積分教材並輔導超過 20 位學生，課程最終及格率達 85%。',
  'International Ambassador <span>· The University of Manchester</span>': '國際大使 <span>· 曼徹斯特大學</span>',
  'Invited to support cross-cultural outreach and peer engagement with prospective and incoming international students.': '受邀協助跨文化推廣，並與準新生及新入學的國際學生進行同儕交流。',
  'President <span>· 530 Competitive Programming Training Center</span>': '社長 <span>· 530 程式競賽培訓中心</span>',
  'Recruited more than 120 students, developed beginner and advanced training, and doubled competition registrations through coordinated events and instruction.': '招募超過 120 名學生，規劃初階與進階培訓，並透過活動與教學讓競賽報名人數翻倍。',
  'Language-Intensive Study Programme': '密集語言研修課程',
  'Completed certified language training and strengthened cross-cultural communication through international collaboration.': '完成認證語言訓練，並透過國際合作強化跨文化溝通能力。',
  'After-School Volunteer': '課後輔導志工',
  'Supported reading and homework while using games and activities to build motivation, trust, and confidence.': '陪伴孩子閱讀與寫作業，並透過遊戲與活動建立學習動機、信任與自信。',

  // Honors page
  'RECOGNITION': '榮譽肯定',
  'Honors &amp; Awards': '榮譽與獎項',
  'Academic recognition, engineering research, cybersecurity, and competitive programming.': '學業表現、工程研究、資訊安全與程式競賽。',
  'Academic Gold Award': '學業金質獎',
  'Outstanding Paper Award': '優秀論文獎',
  'Second Place, Engineering Paper Competition': '工程論文競賽 第二名',
  'Yuan Ze University · 2026': '元智大學 · 2026',
  'Chinese Institute of Engineers · 2025': '中國工程師學會 · 2025',
  'Oct. 2025': '2025.10',
  'Jul. 2025': '2025.07',
  'Nov. 2024': '2024.11',
  'Sep. 2024': '2024.09',
  'Jul. 2024': '2024.07',
  'Jun. 2023': '2023.06',
  '<b>Academic Gold Award</b>Yuan Ze University': '<b>學業金質獎</b>元智大學',
  '<b>Honorable Mention</b>National Creative and Intelligent Technology Competition': '<b>佳作</b>全國創意暨智慧科技競賽',
  '<b>Outstanding Paper Award</b>TANET &amp; NCS 2025': '<b>優秀論文獎</b>TANET &amp; NCS 2025',
  '<b>Second Place</b>Engineering Paper Competition, Student Branch, Chinese Institute of Engineers': '<b>第二名</b>中國工程師學會學生分會 工程論文競賽',
  '<b>Top 10 Finalist</b>Shalun Cybersecurity Newcomer Matchmaking and Cultivation Program, Ministry of Digital Affairs': '<b>前十強</b>數位發展部 沙崙資安新秀媒合培育計畫',
  '<b>Honorable Mention</b>ICPC Asia Taichung Regional Programming Contest': '<b>佳作</b>ICPC 亞洲區台中站程式競賽',
  '<b>Bronze Mention</b>ICPC Asia Taiwan Online Programming Contest': '<b>銅牌</b>ICPC 亞洲台灣線上程式競賽',
  '<b>Bronze Mention</b>ICPC Taiwan Private University Programming Contest': '<b>銅牌</b>ICPC 全國私立大專校院程式競賽',
  '<b>Honorable Mention</b>ICPC Taiwan Private University Programming Contest': '<b>佳作</b>ICPC 全國私立大專校院程式競賽',
};

const translatable = [
  '.skip', '.site-header nav a', 'footer p', 'footer a',
  '.english-name', '.role', '.location', '.profile-links b', '.profile-links span', '.availability span',
  '.kicker', '.intro>h2', '.intro>p', '.interests span',
  '.section-title h2', '.section-title>span', '.news-list p',
  '.venue', '.abstract', '.pub-links a', '.pub-links span',
  '.projects-intro', '.project-index', '.project-topline>span', '.projects h3', '.projects p:not(.project-index)',
  '.skill-group b', '.skill-tags li',
  '.page-intro h1', '.page-intro>p:not(.kicker)', '.role-meta time', '.role-meta p',
  '.detail-role h3', '.detail-role li', '.detail-role>div:not(.role-meta)>p',
  '.awards-grid b', '.awards-grid small', '.honors-list time', '.honors-list span',
].join(',');

const originals = new Map();
document.querySelectorAll(translatable).forEach((el) => {
  originals.set(el, el.innerHTML.replace(/\s+/g, ' ').trim());
});

const langToggle = document.querySelector('.lang-toggle');

function currentLang() {
  return document.documentElement.dataset.lang === 'zh' ? 'zh' : 'en';
}

function applyLang(lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  root.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  originals.forEach((en, el) => {
    el.innerHTML = lang === 'zh' ? zh[en] ?? en : en;
  });
  langToggle?.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換為中文');
  langToggle?.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切換為中文');
}

langToggle?.addEventListener('click', () => {
  const nextLang = currentLang() === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('lang', nextLang); } catch {}
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    applyLang(nextLang);
    return;
  }
  document.body.classList.add('lang-fading');
  setTimeout(() => {
    applyLang(nextLang);
    document.body.classList.remove('lang-fading');
  }, 160);
});

applyLang(currentLang());
