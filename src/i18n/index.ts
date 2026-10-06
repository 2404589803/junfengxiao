import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: { label: '主导航', home: '主页', projects: '项目与成果', back: '返回主页' },
    footer: { note: '肖君枫 · AI 工程、模型评测与 Agent 应用', updated: '学术与项目档案' },
    profile: {
      name: '肖君枫',
      title: '学术主页',
      eyebrow: 'AI Engineering · Model Evaluation · Agent Systems',
      headline: '专注大模型评测与 AI Agent 工程。',
      roles: 'AI 工程师 · 模型评测 · Agent 工程 · AI 产品研究',
      affiliation: '人性化科技（北京）有限公司',
      location: '北京',
      phone: '135-0604-0342',
      email: "jimt40395{'@'}gmail.com",
      wechat: '微信：cxgczyws',
      github: 'github.com/2404589803',
      githubLabel: 'GitHub 主页',
      contact: '联系方式',
      greeting: '在中国信通院完成多系列大模型基准测试，在智谱 AI 主导智能体 API 多平台集成，现为人性化科技搭建 Agent 能力评测体系与 AI 产品需求体系；独立开发并维护 UniFuncs 官方 Python SDK 等开源项目，参与项目论文被 ACL 2024 接收。',
      community: '我的工作横跨模型测评、Agent 系统、AI 产品研究与开源工程，关注如何用可复现的评测、清晰的接口和可靠的工具链，把模型能力转化为可验证、可交付的系统。'
    },
    sections: {
      interests: '研究方向',
      interestsNote: '持续关注的问题',
      experience: '工作与实习经历',
      experienceNote: '模型、平台与产品实践',
      projects: '项目经历',
      contributions: '开源与学术成果',
      contributionsNote: '项目论文、社区协作与竞赛',
      education: '教育经历',
      skills: '技术技能'
    },
    academic: {
      kicker: 'AI 工程 · 模型评测 · Agent 系统',
      role: 'AI 工程师，专注大模型评测与 Agent 工程',
      bio: '我关注如何用可靠的评测、清晰的接口和可复现的工程流程，把模型能力转化为可交付的系统。',
      aboutTitle: '关于我',
      about: '目前在人工智能公司从事 Agent 能力评测、模型研究与产品设计；此前在中国信通院参与多系列大模型基准测试，也曾负责智谱 AI 智能体 API 的多平台集成。',
      affiliation: '人性化科技（北京）有限公司',
      researchTitle: '研究方向',
      research: [
        { title: '大模型评测', description: '数据集设计、评测维度、接口一致性与多模态评测链路。' },
        { title: 'Agent 系统', description: '工具调用、记忆、规划、失败恢复与提示注入防御。' },
        { title: 'AI 产品研究', description: '从用户场景与需求文档出发，验证模型能力的产品价值。' }
      ],
      newsTitle: '动态',
      news: [
        { date: '2026.02', text: '加入人性化科技，负责 Agent 能力评测与 AI 产品研究。' },
        { date: '2025.06', text: '完成中国信通院实习，参与多系列大模型基准测试。' },
        { date: '2024.08', text: 'UniFuncs Python SDK 发布至 PyPI。' },
        { date: '2024.06', text: 'Zero-Haruhi 项目论文被 ACL 2024 接收。' }
      ],
      selectedTitle: '精选项目',
      allProjects: '查看全部项目',
      selected: [
        { title: 'UniFuncs Python SDK', meta: 'Python / SSE · PyPI', description: '面向 Web Search、Web Reader、Deep Search 与 Deep Research 的官方 SDK。' },
        { title: 'HuggingFace Daily Papers 简报', meta: 'Python · 开源维护', description: '将每日论文整理为中文与多语言简报，包含摘要、趋势和音频内容。' },
        { title: 'Zero-Haruhi', meta: 'HuggingFace · ACL 2024', description: '参与角色数据标注与项目协作，为角色扮演模型提供训练数据。' },
        { title: 'LLM-API-TestSuite', meta: 'JavaScript · API 标准化', description: '用于多厂商 OpenAI API 一致性与功能性验证的前端测试平台。' }
      ],
      educationTitle: '教育经历',
      projectsIntro: '这里记录我独立开发、参与研究和交付的项目。首页只展示代表性工作，完整档案按时间整理。'
    },
    projectsCount: '17 项完整记录',
    interests: {
      evaluation: { title: '大模型评测', description: '围绕数据集设计、评测维度、接口一致性与多模态链路，建立可复现的模型基准测试流程。' },
      agents: { title: 'Agent 工程', description: '关注工具调用、记忆、规划、失败恢复、提示注入防御和多智能体协作等系统能力。' },
      products: { title: 'AI 产品研究', description: '从用户场景、需求文档、可行性论证到 MVP 路线图，探索模型能力如何形成真实产品价值。' }
    },
    experience: [
      {
        company: '人性化科技（北京）有限责任公司',
        period: '2026.02 — 至今',
        role: 'AI 工程师（模型测评 / Agent 工程 / 产品研究）',
        location: '北京 · 劳务合作',
        bullets: [
          '为 OpenClaw 智能体设计并执行 20 场景能力评测集（B01–B20），覆盖并发任务规划、对抗性工具恢复、多智能体辩证推理、跳轮次记忆链、闭环自我纠错、长上下文提取、级联失败推演、提示注入防御与工具调用预算控制；逐场景记录 Execution Trace 并产出两版对比。',
          '完成中转平台 Opus 4.6 评测、逆向 gpt-image-2 中转站测试与 AI API 中转平台汇总，输出《AI 大模型 API 价格周期详细汇总》作为选型与成本测算依据。',
          '沉淀 OpenClaw 人性化科技版项目介绍与内部功能文档，梳理 Gateway 星型架构、强类型 WebSocket 协议、Agent Loop 六环节、双层记忆与混合检索、心跳与主动代理、单网关多代理路由隔离及沙箱护栏。',
          '独立撰写 HypeAI 16 章需求文档，定义 Hype Object / Article Cluster / Hype Score 三层模型与 24h/72h/7d 多窗口炒作指数算法，完成信源方案、模块边界与 V0.1–V0.5 路线图，并论证合规 API 替代方案。',
          '建设 4 个 AI 行业情报知识库（约 40 个节点），跟踪 OpenAI、Anthropic、Google、DeepSeek、Moonshot、MiniMax、阿里、腾讯、小米等厂商动态，并自研公众号与网页抓取脚本。'
        ]
      },
      {
        company: '中国信息通信研究院',
        period: '2024.09 — 2025.06',
        role: '大模型基准测试实习生 · 平台与工程化部',
        location: '北京',
        bullets: [
          '针对 Qwen、GLM、Yi、DeepSeek 等系列大模型在 1000+ 数据集上进行评估，独立构建 100+ 维度的评测数据，累计输出测评报告 5 篇。',
          '基于 OpenCompass 为 GLM-4V-Plus 定制多模态评测链路，编写 WuKong Loader、三级评测配置与 API 推理脚本，并按主题切分样本；以方升基准集覆盖代码、思维链、工具调用、数学与多语言维度，以 Gemini-1.5-flash 作海外对照。',
          '独立开发政务大模型评测数据流水线：抓取政府网站通知公告并生成结构化 CSV，实现 Question 级加噪增强，设计 id / question / type / answer 字段规范，沉淀文本清洗与模板抽象流程。',
          '参与《大语言模型数据交换接口总体要求》ITU-T SG21 立项，编写跨厂商 API 参数对比并将 OpenAI API 规范并入院内 LLM 测评标准，配套 LLM-API-TestSuite 做接口一致性验证。'
        ]
      },
      {
        company: '北京智谱华章科技有限公司',
        period: '2024.05 — 2024.08',
        role: '开发工程师 · 战略生态',
        location: '北京',
        bullets: [
          '主导智谱清言智能体 API 在个人微信、飞书等平台的集成与优化，通过 A/B 测试持续改进体验，用户满意度提升 30%；独立编写技术文档 10 余篇。',
          '独立开发基于 HuggingFace 每日论文的中文版，使用 MCTS 完成论文元数据分类，并结合清言智能体 API 多次总结后的结果选取；项目被 HuggingFace 官方人员转发。'
        ]
      },
      {
        company: 'Imaginix, Inc.',
        period: '2024.03 — 2024.05',
        role: 'Prompt 工程师',
        location: '远程',
        bullets: [
          '负责 kimi.AI prompt 迭代，结合用户需求、使用场景与应用架构，将 prompt 迭代至第 3 版；累计用户 20,000+，月活跃用户增长率达 150%，用户满意度提升 40%。',
          '为 Rumibot 针对不同学校场景设计并执行 A/B 测试，优化 prompt 措辞与结构至第 4 版，用户平均使用时长增加 60%，累计用户 7,000+。'
        ]
      }
    ],
    projects: [
      { title: 'UniFuncs Python SDK', meta: '官方 SDK 作者（唯一提交者） · Python、SSE', description: '官方发布至 PyPI 的 v0.2.1 SDK，Apache-2.0 许可，封装 Web Search、Web Reader、Deep Search 与 Deep Research 四类服务，实现 SSE 流式解析与 Client + Service 分层架构。' },
      { title: 'OpenScan · OpenClaw 技能生态安全扫描器', meta: '独立开发 · C11 / C++17、Qt 6、Python', description: '恶意技能检测与风险审计工具，实现静态哈希/IOC/YARA、语义与提示注入、供应链、manifest 权限、动态行为五层检测，以及隔离、清除、恢复、凭据轮换四步处置；提供 CLI、Qt 桌面 GUI 与自检程序。' },
      { title: 'hf-community-guard · HuggingFace 社区防护 CLI', meta: '独立开发 · Python、SARIF', description: '本地优先的社区防火墙，扫描 PR、diff 与 URL 并输出 allow / warn / quarantine / block 四级决策，支持 JSON、Markdown、SARIF 与 GitHub Actions PR 门禁。' },
      { title: 'HuggingFace 每日论文中文 / 多语言简报', meta: '独立开发与维护 · Python、DeepSeek、InternLM-3', description: '抓取 Daily Papers，生成中文解读、海报、关键词云、趋势图与语音播客，并扩展日、韩、西、法四语管道；两仓库累计 700+ 次本人提交。' },
      { title: '隧道地质超前预报多源数据融合系统', meta: '独立开发，交付中铁 · C# / .NET、Python', description: '自研 Gdf.Kernel 在线多源融合引擎，采用交叉拟合证据与半衰期权重衰减，融合 TBM、Team2000/3000、HSP 多源探测数据，完成接入网关、里程校准、归档回填与两阶段验收。' },
      { title: 'EduRAG · 教育场景 RAG Python 库', meta: '独立开发与发布 · Python、LangChain / LangGraph、FAISS', description: '已发布至 PyPI，提供 SimpleRAG 与 AgenticRAG 双模式，支持 OpenAI、Gemini、Ollama 多 Provider 与 TeacherProfile 教师人设，配套用户、管理与发布文档。' },
      { title: '数据资产研报生成系统', meta: '独立开发 · Python、Gradio、GLM-4-Long', description: '面向数据资产质量评估与场景挖掘的研报自动生成系统，支持质量评述、场景评价、综合评分与 Word / PDF 导出；生产版包含 JWT、企业数据源、JSON Schema 约束与下载接口。' },
      { title: '铁路调车作业一体化平台', meta: '全栈开发 · Java Spring Boot、Vue、MySQL', description: '实现作业单接收、自动编制、股道与车厢编辑、电子围栏、数据查询、集控界面与 Word 导出，完成二阶段改造并部署上线。' },
      { title: '其他独立交付项目', meta: '独立承接交付 · C++ / Qt、PyTorch、FastAPI、Vue 3', description: '包括 QGIS 基站 GIS 管理、道路异常与 OoD 检测、监管风险区域预测 API、人口普查数据分析、WordPress–PayPal 支付网关与城市交通拥堵分析系统。' },
      { title: 'Deepspace · 深度空间', meta: '独立开发 · Go、Cobra、SQLite、Fyne', description: '调试 DeepSeek API 的本地代理工具，提供 CLI 与 GUI、响应存储、表格导出、本地 Web 日志、重复请求检测与多端构建，获 DeepSeek 官方收录。' },
      { title: 'MCP Go SDK', meta: '独立开发 · Go', description: 'Model Context Protocol 客户端 SDK，实现 Connect、FetchResources、FetchPrompts、FetchTools、CallTool、Shutdown 方法，封装 WebSocket、HTTP+SSE 与 stdio 传输层及 JSON-RPC 2.0。' },
      { title: 'Zero-Haruhi（凉宫春日）', meta: '数据标注与项目协作 · HuggingFace、GLM、Qwen', description: '标注小说角色数据 2w+ 条，为角色扮演语言模型提供训练数据；在 HuggingFace 搭建 demo，并将 GLM、Qwen 等 API 与项目结合，项目论文被 ACL 2024 接收。' },
      { title: 'Meme-Master', meta: '数据标注 · 图像生成', description: '探索表情包生成流程，在参考表情包与身份定义下生成指定身份人物的表情包，标注图片 1w+ 张，获 FaceChain 挑战赛赛道五一等奖。' },
      { title: 'HuggingFace 社区中文化', meta: '翻译组成员 · Python', description: '独立贡献 huggingface Hub Python Library 使用文档中文翻译，并翻译《The Llama Hitchhiking Guide to Local LLMs》《Sentence Embeddings》等 4 篇博客。' },
      { title: 'LLM-API-TestSuite', meta: '独立开发 · JavaScript、Tailwind CSS', description: '纯前端的 OpenAI API 一致性与功能性测试平台，按 assistant_message、tool_calls、refusal 等能力拆分模块化测试用例，用于多厂商 API 对齐与标准化验证。' },
      { title: '开源 Agent 框架国产化适配', meta: '独立开发 · Python、GLM、DeepSeek', description: 'swarm-chinese Fork 并重构 OpenAI Swarm，适配智谱 GLM-4 系列 8 个模型变体；为 ell 提示词工程框架实现 DeepSeek Provider。' },
      { title: '大模型竞赛', meta: '指令遵循攻防赛与代码大模型训练赛', description: '设计 50 道多约束客观评测题，覆盖形式、数量、语言、语义与结构约束；开发 Python + Gradio 代码字符串检索工具，支撑 fill-in-the-middle 训练样本挖掘。' }
    ],
    contributions: [
      { title: 'ACL 2024 项目论文', description: 'Zero-Haruhi 项目论文被 ACL 2024 接收。' },
      { title: 'HuggingFace 社区中文化', description: '贡献 Hub Python Library 文档中文翻译与 4 篇技术博客翻译。' },
      { title: 'FaceChain 挑战赛', description: 'Meme-Master 获赛道五一等奖。' },
      { title: 'ITU-T SG21', description: '参与《大语言模型数据交换接口总体要求》立项材料与 API 标准化工作。' },
      { title: 'DeepSeek 官方收录', description: 'Deepspace（深度空间）项目获官方收录。' }
    ],
    education: { school: '厦门南洋职业学院', period: '2022.09 — 2025.07', degree: '机电一体化技术 · 专科', location: '福建厦门' },
    skills: [
      { label: '编程语言', value: 'Python、Go、C / C++、C# (.NET)、TypeScript / JavaScript、Java、SQL、HTML / CSS' },
      { label: '大模型与 Agent', value: 'Agent 能力评测体系设计、OpenClaw、MCP、Prompt 工程、RAG（LangChain / FAISS / LangGraph）、SSE、HuggingFace Transformers、OpenCompass' },
      { label: '模型与 API', value: 'DeepSeek、GLM / 智谱清言、Qwen、Kimi / Moonshot、InternLM、Claude、GPT、Gemini、UniFuncs' },
      { label: '框架与工程', value: 'FastAPI、Flask、Spring Boot、React、Vue 3、Electron、Qt 6、PySide6 / PyQt5、Gradio、SQLite / MySQL / PostgreSQL、Git / GitHub Actions、Docker、CMake、飞书 / Lark' },
      { label: '语言', value: '中文（母语）、英语（专业工作能力）' }
    ]
  },
  en: {
    nav: { label: 'Primary navigation', home: 'Home', projects: 'Projects & work', back: 'Back to home' },
    footer: { note: 'Junfeng Xiao · AI engineering, evaluation, and agents', updated: 'Academic and project archive' },
    profile: {
      name: 'Junfeng Xiao',
      title: 'Academic Portfolio',
      eyebrow: 'AI Engineering · Model Evaluation · Agent Systems',
      headline: 'Focused on large language model evaluation and AI agent engineering.',
      roles: 'AI Engineer · Model Evaluation · Agent Engineering · AI Product Research',
      affiliation: 'Renxinghua Technology (Beijing)',
      location: 'Beijing',
      phone: '135-0604-0342',
      email: "jimt40395{'@'}gmail.com",
      wechat: 'WeChat: cxgczyws',
      github: 'github.com/2404589803',
      githubLabel: 'GitHub profile',
      contact: 'Contact',
      greeting: 'I have worked on multi-model benchmark testing at the China Academy of Information and Communications Technology and led multi-platform intelligent-agent API integration at Zhipu AI. I now build agent capability evaluation and AI product requirement systems at Renxinghua Technology, while independently developing open-source projects such as the official UniFuncs Python SDK. A related project paper was accepted to ACL 2024.',
      community: 'My work spans model evaluation, agent systems, AI product research, and open-source engineering. I focus on reproducible evaluation, clear interfaces, and reliable toolchains that turn model capabilities into verifiable systems.'
    },
    sections: {
      interests: 'Research directions', interestsNote: 'Questions I keep exploring',
      experience: 'Experience', experienceNote: 'Models, platforms, and products',
      projects: 'Projects', contributions: 'Open source and academic work', contributionsNote: 'Papers, collaboration, and competitions',
      education: 'Education', skills: 'Technical skills'
    },
    academic: {
      kicker: 'AI ENGINEERING · MODEL EVALUATION · AGENT SYSTEMS',
      role: 'AI engineer focused on language model evaluation and agent engineering',
      bio: 'I work on reliable evaluation, clear interfaces, and reproducible engineering workflows that turn model capabilities into systems people can use.',
      aboutTitle: 'About',
      about: 'I currently work on agent evaluation, model research, and product design at an AI company. Previously, I worked on multi-model benchmarks at the China Academy of Information and Communications Technology and integrated Zhipu AI agent APIs across several platforms.',
      affiliation: 'Renxinghua Technology (Beijing)',
      researchTitle: 'Research interests',
      research: [
        { title: 'Large language model evaluation', description: 'Dataset design, evaluation dimensions, interface consistency, and multimodal benchmark pipelines.' },
        { title: 'Agent systems', description: 'Tool use, memory, planning, failure recovery, and prompt injection defense.' },
        { title: 'AI product research', description: 'Validating product value from user scenarios, requirements, and model capabilities.' }
      ],
      newsTitle: 'News',
      news: [
        { date: '2026.02', text: 'Joined Renxinghua Technology to work on agent evaluation and AI product research.' },
        { date: '2025.06', text: 'Completed an internship at CAICT, working on multi-model benchmark testing.' },
        { date: '2024.08', text: 'Released the UniFuncs Python SDK on PyPI.' },
        { date: '2024.06', text: 'The Zero-Haruhi project paper was accepted to ACL 2024.' }
      ],
      selectedTitle: 'Selected projects',
      allProjects: 'View all projects',
      selected: [
        { title: 'UniFuncs Python SDK', meta: 'Python / SSE · PyPI', description: 'Official SDK for Web Search, Web Reader, Deep Search, and Deep Research services.' },
        { title: 'HuggingFace Daily Papers briefings', meta: 'Python · open-source maintenance', description: 'Multilingual daily paper briefings with summaries, trends, and audio content.' },
        { title: 'Zero-Haruhi', meta: 'HuggingFace · ACL 2024', description: 'Contributed character data annotation and project work for role-playing model training.' },
        { title: 'LLM-API-TestSuite', meta: 'JavaScript · API standardization', description: 'Frontend test platform for OpenAI-compatible API consistency and feature validation.' }
      ],
      educationTitle: 'Education',
      projectsIntro: 'A compact record of projects I have built, researched, and delivered. The homepage shows representative work; the full archive is organized here.'
    },
    projectsCount: '17 projects documented',
    interests: {
      evaluation: { title: 'Large language model evaluation', description: 'Reproducible benchmarks through dataset design, evaluation dimensions, interface consistency, and multimodal pipelines.' },
      agents: { title: 'Agent engineering', description: 'Tool use, memory, planning, failure recovery, prompt injection defense, and multi-agent collaboration as system capabilities.' },
      products: { title: 'AI product research', description: 'Turning user scenarios, requirements, feasibility studies, and MVP roadmaps into product value.' }
    },
    experience: [
      { company: 'Renxinghua Technology (Beijing)', period: 'Feb 2026 — present', role: 'AI Engineer (model evaluation / agent engineering / product research)', location: 'Beijing · contract', bullets: ['Designed and ran a 20-scenario OpenClaw agent evaluation set covering planning, adversarial tool recovery, multi-agent reasoning, memory chains, self-correction, long-context extraction, cascading failures, prompt injection defense, and tool budgets; recorded execution traces and produced two comparison reports.', 'Evaluated Opus 4.6 relay platforms, reverse-tested a gpt-image-2 relay, and compiled AI API platforms into a pricing-cycle report for selection and cost estimation.', 'Documented the OpenClaw deployment, including Gateway architecture, typed WebSocket protocols, the Agent Loop, layered memory, hybrid retrieval, proactive behavior, route isolation, and sandbox safeguards.', 'Wrote a 16-chapter HypeAI requirements document with Hype Object, Article Cluster, Hype Score, multi-window hype indices, source evaluation, MVP boundaries, and a V0.1–V0.5 roadmap.', 'Built four AI industry intelligence knowledge bases with about 40 nodes and collection scripts for public accounts and web sources.'] },
      { company: 'China Academy of Information and Communications Technology', period: 'Sep 2024 — Jun 2025', role: 'Large Language Model Benchmark Intern · Platform and Engineering', location: 'Beijing', bullets: ['Evaluated Qwen, GLM, Yi, DeepSeek, and other model families on 1,000+ datasets, created 100+ evaluation dimensions, and delivered five evaluation reports.', 'Customized a multimodal OpenCompass pipeline for GLM-4V-Plus, including a WuKong loader, evaluation configurations, inference scripts, and topic-based sample splits; used the Fangsheng benchmark and Gemini-1.5-flash as an overseas comparison.', 'Built a government-model evaluation data pipeline with structured CSV output, question-level noise augmentation, and reusable cleaning templates.', 'Contributed to the ITU-T SG21 proposal for general requirements of LLM data exchange interfaces and validated cross-provider API consistency with LLM-API-TestSuite.'] },
      { company: 'Zhipu AI · Beijing', period: 'May 2024 — Aug 2024', role: 'Development Engineer · Strategic Ecosystem', location: 'Beijing', bullets: ['Led Zhipu Qingyan agent API integrations for WeChat and Feishu, improved the experience through A/B testing, raised satisfaction by 30%, and wrote more than ten technical documents.', 'Built a Chinese edition of HuggingFace Daily Papers using MCTS for metadata classification and multi-pass summary selection; the project was shared by a HuggingFace official contributor.'] },
      { company: 'Imaginix, Inc.', period: 'Mar 2024 — May 2024', role: 'Prompt Engineer', location: 'Remote', bullets: ['Iterated kimi.AI prompts to version 3 around user needs and application architecture; reached 20,000+ cumulative users, 150% monthly active-user growth, and 40% higher satisfaction.', 'Designed A/B tests for Rumibot across school contexts, iterated prompts to version 4, increased average usage time by 60%, and reached 7,000+ cumulative users.'] }
    ],
    projects: [
      { title: 'UniFuncs Python SDK', meta: 'Official SDK author and sole contributor · Python, SSE', description: 'PyPI v0.2.1 SDK under Apache-2.0, covering Web Search, Web Reader, Deep Search, and Deep Research with SSE parsing and a Client + Service architecture.' },
      { title: 'OpenScan · OpenClaw skill security scanner', meta: 'Independent developer · C11 / C++17, Qt 6, Python', description: 'Malicious-skill detection and risk auditing across static indicators, semantic and prompt injection patterns, supply chain, manifest permissions, and dynamic behavior; includes CLI, Qt GUI, and remediation workflow.' },
      { title: 'hf-community-guard · HuggingFace community firewall', meta: 'Independent developer · Python, SARIF', description: 'Local-first scanning for PRs, diffs, and URLs with allow, warn, quarantine, and block decisions, plus JSON, Markdown, SARIF, and GitHub Actions gates.' },
      { title: 'HuggingFace Daily Papers briefings', meta: 'Independent developer and maintainer · Python, DeepSeek, InternLM-3', description: 'Automated Chinese and multilingual briefings with posters, keyword clouds, trend charts, audio, and daily pipelines; 700+ personal commits across two repositories.' },
      { title: 'Tunnel geology multi-source fusion system', meta: 'Independent developer, delivered to China Railway · C# / .NET, Python', description: 'Online Gdf.Kernel fusion engine using cross-fitted evidence and half-life decay to combine TBM, Team2000/3000, and HSP data with gateway, calibration, archival backfill, and acceptance deliverables.' },
      { title: 'EduRAG · educational RAG library', meta: 'Independent developer and publisher · Python, LangChain / LangGraph, FAISS', description: 'PyPI library with SimpleRAG and AgenticRAG modes, OpenAI, Gemini, and Ollama providers, TeacherProfile personas, and user, admin, and release documentation.' },
      { title: 'Data asset report generation system', meta: 'Independent developer · Python, Gradio, GLM-4-Long', description: 'Generates data-quality and scenario reports with weighted scoring and Word/PDF export; production version adds JWT, enterprise data sources, JSON Schema constraints, and download APIs.' },
      { title: 'Railway shunting operations platform', meta: 'Full-stack developer · Java Spring Boot, Vue, MySQL', description: 'Work-order intake and automated planning platform with track and carriage editing, geofencing, queries, centralized control, and Word export; deployed after a second-stage feature upgrade.' },
      { title: 'Other independent delivery projects', meta: 'Independent delivery · C++ / Qt, PyTorch, FastAPI, Vue 3', description: 'QGIS base-station GIS, road anomaly and OoD detection, regulatory-risk prediction API, census analytics, WordPress–PayPal gateway, and urban traffic congestion analysis.' },
      { title: 'Deepspace', meta: 'Independent developer · Go, Cobra, SQLite, Fyne', description: 'Local DeepSeek API proxy with CLI and GUI, response storage, table export, web logs, duplicate request detection, and multi-platform builds; officially listed by DeepSeek.' },
      { title: 'MCP Go SDK', meta: 'Independent developer · Go', description: 'Model Context Protocol client SDK with Connect, resource, prompt, tool, call, and shutdown methods, supporting WebSocket, HTTP+SSE, stdio, and JSON-RPC 2.0.' },
      { title: 'Zero-Haruhi', meta: 'Data annotation and project collaboration · HuggingFace, GLM, Qwen', description: 'Annotated 20,000+ character records for role-playing model training, built a HuggingFace demo, and connected GLM/Qwen APIs; related paper accepted to ACL 2024.' },
      { title: 'Meme-Master', meta: 'Data annotation · image generation', description: 'Explored identity-conditioned meme generation and annotated 10,000+ images; won first place in section five of the FaceChain challenge.' },
      { title: 'HuggingFace Chinese community', meta: 'Translation contributor · Python', description: 'Translated the huggingface Hub Python Library documentation and four technical blogs including The Llama Hitchhiking Guide to Local LLMs and Sentence Embeddings.' },
      { title: 'LLM-API-TestSuite', meta: 'Independent developer · JavaScript, Tailwind CSS', description: 'Frontend OpenAI API consistency and functional test platform with modular cases for assistant messages, tool calls, refusal, and other capabilities.' },
      { title: 'Domestic adaptation of open-source agent frameworks', meta: 'Independent developer · Python, GLM, DeepSeek', description: 'Rebuilt OpenAI Swarm as swarm-chinese for eight GLM-4 variants and implemented a DeepSeek provider for the ell prompt-engineering framework.' },
      { title: 'Large language model competitions', meta: 'Instruction-following defense and code-model training', description: 'Designed 50 multi-constraint evaluation questions and built a Python + Gradio code-string retrieval tool for fill-in-the-middle training data mining.' }
    ],
    contributions: [
      { title: 'ACL 2024 project paper', description: 'The Zero-Haruhi project paper was accepted to ACL 2024.' },
      { title: 'HuggingFace Chinese community', description: 'Contributed Hub Python Library documentation and four technical blog translations.' },
      { title: 'FaceChain challenge', description: 'Meme-Master won first place in section five.' },
      { title: 'ITU-T SG21', description: 'Contributed proposal materials and API standardization work for LLM data exchange interfaces.' },
      { title: 'DeepSeek official listing', description: 'Deepspace was officially listed by DeepSeek.' }
    ],
    education: { school: 'Xiamen Nanyang Vocational College', period: 'Sep 2022 — Jul 2025', degree: 'Mechatronics Technology · Associate degree', location: 'Xiamen, Fujian' },
    skills: [
      { label: 'Programming', value: 'Python, Go, C / C++, C# (.NET), TypeScript / JavaScript, Java, SQL, HTML / CSS' },
      { label: 'LLM and agents', value: 'Agent evaluation, OpenClaw, MCP, prompt engineering, RAG (LangChain / FAISS / LangGraph), SSE, HuggingFace Transformers, OpenCompass' },
      { label: 'Models and APIs', value: 'DeepSeek, GLM / Zhipu Qingyan, Qwen, Kimi / Moonshot, InternLM, Claude, GPT, Gemini, UniFuncs' },
      { label: 'Frameworks and engineering', value: 'FastAPI, Flask, Spring Boot, React, Vue 3, Electron, Qt 6, PySide6 / PyQt5, Gradio, SQLite / MySQL / PostgreSQL, Git / GitHub Actions, Docker, CMake, Feishu / Lark' },
      { label: 'Languages', value: 'Chinese (native), English (professional working proficiency)' }
    ]
  }
}

export const i18n = createI18n({ legacy: false, locale: 'zh', fallbackLocale: 'en', messages })

