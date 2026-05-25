export const thinkerLens = {
  socrates: {
    name: "苏格拉底",
    styleName: "苏格拉底式追问",
    coreAction: "逼问定义",
    focus: "这个词到底是什么意思？",
    lensQuestion: (obj) =>
      `你说的「${obj.coreObject}」，在这里到底指什么？如果我们暂时不接受这个结论，你能先定义它吗？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想提醒你：「${obj.coreObject}」是一个很大的词。当你把它放进一句话里时，你可能把很多不同的东西塞进了同一个概念里。这句话真正值得写的方向，不是证明${obj.coreObject}就是答案，而是追问：我们在什么时候会把一个没有定义清楚的词，当成一个已经成立的结论？如果你愿意继续写下去，试着把「${obj.coreObject}」拆开。你会发现，它的模糊本身，就是一个值得写的问题。`,
    oneMoreQuestion: (obj) =>
      `如果我从未真正追问过「${obj.coreObject}」的含义，那么我追求的${obj.coreObject}，会不会只是我不喜欢的东西的反面？`,
  },
  plato: {
    name: "柏拉图",
    styleName: "柏拉图式追问",
    coreAction: "区分影像与真实",
    focus: "这是思想本身，还是思想的好看影像？",
    lensQuestion: (obj) =>
      `它让「${obj.coreObject}」看起来很美，但这是否只是「${obj.coreObject}」的影像？你呈现的是${obj.coreObject}本身，还是${obj.coreObject}被包装后的样子？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但画面越清楚，越需要问：这是${obj.coreObject}本身，还是${obj.coreObject}被拍成了一种可展示的影像？你呈现的是一个容易想象的样子，但这个样子可能遮住了更复杂的问题。如果继续写，真正的问题不是这个画面是否好看，而是${obj.coreObject}为什么需要被安放进一个如此好看的生活场景。`,
    oneMoreQuestion: (obj) =>
      `当${obj.coreObject}被拍成一种生活方式时，我获得的是${obj.coreObject}本身，还是${obj.coreObject}的影像？`,
  },
  aristotle: {
    name: "亚里士多德",
    styleName: "亚里士多德式追问",
    coreAction: "拉回实践",
    focus: "这句话如何落回具体行动和生活习惯？",
    lensQuestion: (obj) =>
      `这句话里关于「${obj.coreObject}」的说法，能落回具体的生活习惯和行动吗？还是说，它只停留在一种姿态里？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：这句话里关于「${obj.coreObject}」的说法，能落回具体的生活习惯和行动吗？还是说，它停留在一种姿态和感觉里？真正值得写的方向，不是重复这个姿态，而是追问：${obj.coreObject}如果是一种好的状态，它应该对应哪些具体的行为和习惯？`,
    oneMoreQuestion: (obj) =>
      `关于「${obj.coreObject}」的说法，除了姿态之外，还能落回哪些具体的生活习惯？`,
  },
  zhuangzi: {
    name: "庄子",
    styleName: "庄子式追问",
    coreAction: "拆执着",
    focus: "你是否执着于一种看似自由的姿态？",
    lensQuestion: (obj) =>
      `你是否执着于一种看似「${obj.coreObject}」的姿态？有时候，人紧紧抓住一个看起来自由的姿势，反而被这个姿势困住了。`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：你是否执着于一种看似「${obj.coreObject}」的姿态？有时候，人紧紧抓住一个看起来自由的姿势，反而被这个姿势困住了。真正值得写的方向，不是强化「${obj.coreObject}」这个人设，而是追问：当你说${obj.coreObject}时，你是在顺应自然，还是在执着于一种新的标准？`,
    oneMoreQuestion: (obj) =>
      `执着于「${obj.coreObject}」这个姿态，本身是否也是一种不自由？`,
  },
  confucius: {
    name: "儒家",
    styleName: "儒家式追问",
    coreAction: "拉回关系与责任",
    focus: "如果只剩退出，回应和修复还剩什么？",
    lensQuestion: (obj) =>
      `如果每个人都只追求「${obj.coreObject}」，回应和修复还剩什么？共同生活的责任在哪里？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：如果每个人都只追求「${obj.coreObject}」，谁来承担共同生活的责任？回应和修复是否还有价值？真正值得写的方向，不是把${obj.coreObject}当成唯一的答案，而是追问：在坚持自我的同时，回应他人是否也是一种必要的修养？`,
    oneMoreQuestion: (obj) =>
      `如果每个人都在追求「${obj.coreObject}」，谁来承担共同生活的责任？`,
  },
  kant: {
    name: "康德",
    styleName: "康德式追问",
    coreAction: "追问原则与自主",
    focus: "这是否能成为一种可以共同生活的原则？",
    lensQuestion: (obj) =>
      `这关于「${obj.coreObject}」的判断，是否能成为一种可以共同生活的原则？如果每个人都按这个逻辑生活，社会会变成什么样？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：这关于「${obj.coreObject}」的判断，是否能成为一种可以共同生活的原则？如果每个人都按这个逻辑生活，社会会变成什么样？真正值得写的方向，不是证明${obj.coreObject}的正当性，而是追问：它是否能通过普遍性的检验？`,
    oneMoreQuestion: (obj) =>
      `把「${obj.coreObject}」当作自由时，它是否能成为一种可以共同生活的原则？`,
  },
  nietzsche: {
    name: "尼采",
    styleName: "尼采式追问",
    coreAction: "区分价值创造与反应性",
    focus: "你是在创造价值，还是反向否定？",
    lensQuestion: (obj) =>
      `你是在围绕「${obj.coreObject}」创造价值，还是在用「${obj.coreObject}」来反向否定你不喜欢的世界？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：你是在围绕「${obj.coreObject}」创造价值，还是在用「${obj.coreObject}」来反向否定你不喜欢的世界？真正值得写的方向，不是重复「我有了${obj.coreObject}」这个姿态，而是追问：这个姿态里，有没有怨恨的成分？`,
    oneMoreQuestion: (obj) =>
      `我是在围绕「${obj.coreObject}」创造价值，还是在用「${obj.coreObject}」来否定我不喜欢的世界？`,
  },
  benjamin: {
    name: "本雅明",
    styleName: "本雅明式追问",
    coreAction: "追问复制与灵韵",
    focus: "当它变成可复制金句，失去了什么经验厚度？",
    lensQuestion: (obj) =>
      `当「${obj.coreObject}」变成一句可复制的话，它失去了哪些原本属于个人的经验厚度？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：当「${obj.coreObject}」变成一句可复制的话，它失去了哪些原本属于个人的经验厚度？真正值得写的方向，不是让这个句子传播得更广，而是追问：什么样的表达既能被理解，又不放弃自身的灵韵？`,
    oneMoreQuestion: (obj) =>
      `当「${obj.coreObject}」变成一句可复制的话，它失去了哪些原本属于个人的经验厚度？`,
  },
  levinas: {
    name: "列维纳斯",
    styleName: "列维纳斯式追问",
    coreAction: "唤回他者与责任",
    focus: "他人是否只是打扰，还是无法轻易取消的伦理召唤？",
    lensQuestion: (obj) =>
      `他人是否只是你追求「${obj.coreObject}」的打扰，还是无法轻易取消的伦理召唤？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：他人是否只是你追求「${obj.coreObject}」的打扰，还是无法轻易取消的伦理召唤？真正值得写的方向，不是把${obj.coreObject}建立在取消他者的基础上，而是追问：有边界地保持关系，是否也是一种更完整的${obj.coreObject}？`,
    oneMoreQuestion: (obj) =>
      `他人是否只是我追求「${obj.coreObject}」的障碍，还是我无法取消的伦理召唤？`,
  },
  deleuze: {
    name: "德勒兹",
    styleName: "德勒兹式追问",
    coreAction: "寻找差异与生成",
    focus: "你是在重复人设，还是生成新的可能？",
    lensQuestion: (obj) =>
      `你是在重复「${obj.coreObject}」这个已有形象，还是在生成属于自己的差异？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：你是在重复「${obj.coreObject}」这个已有形象，还是在生成属于自己的差异？真正值得写的方向，不是加固现有的人设，而是追问：从${obj.coreObject}出发，什么新的可能还可以被创造出来？`,
    oneMoreQuestion: (obj) =>
      `我是在重复「${obj.coreObject}」这个已有形象，还是在生成属于自己的差异？`,
  },
  foucault: {
    name: "福柯",
    styleName: "福柯式追问",
    coreAction: "拆解规训与自我技术",
    focus: "这真的是自由，还是另一套自我管理？",
    lensQuestion: (obj) =>
      `这看起来是关于「${obj.coreObject}」的自由选择，但也可能是另一套自我管理。你以为你摆脱了标准，但是否只是换了一套更精致的标准？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但这更像是在提供一种新的自我管理方式。当「${obj.coreObject}」变成一种应该抵达的状态，它也可能开始规训你。真正值得写的问题是：你以为你摆脱了标准，但是否只是换了一套更精致的标准？我是在追求${obj.coreObject}，还是在接受另一套更隐蔽的自我管理？`,
    oneMoreQuestion: (obj) =>
      `当我追求「${obj.coreObject}」时，我是在获得自由，还是在接受另一套更隐蔽的自我管理？`,
  },
  beauvoir: {
    name: "波伏娃",
    styleName: "波伏娃式追问",
    coreAction: "追问处境中的自由",
    focus: "你说自由时，有没有看见这个选择的处境？",
    lensQuestion: (obj) =>
      `当我说「${obj.coreObject}」时，我是否看见了这个选择背后的处境？这个选择是凭空发生的，还是在某种结构中被塑造的？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：当我说「${obj.coreObject}」时，我是否看见了这个选择背后的处境？真正值得写的方向，不是把${obj.coreObject}写成一种抽象的姿态，而是追问：在什么条件下，${obj.coreObject}才成为可能？当${obj.coreObject}变成新的标准时，它是否也在制造新的焦虑？`,
    oneMoreQuestion: (obj) =>
      `当我说「${obj.coreObject}」时，我是否看见了这个选择背后的处境？`,
  },
  habermas: {
    name: "哈贝马斯",
    styleName: "哈贝马斯式追问",
    coreAction: "拉回沟通与公共理性",
    focus: "如果每个人都退回自我表达，理解如何可能？",
    lensQuestion: (obj) =>
      `如果每个人都退回「${obj.coreObject}」而拒绝沟通，公共理解还如何可能？`,
    letterTemplate: (obj) =>
      `你原来的句子不是没有价值。${obj.surfaceAttraction}。但我想问你：如果每个人都退回「${obj.coreObject}」而拒绝沟通，公共理解还如何可能？真正值得写的方向，不是把${obj.coreObject}当成拒绝交往的理由，而是追问：自由不是拒绝沟通，而是有选择地、有尊严地保持沟通。`,
    oneMoreQuestion: (obj) =>
      `如果我因为疲惫而拒绝所有公共沟通，我获得的是自由，还是一个越来越无法理解他人的自己？`,
  },
};

export const objectTemplates = {
  solitude_aesthetic: {
    coreObject: "独处",
    surfaceAttraction: "它把自由变成了一个安静、好看的独处画面",
    hiddenTension: "独处到底是主动选择，还是关系疲惫后的自我保护",
    deeperQuestion: "当自由被视觉化为咖啡、读书、独处等生活方式元素时，我们是否正在把自由从一种能力变成一张好看的图片",
    optionSet: [
      "A. 我想表达独处真的让我自由",
      "B. 我想表达关系让我疲惫",
      "C. 我想表达我不想再解释自己",
      "D. 我只是觉得这个画面很有氛围",
    ],
    round2Options: [
      "A. 我想继续保留这个独处画面",
      "B. 我更想写独处背后的疲惫",
      "C. 我想写独处和关系的冲突",
      "D. 我想写独处为什么会被包装成一种人设",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  relaxation_philosophy: {
    coreObject: "松弛感",
    surfaceAttraction: "它把疲惫后的放松包装成一种高级精神状态",
    hiddenTension: "松弛感是自由，还是一种新的自我要求",
    deeperQuestion: "当「松弛感」本身已经成为一种新的社会规范，追求松弛是否只是从一种规训转向了另一种更隐蔽的规训",
    optionSet: [
      "A. 我想表达人不该一直紧绷",
      "B. 我想表达低耗生活很重要",
      "C. 我担心松弛感也变成一种人设",
      "D. 我只是想写一种舒服的生活状态",
    ],
    round2Options: [
      "A. 我想继续赞美松弛",
      "B. 我想写松弛背后的疲惫",
      "C. 我想写松弛与绩效的冲突",
      "D. 我想写松弛如何变成新任务",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  clear_persona: {
    coreObject: "清醒",
    surfaceAttraction: "它把「不解释」「不在乎」包装成一种成熟的精神姿态",
    hiddenTension: "清醒是理解了问题，还是不再允许自己受影响",
    deeperQuestion: "「清醒」是否正在成为一套新的精神盔甲——不是因为我们真的看透了，而是因为我们不想再受伤了",
    optionSet: [
      "A. 我想表达成熟就是不再解释",
      "B. 我想表达我不想再被消耗",
      "C. 我担心自己是在用清醒包装冷漠",
      "D. 我只是想写一种体面的边界感",
    ],
    round2Options: [
      "A. 我想保留清醒人设",
      "B. 我想写清醒背后的疲惫",
      "C. 我想写清醒与脆弱的冲突",
      "D. 我想写清醒为什么变成一种标准",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  anti_relation_freedom: {
    coreObject: "远离关系",
    surfaceAttraction: "它把自由等同于远离消耗、退出关系",
    hiddenTension: "退出关系是主动选择，还是无力修复后的自我保护",
    deeperQuestion: "如果自由被定义为「不需要任何人」，这种自由是否也在悄悄取消人之为人的伦理性",
    optionSet: [
      "A. 我想表达关系确实在消耗我",
      "B. 我想表达我想保护自己",
      "C. 我担心退出变成了逃避",
      "D. 我只是想写独处的价值",
    ],
    round2Options: [
      "A. 我想继续写远离关系的自由",
      "B. 我想写关系中的疲惫来源",
      "C. 我想写自由与责任的张力",
      "D. 我想写退出为何看起来高级",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  existential_slack: {
    coreObject: "无意义",
    surfaceAttraction: "它用「无意义」消解了一切追问的压力",
    hiddenTension: "摆烂是接受了虚无，还是放弃了追问",
    deeperQuestion: "「人生无意义」这句话本身，是否恰恰证明了说话的人还在乎意义——只是暂时找不到",
    optionSet: [
      "A. 我想表达认真就输了",
      "B. 我想表达人生确实荒诞",
      "C. 我担心摆烂是在逃避痛苦",
      "D. 我只是想写一种洒脱的态度",
    ],
    round2Options: [
      "A. 我想继续写无意义的洒脱",
      "B. 我想写无意义背后的痛苦",
      "C. 我想写无意义与追问的冲突",
      "D. 我想写为什么说无意义反而很用力",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  strong_subject: {
    coreObject: "强大",
    surfaceAttraction: "它把「强大」「掌控」包装成一种值得追求的主体姿态",
    hiddenTension: "强者姿态是真正的力量，还是受伤的反弹",
    deeperQuestion: "当「成为强者」变成一种必须维持的姿态时，这种「强大」是否也正在成为一种新的枷锁",
    optionSet: [
      "A. 我想表达人必须变强",
      "B. 我想表达我不再做弱者",
      "C. 我担心强大是在掩盖脆弱",
      "D. 我只是想写一种不服输的态度",
    ],
    round2Options: [
      "A. 我想继续写强者姿态",
      "B. 我想写强大背后的恐惧",
      "C. 我想写强大与脆弱的冲突",
      "D. 我想写强者人设如何规训自己",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  gender_independence: {
    coreObject: "独立",
    surfaceAttraction: "它把「独立女性」包装成一个清醒、自主、不被定义的标准形象",
    hiddenTension: "独立是在什么处境中才成为可能的选择",
    deeperQuestion: "当「独立女性」变成一个新的标准人设时，它是否也正在成为一种新的规训",
    optionSet: [
      "A. 我想表达女性应该独立",
      "B. 我想表达我不想被关系束缚",
      "C. 我担心独立也变成新标准",
      "D. 我只是想写女性自主的姿态",
    ],
    round2Options: [
      "A. 我想继续写独立女性",
      "B. 我想写独立背后的结构性压力",
      "C. 我想写独立与关系的冲突",
      "D. 我想写独立为什么变成新任务",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  quote_replication: {
    coreObject: "金句",
    surfaceAttraction: "它用绝对化词汇把个人感受包装成普遍真理",
    hiddenTension: "当思想被压缩成一句绝对判断时，它失去了什么复杂性",
    deeperQuestion: "当「真正」「所有」「永远」这些绝对化词汇被用来包装个人感受时，它们是在传递真理，还是在用修辞制造一种虚假的确定性",
    optionSet: [
      "A. 我想表达一个我确信的真理",
      "B. 我想写一句容易被传播的话",
      "C. 我担心金句正在替代思考",
      "D. 我只是觉得这句话说得好",
    ],
    round2Options: [
      "A. 我想继续写绝对判断",
      "B. 我想写金句背后的复杂感受",
      "C. 我想写传播与深度的冲突",
      "D. 我想写为什么人们需要金句",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  public_discussion_retreat: {
    coreObject: "不解释",
    surfaceAttraction: "它把「不解释」「不参与」包装成成熟和自由的标志",
    hiddenTension: "退回自己是保护，还是放弃了共同生活的责任",
    deeperQuestion: "当「不解释」「不参与」被当成成熟和自由的标志时，我们是否正在用个人自由的名义，悄悄瓦解公共生活的基础",
    optionSet: [
      "A. 我想表达解释是多余的",
      "B. 我想表达公共讨论让我疲惫",
      "C. 我担心退场是在放弃责任",
      "D. 我只是想保护自己的精力",
    ],
    round2Options: [
      "A. 我想继续写退场的高贵",
      "B. 我想写退场背后的沟通疲惫",
      "C. 我想写个人自由与公共责任的张力",
      "D. 我想写为什么退场看起来像清醒",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
  vague_concept: {
    coreObject: "这个词",
    surfaceAttraction: "它有一种模糊的吸引力，但还没有被展开成一个问题",
    hiddenTension: "这个词打动你，是因为它解释了你，还是替你遮住了一个更难说清的问题",
    deeperQuestion: "一个单独的概念还没有成为一个可以被追问的表达，它需要场景、冲突和具体问题，才能长出思想",
    optionSet: [
      "A. 我想围绕这个词展开感受",
      "B. 我想写这个词让我想到的具体场景",
      "C. 我担心这个词太抽象了",
      "D. 我只是先写下这个词，还没想好",
    ],
    round2Options: [
      "A. 我想继续保留这个词",
      "B. 我想写这个词背后的具体困惑",
      "C. 我想写这个词在什么场景中才成立",
      "D. 我想写为什么这个词现在打动我",
    ],
    round3Options: [
      "A. 生成创作主线",
      "B. 我想换一位思想家追问",
      "C. 我想回到原句重新改写",
      "D. 我想保留这个问题继续写",
    ],
  },
};
