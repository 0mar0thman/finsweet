/**
 * lang.js — Language Switcher (Arabic ↔ English)
 * Works across all pages. Stores preference in localStorage.
 */

const TRANSLATIONS = {

  /* ─────────────── SHARED / NAVBAR ─────────────── */
  nav_home:       { ar: 'الرئيسية',        en: 'Home' },
  nav_about:      { ar: 'من نحن',           en: 'About Us' },
  nav_features:   { ar: 'المميزات',         en: 'Features' },
  nav_pricing:    { ar: 'الأسعار',          en: 'Pricing' },
  nav_faq:        { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  nav_blog:       { ar: 'المدونة',          en: 'Blog' },
  nav_contact:    { ar: 'تواصل معنا',       en: 'Contact Us' },

  /* ─────────────── FOOTER ─────────────── */
  footer_desc:    { ar: 'نحن دائماً منفتحون لمناقشة مشروعك وتطوير حضورك الرقمي على الإنترنت.', en: 'We are always open to discuss your project and improve your online presence.' },
  footer_email_label: { ar: 'راسلنا على',  en: 'Email me at' },
  footer_call_label:  { ar: 'اتصل بنا',   en: 'Call us' },
  footer_talk:    { ar: 'لنتحدث!',         en: "Let's Talk!" },
  footer_talk_desc: { ar: 'نحن دائماً منفتحون لمناقشة مشروعك وتحسين حضورك الإلكتروني ومساعدتك في تحديات التصميم.', en: 'We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.' },
  footer_copy:    { ar: 'حقوق النشر 2024، Finsweet.com', en: 'Copyright 2024, Finsweet.com' },

  /* ─────────────── INDEX ─────────────── */
  hero_title:     { ar: 'نبني مواقع إلكترونية استثنائية للشركات الناشئة', en: 'Building stellar websites for early startups' },
  hero_subtitle:  { ar: 'نصمم تجارب رقمية عالية الأداء تُساعد الشركات على النمو — من الاستراتيجية والتصميم إلى التطوير الاحترافي الدقيق.', en: 'We craft high-performance digital experiences that help startups grow — from strategy and design to pixel-perfect development.' },
  hero_cta1:      { ar: 'استعرض أعمالنا',  en: 'View our work' },
  hero_cta2:      { ar: 'عرض الأسعار',     en: 'View Pricing' },
  stat_users:     { ar: 'مستخدم فينسويت',  en: 'Finsweet Users' },

  how_eyebrow:    { ar: 'طريقة العمل',     en: 'How We Work' },
  how_title:      { ar: 'كيف نعمل معك',   en: 'How we work with you' },
  how_view_all:   { ar: 'عرض جميع الأعمال', en: 'View all work' },
  how_c1_title:   { ar: 'التخطيط الاستراتيجي', en: 'Strategic Planning' },
  how_c1_desc:    { ar: 'نبدأ بفهم عميق لأهدافك وجمهورك المستهدف لوضع خطة واضحة.', en: 'We start with a deep understanding of your goals and target audience to build a clear roadmap.' },
  how_c2_title:   { ar: 'التصميم الإبداعي', en: 'Creative Design' },
  how_c2_desc:    { ar: 'نصمم واجهات جذابة تعكس هوية علامتك التجارية وتُبهر زوارك.', en: 'We craft compelling interfaces that reflect your brand identity and delight your visitors.' },
  how_c3_title:   { ar: 'التطوير الاحترافي', en: 'Professional Development' },
  how_c3_desc:    { ar: 'نحوّل التصاميم إلى مواقع سريعة وموثوقة بأحدث تقنيات الويب.', en: 'We turn designs into fast, reliable websites using the latest web technologies.' },
  how_c4_title:   { ar: 'الدعم المستمر',   en: 'Ongoing Support' },
  how_c4_desc:    { ar: 'نبقى بجانبك بعد الإطلاق لضمان استمرار نجاح مشروعك الرقمي.', en: 'We stay by your side after launch to ensure the continued success of your digital project.' },

  proj_eyebrow:   { ar: 'أعمالنا',         en: 'Our Work' },
  proj_title:     { ar: 'أبرز مشاريعنا',  en: 'Featured Projects' },
  proj_more:      { ar: 'المزيد من الأعمال', en: 'More work' },
  proj1_title:    { ar: 'تصميم واجهة مستخدم متكاملة', en: 'Complete UI Design' },
  proj1_desc:     { ar: 'مشروع تصميم شامل لمنصة تعليمية رقمية', en: 'Full design project for a digital learning platform' },
  proj2_title:    { ar: 'تطبيق موبايل',   en: 'Mobile App' },
  proj2_desc:     { ar: 'تجربة مستخدم سلسة', en: 'Smooth user experience' },
  proj3_title:    { ar: 'هوية بصرية',     en: 'Visual Identity' },
  proj3_desc:     { ar: 'تصميم علامة تجارية', en: 'Brand design' },
  proj_link:      { ar: 'عرض المشروع',    en: 'View Project' },

  feat_eyebrow:   { ar: 'لماذا نحن',      en: 'Why Us' },
  feat_title:     { ar: 'مميزات العمل معنا', en: 'Benefits of working with us' },
  feat1_title:    { ar: 'تخصيص كامل بسهولة', en: 'Customize with ease' },
  feat1_desc:     { ar: 'نمنحك تحكماً كاملاً في تصميم موقعك ليعكس هوية علامتك التجارية بدقة.', en: 'We give you full control over your site design to accurately reflect your brand identity.' },
  feat2_title:    { ar: 'متجاوب بشكل مثالي', en: 'Perfectly Responsive' },
  feat2_desc:     { ar: 'مواقعنا تعمل بشكل احترافي على جميع الأجهزة من الهاتف حتى الشاشات الكبيرة.', en: 'Our sites work perfectly on all devices from phones to large screens.' },
  feat3_title:    { ar: 'دعم ودّي على مدار الساعة', en: 'Friendly 24/7 Support' },
  feat3_desc:     { ar: 'فريقنا متاح دائماً للإجابة على استفساراتك وحل أي مشكلة تواجهها.', en: 'Our team is always available to answer your questions and solve any problem you face.' },
  feat4_title:    { ar: 'تسليم سريع',     en: 'Quick Delivery' },
  feat4_desc:     { ar: 'نضمن تسليم مشاريعك في الوقت المحدد دون المساس بجودة التصميم.', en: 'We guarantee on-time delivery without compromising design quality.' },
  feat5_title:    { ar: 'نهج تعاوني',     en: 'Hands-on Approach' },
  feat5_desc:     { ar: 'نعمل معك جنباً إلى جنب في كل مرحلة لضمان تحقيق رؤيتك بالكامل.', en: 'We work side by side with you at every stage to ensure your vision is fully realized.' },
  feat6_title:    { ar: 'أداء عالي وسرعة فائقة', en: 'High Performance & Speed' },
  feat6_desc:     { ar: 'نُحسّن موقعك ليحقق أعلى درجات الأداء ورضا المستخدمين.', en: 'We optimize your site to achieve the highest performance scores and user satisfaction.' },

  test_eyebrow:   { ar: 'آراء العملاء',   en: 'Testimonials' },
  test_title:     { ar: 'ماذا يقول عملاؤنا عنا', en: 'What our clients say about us' },
  test_desc:      { ar: 'نفخر بثقة عملائنا وشهاداتهم التي تُعبّر عن تجربتهم الحقيقية معنا.', en: 'We take pride in our clients\' trust and testimonials that reflect their genuine experience with us.' },
  test_quote:     { ar: 'أفضل وكالة تعاملت معها على الإطلاق. يفهمون منتجنا تماماً ويستطيعون إضافة مميزات جديدة مع التركيز الكبير على تجربة المستخدم. النتائج فاقت توقعاتنا بمراحل.', en: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus on user experience. Results exceeded our expectations." },
  test_name:      { ar: 'جني ويلسون',     en: 'Jenny Wilson' },
  test_role:      { ar: 'نائبة رئيس التسويق', en: 'Vice President of Marketing' },

  faq_eyebrow:    { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  faq_title:      { ar: 'الأسئلة الأكثر شيوعاً', en: 'Frequently asked questions' },
  faq_more:       { ar: 'تواصل معنا للمزيد', en: 'Contact us for more info' },
  faq1_q:         { ar: 'كم يستغرق تنفيذ المشروع؟', en: 'How much time does it take?' },
  faq1_a:         { ar: 'يعتمد ذلك على حجم المشروع وتعقيده. عادةً، يستغرق الموقع البسيط من أسبوع إلى أسبوعين، بينما تستغرق المشاريع الأكبر ما بين 4-8 أسابيع.', en: 'It depends on the size and complexity of the project. Usually a simple site takes 1-2 weeks, while larger projects take 4-8 weeks.' },
  faq2_q:         { ar: 'ما هي تقنيات التطوير التي تستخدمونها؟', en: 'What is your class naming convention?' },
  faq3_q:         { ar: 'كيف يتم التواصل خلال مراحل المشروع؟', en: 'How do you communicate?' },
  faq4_q:         { ar: 'هل تستطيعون التعامل مع المشاريع الكبيرة؟', en: 'I have a bigger project. Can you handle it?' },
  faq5_q:         { ar: 'هل تقدمون خدمات الصيانة بعد الإطلاق؟', en: 'Do you offer post-launch maintenance?' },

  inq_title:      { ar: 'نبني مواقع استثنائية للشركات الناشئة', en: 'Building stellar websites for early startups' },
  inq_desc:       { ar: 'دعنا نُحوّل فكرتك إلى تجربة رقمية مذهلة تُبهر عملاءك وتُحقق أهدافك.', en: 'Let us turn your idea into an amazing digital experience that wows your customers and achieves your goals.' },
  inq_form_title: { ar: 'أرسل استفساراً', en: 'Send an Inquiry' },
  inq_form_desc:  { ar: 'يسعدنا سماع فكرتك والبدء بمناقشة مشروعك.', en: 'We\'d love to hear your idea and start discussing your project.' },
  inq_name_ph:    { ar: 'اسمك الكريم',    en: 'Your Name' },
  inq_email_ph:   { ar: 'البريد الإلكتروني', en: 'Email' },
  inq_url_ph:     { ar: 'رابط تصميم Figma (اختياري)', en: 'Paste your Figma design URL' },
  inq_btn:        { ar: 'أرسل الاستفسار ↙', en: 'Send an Inquiry ↗' },
  inq_or:         { ar: 'أو تواصل معنا مباشرة ←', en: 'Or get in touch with us →' },

  blog_eyebrow:   { ar: 'آخر المقالات',   en: 'Latest Posts' },
  blog_title:     { ar: 'مدونتنا',         en: 'Our blog' },
  blog_view_all:  { ar: 'جميع المقالات',  en: 'View all posts' },
  blog_date1:     { ar: '19 يناير 2022',  en: '19 Jan 2022' },
  blog_post_title:{ ar: 'كيف حقق مستقل بمفرده دخلاً بلغ 100 ألف دولار خلال 14 شهراً', en: 'How one Webflow user grew his single person consultancy from $0–100K in 14 months' },
  blog_post_exc:  { ar: 'اكتشف كيف غيّر التحوّل نحو Webflow استراتيجية هذا المستقل وساعده على جذب عملاء أفضل.', en: 'See how pivoting to Webflow changed one person\'s sales strategy and allowed him to attract better clients.' },
  blog_read_more: { ar: 'اقرأ المزيد',    en: 'Read more' },

  /* ─────────────── ABOUT US ─────────────── */
  about_eyebrow:    { ar: 'من نحن',         en: 'About us' },
  about_h1:         { ar: 'تصاميمنا تحلّ المشكلات الحقيقية', en: 'Our designs solve problems' },
  about_intro:      { ar: 'نؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو حل ذكي لمشكلة حقيقية. نعمل مع فرق طموحة لخلق تجارب رقمية لا تُنسى.', en: 'We believe great design isn\'t just a pretty face — it\'s a smart solution to a real problem. We work with ambitious teams to create unforgettable digital experiences.' },
  who_eyebrow:      { ar: 'هويتنا',         en: 'Who we are' },
  who_h1:           { ar: 'تركيز على الأهداف', en: 'Goal focused' },
  who_p1:           { ar: 'كل مشروع نتعامل معه ينطلق من فهم عميق لأهدافك التجارية. نضع النتائج الملموسة في صميم كل قرار تصميمي نتخذه.', en: 'Every project we take on starts with a deep understanding of your business goals. We put tangible results at the heart of every design decision we make.' },
  who_h2:           { ar: 'تحسين مستمر',   en: 'Continuous improvement' },
  who_p2:           { ar: 'نؤمن بأن التميز رحلة لا وجهة. نواصل التعلم والتطور لنقدم لك دائماً أفضل ما في مجال التصميم والتطوير.', en: 'We believe excellence is a journey, not a destination. We keep learning and evolving to always deliver the best in design and development.' },
  process_eyebrow:  { ar: 'طريقة عملنا',   en: 'How we do it' },
  process_title:    { ar: 'المنهجية التي نتبعها', en: 'The process we follow' },
  step1_title:      { ar: 'التخطيط',        en: 'Planning' },
  step1_desc:       { ar: 'نُحلّل احتياجاتك ونضع خارطة طريق واضحة للمشروع.', en: 'We analyze your needs and lay out a clear roadmap for the project.' },
  step2_title:      { ar: 'التصوّر',        en: 'Conception' },
  step2_desc:       { ar: 'نُحوّل الأفكار إلى مفاهيم بصرية واضحة ومقنعة.', en: 'We transform ideas into clear and compelling visual concepts.' },
  step3_title:      { ar: 'التصميم',        en: 'Design' },
  step3_desc:       { ar: 'نصمم واجهات جذابة ومتناسقة تعكس هويتك البصرية.', en: 'We design attractive, cohesive interfaces that reflect your visual identity.' },
  step4_title:      { ar: 'التطوير',        en: 'Development' },
  step4_desc:       { ar: 'نبني الكود بأعلى معايير الجودة والأداء.', en: 'We build code to the highest standards of quality and performance.' },
  mission_eyebrow:  { ar: 'رسالتنا',        en: 'Our Mission' },
  mission_title:    { ar: 'إلهام، ابتكار، مشاركة', en: 'Inspire, Innovate, Share' },
  mission_desc:     { ar: 'رسالتنا هي إلهام المبدعين وتمكين أصحاب الأعمال من خلال تقديم حلول تصميمية مبتكرة تُحدث فرقاً حقيقياً في أعمالهم الرقمية.', en: 'Our mission is to inspire creators and empower business owners by delivering innovative design solutions that make a real difference in their digital businesses.' },
  vision_eyebrow:   { ar: 'رؤيتنا',         en: 'Our Vision' },
  vision_title:     { ar: 'تركيز تام على الهدف', en: 'Laser focus' },
  vision_desc:      { ar: 'رؤيتنا أن نكون الشريك الأول لكل شركة ناشئة تريد بناء حضور رقمي قوي ومؤثر في عالم متسارع التغير.', en: 'Our vision is to be the go-to partner for every startup that wants to build a strong, impactful digital presence in a rapidly changing world.' },
  benefits_title:   { ar: 'فوائد العمل معنا', en: 'The benefits of working with us' },
  ben1_title:       { ar: 'تخصيص بسهولة تامة', en: 'Customize with ease' },
  ben1_desc:        { ar: 'نمنحك مرونة كاملة لتخصيص كل جانب من جوانب تصميمك ليتطابق مع رؤيتك.', en: 'We give you full flexibility to customize every aspect of your design to match your vision.' },
  ben2_title:       { ar: 'متجاوب بشكل مثالي', en: 'Perfectly Responsive' },
  ben2_desc:        { ar: 'مواقعنا مُحسَّنة لتعمل بكمال على جميع الأجهزة والشاشات بدون أي استثناء.', en: 'Our sites are optimized to work perfectly on all devices and screens without exception.' },
  ben3_title:       { ar: 'دعم ودّي دائم',  en: 'Friendly Support' },
  ben3_desc:        { ar: 'فريقنا المتخصص جاهز دائماً لمساعدتك والإجابة على جميع استفساراتك.', en: 'Our specialized team is always ready to help you and answer all your questions.' },
  team_eyebrow:     { ar: 'فريقنا',          en: 'Our people' },
  team_title:       { ar: 'تعرّف على فريقنا', en: 'Meet our team' },
  team1_name:       { ar: 'جون سميث',        en: 'John Smith' },
  team1_role:       { ar: 'المدير التنفيذي', en: 'CEO' },
  team2_name:       { ar: 'سيمون آدامز',     en: 'Simon Adams' },
  team2_role:       { ar: 'المدير التقني',   en: 'CTO' },
  team3_name:       { ar: 'بول جونز',        en: 'Paul Jones' },
  team3_role:       { ar: 'مدير التصميم',   en: 'Design Lead' },
  team4_name:       { ar: 'سارة هاردين',     en: 'Sara Hardin' },
  team4_role:       { ar: 'مدير المشاريع',  en: 'Project Manager' },

  /* ─────────────── FEATURES PAGE ─────────────── */
  fp_eyebrow:    { ar: 'ما نقدمه',          en: 'What we offer' },
  fp_h1:         { ar: 'جميع المميزات التي تحتاجها', en: 'All the features you need' },
  fp_desc:       { ar: 'نوفر لك مجموعة شاملة من الأدوات والخدمات لتحويل فكرتك إلى منتج رقمي ناجح ومؤثر.', en: 'We provide you with a comprehensive set of tools and services to turn your idea into a successful digital product.' },
  fp_cta:        { ar: 'عرض الأسعار',       en: 'View Pricing' },
  fr1_eyebrow:   { ar: 'منهجية Client-First', en: 'Use Client-first' },
  fr1_title:     { ar: 'أفضل الوكالات والمستقلين حول العالم يعتمدون منهجيتنا', en: 'Top agencies and freelancers around the world use Client-first' },
  fr1_desc:      { ar: 'منهجيتنا في التصميم والتطوير أصبحت المعيار الذهبي الذي تعتمده فرق الويب الاحترافية حول العالم.', en: 'Our design and development methodology has become the gold standard adopted by professional web teams worldwide.' },
  fr2_eyebrow:   { ar: 'جولات مراجعة مجانية', en: 'Free Revision Rounds' },
  fr2_title:     { ar: 'احصل على مراجعات مجانية وأسبوع صيانة مجانية', en: 'Get free Revisions and one week of free maintenance' },
  fr2_desc:      { ar: 'نؤمن بأن رضاك هو أولويتنا القصوى. نوفر جولات مراجعة غير محدودة حتى تكون راضياً 100% عن النتيجة.', en: 'We believe your satisfaction is our top priority. We offer unlimited revision rounds until you are 100% happy with the result.' },
  fr3_eyebrow:   { ar: 'دعم على مدار الساعة', en: '24/7 Support' },
  fr3_title:     { ar: 'نوفر دعماً أولوياً على مدار 24 ساعة طوال الأسبوع', en: 'Working with us, you will be getting 24/7 priority support' },
  fr3_desc:      { ar: 'عند التعامل معنا، تضمن الحصول على دعم فوري ومتخصص في أي وقت تحتاجه.', en: 'When working with us, you are guaranteed to get immediate, specialized support whenever you need it.' },
  fr4_eyebrow:   { ar: 'تسليم سريع',        en: 'Quick Delivery' },
  fr4_title:     { ar: 'تسليم مضمون خلال أسبوع لمواقع خمس صفحات', en: 'Guaranteed 1 week delivery for standard five pager website' },
  fr4_desc:      { ar: 'نلتزم بجداول زمنية واضحة ودقيقة. الموقع القياسي جاهز خلال أسبوع واحد فقط.', en: 'We commit to clear and precise timelines. A standard site is ready in just one week.' },

  /* ─────────────── PRICING PAGE ─────────────── */
  pr_eyebrow:    { ar: 'الباقات',           en: 'Plans' },
  pr_title:      { ar: 'خطط الأسعار لدينا', en: 'Our Pricing Plans' },
  pr_desc:       { ar: 'عندما تكون مستعداً للانتقال إلى ما هو أبعد من مجرد النماذج الأولية، نحن هنا لمساعدتك.', en: 'When you\'re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life.' },
  plan1_per:     { ar: 'لكل تصميم',         en: 'Per Design' },
  plan1_name:    { ar: 'صفحة هبوط',         en: 'Landing Page' },
  plan1_desc:    { ar: 'مثالي للشركات الناشئة التي تحتاج إلى صفحة هبوط احترافية وجذابة.', en: 'When you\'re ready to go beyond prototyping in Figma,' },
  plan2_per:     { ar: 'تصاميم متعددة',     en: 'Multi Design' },
  plan2_name:    { ar: 'موقع متكامل',        en: 'Website Page' },
  plan2_desc:    { ar: 'الباقة الأكثر شيوعاً للشركات التي تريد حضوراً رقمياً قوياً ومتكاملاً.', en: 'When you\'re ready to go beyond prototyping in Figma, Webflow\'s ready to help.' },
  plan3_per:     { ar: 'لكل تصميم',         en: 'Per Design' },
  plan3_name:    { ar: 'مشروع معقد',         en: 'Complex Project' },
  plan3_desc:    { ar: 'للمشاريع الكبيرة التي تتطلب حلولاً مخصصة وعملاً تفصيلياً متقدماً.', en: 'When you\'re ready to go beyond prototyping in Figma,' },
  plan_feat1:    { ar: 'جميع الروابط المحدودة', en: 'All limited links' },
  plan_feat2:    { ar: 'منصة تحليلات خاصة', en: 'Own analytics platform' },
  plan_feat3:    { ar: 'دعم عبر المحادثة',  en: 'Chat support' },
  plan_feat4:    { ar: 'تحسين الهاشتاقات', en: 'Optimize hashtags' },
  plan_feat5:    { ar: 'مستخدمون غير محدودين', en: 'Unlimited users' },
  plan_cta:      { ar: 'ابدأ الآن',         en: 'Get started' },

  /* ─────────────── BLOG PAGE ─────────────── */
  blog_featured: { ar: 'مقال مميز',         en: 'Featured Post' },
  blog_f_title:  { ar: 'دراسة حالة في تجربة المستخدم: خلق بيئة دراسية مثالية للطلاب', en: 'A UX Case Study on Creating a Studious Environment for Students' },
  blog_f_meta:   { ar: 'أندرو جونسون · نُشر في 27 يناير 2021', en: 'Andrew Jonson · Posted on 27th January 2021' },
  blog_f_desc:   { ar: 'يبدو أننا وصلنا إلى ارتفاع شاهق في الغلاف الجوي، حيث كانت السماء سوداء داكنة وتوقفت النجوم عن الوميض. استكشاف عميق لتحسين تجربة التعلم الرقمي.', en: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon.' },
  blog_read_full:{ ar: 'اقرأ المقال كاملاً', en: 'Read full article' },
  blog_all_eye:  { ar: 'جميع المقالات',     en: 'All Posts' },
  blog_our_blog: { ar: 'مدونتنا',           en: 'Our blog' },

  /* ─────────────── CONTACT PAGE ─────────────── */
  con_eyebrow:   { ar: 'تواصل معنا',        en: 'Get in touch' },
  con_h1:        { ar: 'تواصل معنا',        en: 'Contact Us' },
  con_desc:      { ar: 'يسعدنا سماع منك. أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
  con_start:     { ar: 'لنبدأ محادثة',      en: "Let's start a conversation" },
  con_email_lbl: { ar: 'البريد الإلكتروني', en: 'Email' },
  con_phone_lbl: { ar: 'الهاتف',            en: 'Phone' },
  con_addr_lbl:  { ar: 'العنوان',           en: 'Address' },
  con_addr_val:  { ar: '123 شارع التصميم، سان فرانسيسكو، كاليفورنيا', en: '123 Design Street, San Francisco, CA' },
  con_name_lbl:  { ar: 'الاسم',             en: 'Name' },
  con_name_ph:   { ar: 'أدخل اسمك الكريم', en: 'Enter your name' },
  con_email2_lbl:{ ar: 'البريد الإلكتروني', en: 'Email' },
  con_email2_ph: { ar: 'أدخل بريدك الإلكتروني', en: 'Enter your email' },
  con_subj_lbl:  { ar: 'الموضوع',           en: 'Subject' },
  con_subj_ph:   { ar: 'موضوع رسالتك',      en: 'Provide context' },
  con_phone2_lbl:{ ar: 'رقم الهاتف',        en: 'Phone' },
  con_phone2_ph: { ar: 'رقم هاتفك',         en: 'Your phone number' },
  con_msg_lbl:   { ar: 'الرسالة',           en: 'Message' },
  con_msg_ph:    { ar: 'اكتب رسالتك أو استفسارك هنا...', en: 'Write your question here' },
  con_send:      { ar: 'إرسال الرسالة',     en: 'Send Message' },

  /* ─────────────── PRIVACY PAGE ─────────────── */
  priv_eyebrow:  { ar: 'قانوني',            en: 'Legal' },
  priv_h1:       { ar: 'سياسة الخصوصية',   en: 'Privacy Policy' },
  priv_desc:     { ar: 'نلتزم بحماية خصوصيتك وبياناتك الشخصية. اقرأ سياستنا الشاملة لفهم كيفية التعامل مع معلوماتك.', en: "When you're ready to go beyond prototyping in Figma, Webflow's ready to help you bring your designs to life." },

  /* ─────────────── WORK PAGE ─────────────── */
  work_eyebrow:  { ar: 'معرض الأعمال',      en: 'Portfolio' },
  work_h1:       { ar: 'معرض أعمالنا',      en: 'Our Work Portfolio' },
  work_desc:     { ar: 'نساعد الفرق على إنشاء منتجات رقمية رائعة من خلال توفير الأدوات والتقنيات التي تجعل عملية التصميم والتطوير في متناول الجميع.', en: 'We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.' },
  work_all:      { ar: 'الكل',              en: 'All' },
  work_ui:       { ar: 'تصميم واجهات',     en: 'UI Design' },
  work_wf:       { ar: 'تصميم Webflow',    en: 'Webflow Design' },
  work_fig:      { ar: 'تصميم Figma',      en: 'Figma Design' },
  work_t1:       { ar: 'قالب 1',           en: 'Template 1' },
  work_t2:       { ar: 'قالب 2',           en: 'Template 2' },
  work_t3:       { ar: 'قالب 3',           en: 'Template 3' },
  work_t4:       { ar: 'قالب 4',           en: 'Template 4' },
  work_t5:       { ar: 'قالب 5',           en: 'Template 5' },
  work_t6:       { ar: 'قالب 6',           en: 'Template 6' },
  work_port_desc:{ ar: 'تصميم واجهة مستخدم متكاملة لمنصة رقمية مبتكرة بأعلى معايير تجربة المستخدم.', en: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.' },
  work_view:     { ar: 'عرض المشروع',       en: 'View Portfolio' },
  work_cta_title:{ ar: 'لنبني شيئاً رائعاً معاً', en: "Let's build something great together" },
  work_cta_desc: { ar: 'فكرتك تستحق أن تتحول إلى واقع رقمي مذهل. نحن هنا لنساعدك في كل خطوة من رحلتك.', en: 'Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet.' },

  /* ─────────────── READ BLOG ─────────────── */
  rb_cat:        { ar: 'تجربة المستخدم · 27 يناير 2021', en: 'UX Design · 27th January 2021' },
  rb_h1:         { ar: 'دراسة حالة في UX: خلق بيئة دراسية مثالية ومُحفِّزة للطلاب', en: 'A UX Case Study on Creating a Studious Environment for Students' },
  rb_author:     { ar: 'أندرو جونسون',      en: 'Andrew Jonson' },
  rb_date:       { ar: 'نُشر في 27 يناير 2021', en: 'Posted on 27th January 2021' },
  rb_back:       { ar: 'العودة إلى المدونة', en: 'Back to Blog' },

  /* ─────────────── READ MORE PRO ─────────────── */
  cs_eyebrow:    { ar: 'تصميم وتطوير الويب', en: 'Web design and development' },
  cs_h1:         { ar: 'دراسات حالة فينسويت للتصميم', en: 'Finsweet Design case studies' },
  cs_desc:       { ar: 'نستعرض في هذه الدراسة كيف قمنا بتحويل تحديات تجربة المستخدم المعقدة إلى حلول تصميمية أنيقة وفعّالة أحدثت فرقاً حقيقياً في أعمال عملائنا.', en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  cs_client:     { ar: 'العميل',             en: 'Client' },
  cs_service:    { ar: 'الخدمة',             en: 'Service' },
  cs_service_val:{ ar: 'تصميم المنتج',       en: 'Product Design' },
  cs_deliver:    { ar: 'المُنجَز',           en: 'Deliverable' },
  cs_deliver_val:{ ar: 'شاشات UI، تدفق UX ونموذج أولي', en: 'UI Screens, UX Flow & Prototype' },
  cs_about_h:    { ar: 'نبذة عن المشروع',   en: 'About the project' },
  cs_how_h:      { ar: 'كيف نفذناه',        en: 'How we do it' },
  cs_cta_title:  { ar: 'لنبني شيئاً رائعاً معاً', en: "Let's build something great together" },
  cs_cta_desc:   { ar: 'فكرتك تستحق أن تتحول إلى واقع رقمي مذهل. فريقنا جاهز للبدء معك الآن.', en: 'Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet.' },
  cs_kw:         { ar: 'الكلمات المفتاحية', en: 'Keywords' },
};

/* ═══════════════════════════════════════════════
   APPLY LANGUAGE
═══════════════════════════════════════════════ */
function applyLang(lang) {
  const isAr = lang === 'ar';

  /* document direction & lang attribute */
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  /* swap every element that has data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr'); // e.g. "placeholder"
    if (!TRANSLATIONS[key]) return;
    const text = TRANSLATIONS[key][lang];
    if (attr) {
      el.setAttribute(attr, text);
    } else {
      el.textContent = text;
    }
  });

  /* update toggle button label */
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    btn.innerHTML = isAr
      ? '<span class="lang-flag">🇬🇧</span><span class="lang-label">EN</span>'
      : '<span class="lang-flag">🇸🇦</span><span class="lang-label">عر</span>';
    btn.setAttribute('aria-label', isAr ? 'Switch to English' : 'التحويل للعربية');
  }

  /* body font */
  document.body.style.fontFamily = isAr ? "'Cairo', sans-serif" : "'DM Sans', 'Cairo', sans-serif";

  /* persist */
  localStorage.setItem('finsweet_lang', lang);
}

/* ═══════════════════════════════════════════════
   TOGGLE
═══════════════════════════════════════════════ */
function toggleLang() {
  const current = localStorage.getItem('finsweet_lang') || 'ar';
  applyLang(current === 'ar' ? 'en' : 'ar');
}

/* ═══════════════════════════════════════════════
   INIT on DOM ready
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('finsweet_lang') || 'ar';
  applyLang(saved);
});
