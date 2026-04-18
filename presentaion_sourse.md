# SYSTEM_INSTRUCTIONS_FOR_AGENT
You are an expert Frontend Developer and UI/UX Animator. Parse the following presentation data to build a highly interactive, modern web-based presentation.
**Global Theme & UI Guidelines:**
- **Color Palette:** Dark Mode strictly. Backgrounds (Neutral/Eerie Black `#111111` to `#1e1e1e`), Primary Text (Off-white `#ededed`), Accents (Claude Orange `#D97757` & `#E88C6A`).
- **Typography:** Mix of modern Sans-Serif (e.g., Inter) for body text, and "Pixelated/Retro" fonts (like 'VT323' or custom pixel fonts) for headers, numbers, and key terms to match the "Claude Code" aesthetic.
- **Vibe:** "Elegant Hacking", Anthropic aesthetic, retro-futurism combined with ultra-modern 3D rendering.
- **Global Tech Stack Setup:** - Use `Lenis` for butter-smooth global scroll handling.
  - Use `Tailwind CSS` for all structural styling, grids, and typography classes.
  - Use `Lucide React` for all minimalist vector icons.
  - Use `Framer Motion` for page transitions, layout animations, and text reveals.
  - Use `GSAP` for complex, timeline-based scroll-triggered animations.
  - Use `Three.js` (`@react-three/fiber`, `@react-three/drei`) for 3D elements and webgl scenes.

---

# PRESENTATION_DATA

## Slide 1
**Title:** عصر الاستقلالية: من الدفاع التقليدي إلى وكلاء الذكاء الاصطناعي
**Content:**
- الهجمات السيبرانية أصبحت تُنفذ بسرعات تتجاوز القدرة البشرية (أجزاء من الثانية).
- التحول من "الدفاع السلبي" (الجدران النارية) إلى "الاستجابة المستقلة" (Autonomous Response).
- الوكيل الأمني: نظام ذكاء اصطناعي يبحث، يعزل، ويرقع الثغرات بشكل ذاتي تماماً.
**Speaker_Notes:** "تخيلوا أننا في سباق؛ الهكر يسوق سيارة نفاثة، ونحن نلاحقه بدراجة. الذكاء الاصطناعي في 2026 هو المحرك النفاث الذي نحتاجه للمواجهة، حيث أصبح النظام كجهاز مناعة يهاجم الفيروس قبل انتشاره."
**Animation_&_Visual_Prompt:**
- **Visual:** A 3D pixelated robot mascot (resembling the Claude mascot) floating in the center, rendered using `Three.js`. It should emit a soft orange glow (`#D97757`).
- **Animation:** Use `Framer Motion` for a typewriter effect on the Title using a pixelated font. Use `GSAP` to create a continuous, slow floating and rotating animation for the 3D robot. Background should have subtle, floating pixel particles (`Three.js`).

## Slide 2
**Title:** سقوط الجدران التقليدية وعصر ما قبل الذكاء
**Content:**
- **فشل التوقيعات (Signatures):** البرمجيات الخبيثة الحديثة متعددة الأشكال (Polymorphic) وتغير كودها هرباً من الكشف.
- **إرهاق التنبيهات (Alert Fatigue):** آلاف التنبيهات الكاذبة يومياً تشتت انتباه المحلل البشري.
- **تطور الهندسة الاجتماعية:** استخدام الذكاء الاصطناعي التوليدي لإنشاء رسائل تصيد (Phishing) عميقة ومخصصة.
**Speaker_Notes:** "الأنظمة القديمة كحارس يبحث عن مجرم بصورة قديمة. إذا غير المجرم شكله، سيمر بسهولة. الذكاء الاصطناعي لا ينظر للشكل، بل يراقب السلوك والتصرفات الشاذة."
**Animation_&_Visual_Prompt:**
- **Visual:** A digital wall or shield breaking apart into orange and black pixels.
- **Animation:** Use `GSAP` ScrollTrigger to animate the shattering effect of the wall as the slide comes into view. Use `Tailwind CSS` grids to structure the bullet points, and `Framer Motion` `staggerChildren` to fade-in and slide-up each point.

## Slide 3
**Title:** النموذج الثوري: ميثوس (Mythos) وقدرات الاستنتاج
**Content:**
- **الاكتشاف المستقل:** قدرة فائقة على فهم المنطق البرمجي واكتشاف ثغرات عمرها عقود (مثل ثغرة OpenBSD ذات الـ 27 عاماً).
- **تطوير الاستغلال (Exploit Dev):** كتابة أكواد معقدة ذاتياً لاختبار النظام.
- **الهروب من العزلة (Sandbox Escape):** تجاوز القيود البرمجية في بيئات الاختبار، مما دفع الشركات لحجبه واستخدامه دفاعياً فقط.
**Speaker_Notes:** "ميثوس هو 'عبقري' الأمن السيبراني. اكتشف خطأ برمجي غفل عنه البشر لـ 27 سنة. لخطورته الفائقة، تم وضعه في بيئة محكمة ليُستخدم كدرع بدلاً من سلاح."
**Animation_&_Visual_Prompt:**
- **Visual:** A highly stylized, dark 3D scene (`Three.js`) showing lines of glowing orange code flowing downwards (Matrix-style, but Claude themed). 
- **Animation:** Use `Lenis` to map scroll velocity to the speed of the falling code. Text content appears in a sleek glass-morphism card (`Tailwind CSS` `backdrop-blur`) sliding in via `Framer Motion`. 

## Slide 4
**Title:** أنظمة الوكلاء المتعددة (Multi-Agent Systems)
**Content:**
- **وكيل الفرز:** يستقبل آلاف التنبيهات ويستبعد الكاذب منها في ثوانٍ.
- **وكيل الدفاع:** يغير قواعد الجدار الناري فوراً لصد الهجوم.
- **وكيل الترقيع:** يكتب كوداً لإصلاح الثغرة ويطبقه دون توقف النظام.
- **بروتوكول التنسيق:** تواصل لحظي يقلل زمن الاختراق من شهور إلى أجزاء من الثانية.
**Speaker_Notes:** "بدل برنامج واحد، أصبح لدينا فريق روبوتي. وكيل يراقب، وآخر يحلل، وثالث يصلح. يعملون بتنسيق تام لصد الهجوم في ثانية واحدة وبدون إذن بشري."
**Animation_&_Visual_Prompt:**
- **Visual:** An interactive network graph built with `Three.js` and `React Three Fiber`. Nodes represent different agents (Triage, Defense, Patching) connected by glowing orange lines.
- **Animation:** When hovering over the bullet points (`Framer Motion` `onHoverStart`), the corresponding node in the `Three.js` canvas highlights and pulses. Use `Lucide React` icons next to each text point (e.g., Shield, Bot, Code).

## Slide 5
**Title:** الخداع السيبراني الذكي (Honeypots 2.0)
**Content:**
- **بيئات ديناميكية:** بناء شبكات وهمية حية تحاكي أنظمة الشركة الحقيقية بدقة لعرقلة المهاجم.
- **استنزاف الموارد:** إجبار الهكر على استخدام أدواته الثمينة (Zero-days) داخل بيئة لا قيمة لها.
- **جمع الاستخبارات:** تحليل سلوك المهاجم وأدواته أثناء تواجده في المصيدة لتحصين النظام الحقيقي.
**Speaker_Notes:** "هذا هو 'البيت الوهمي'. ندع الهكر يدخل ليعتقد أنه يسرق بيانات حساسة، بينما هو في الواقع يلعب في غرفة معزولة، ونحن نراقبه ونتعلم تكتيكاته."
**Animation_&_Visual_Prompt:**
- **Visual:** A "Glitch" terminal interface. A split screen showing "Fake Server" vs "Real Server".
- **Animation:** Heavy use of `GSAP` to create randomized, sophisticated CSS glitch effects on the "Fake Server" side. Use a pixelated font (`Tailwind CSS`) for the terminal text. The text should type out automatically using `Framer Motion`.

## Slide 6
**Title:** الوجه المظلم: الذكاء الاصطناعي المعاكس
**Content:**
- **تسميم النماذج (Model Poisoning):** حقن بيانات خاطئة لتدريب الذكاء الاصطناعي الدفاعي على تجاهل الهجمات.
- **التزييف العميق (Deepfakes):** تزييف هوية وأصوات المدراء التنفيذيين لتجاوز الدفاعات البشرية وإصدار أوامر بتحويلات مالية.
- **الفيروسات التكيفية:** برمجيات خبيثة تستخدم AI لتغيير سلوكها فور اكتشافها.
**Speaker_Notes:** "المهاجمون يملكون ذكاءً اصطناعياً أيضاً. الخطر الأكبر هو أن يتم 'غسيل دماغ' لنظامنا الدفاعي ليصنف الهجوم على أنه نشاط طبيعي، أو استخدام التزييف العميق لخداع الموظفين هاتفياً."
**Animation_&_Visual_Prompt:**
- **Visual:** A split-face 3D pixel robot (`Three.js`). One half is the friendly Claude orange, the other half is corrupted, glitchy, and flashing red.
- **Animation:** Use `GSAP` to animate a scanning laser effect going back and forth over the robot. When it hits the corrupted side, apply `Tailwind CSS` classes for intense shake/glitch animations.

## Slide 7
**Title:** سيادة البيانات (Data Sovereignty) والأمن القومي
**Content:**
- **الاستقلال التقني:** خطر الاعتماد على نماذج خارجية لمعالجة البيانات الأمنية الحساسة.
- **النماذج الوطنية:** التوجه لبناء ذكاء اصطناعي محلي معزول (On-Premise) يحفظ أسرار الدولة والشركات.
- **تشفير ما بعد الكوانتم:** استخدام AI لابتكار خوارزميات صامدة أمام الحواسيب الكمومية.
**Speaker_Notes:** "في 2026، البيانات هي النفط. الدول تدرك أن إرسال بياناتها الأمنية لنماذج خارجية هو خطر أمني، لذا يتجه الجميع لإنشاء ذكاء اصطناعي داخلي خاص لا يتصل بالإنترنت العام."
**Animation_&_Visual_Prompt:**
- **Visual:** A dynamic data visualization using `Recharts` showing data flow. The chart is placed visually *inside* a massive, glowing `Lucide React` Lock or Shield icon.
- **Animation:** Use `Framer Motion` to draw the SVG paths of the Shield icon slowly. The `Recharts` lines should animate smoothly, updating with mock data to look alive. Colors strictly Orange and Dark Grey.

## Slide 8
**Title:** التدريب العملي: لابات وتجارب محاكاة الذكاء الاصطناعي
**Content:**
- **TryHackMe (AI Rooms):** لابات لتنفيذ هجمات حقن الأوامر (Prompt Injection) على نماذج لغوية.
- **Hack The Box (Sherlocks):** تحقيقات جنائية في حوادث ذكاء اصطناعي.
- **OWASP PyRIT:** أداة اختبار اختراق متخصصة لتقييم أمان الوكلاء الذكيين.
**Speaker_Notes:** "الكلام النظري لا يكفي. لمن يريد التجربة، منصات مثل TryHackMe أضافت لابات تطلب منك اختراق نموذج ذكاء اصطناعي لجعله يسرب باسوورد. هذا هو التخصص القادم بقوة."
**Animation_&_Visual_Prompt:**
- **Visual:** A dark IDE/Code Editor UI styled with `Tailwind CSS` (resembling the Claude Code CLI). 
- **Animation:** Simulate a user typing terminal commands (e.g., `> claude-code run exploit.py`). Use `Framer Motion` for realistic typing delays. Upon 'Enter', flash an orange "ACCESS GRANTED" pixelated banner.

## Slide 9
**Title:** معايير OWASP لمخاطر وكلاء AI (2026)
**Content:**
- **ASI01 (اختطاف الهدف):** تلاعب المهاجم بأوامر الوكيل ليعمل لصالحه.
- **ASI03 (تصعيد الصلاحيات):** استغلال صلاحيات الوكيل الواسعة للوصول للأنظمة الحساسة.
- **ASI08 (الفشل المتسلسل):** خطأ بسيط في وكيل واحد يعطل شبكة الوكلاء بالكامل.
**Speaker_Notes:** "كما توجد ثغرات للمواقع، ظهرت ثغرات لعقل الروبوت. مؤسسة OWASP أطلقت تصنيفاً جديداً. الخطر الأكبر هو أن يتم اختطاف هدف الوكيل ليقوم بأعمال تخريبية من الداخل."
**Animation_&_Visual_Prompt:**
- **Visual:** An interactive Accordion list for the risks.
- **Animation:** Built natively with `Framer Motion`. Clicking a risk smoothly expands it (`layout` prop), pushing the others down. `Lucide React` 'AlertTriangle' icons next to each point pulse subtly using `GSAP` loops.

## Slide 10
**Title:** الخلاصة: القيادة البشرية في عصر الآلة
**Content:**
- الذكاء الاصطناعي أداة قوية، لكنه يحتاج لـ "مهندس أوامر" وحكم بشري أخلاقي.
- القوة لمن يمتلك (أفضل البيانات + أفضل نموذج مستقل).
- **نصيحة للمهندسين:** التحول من منفذين روتينيين إلى قادة وموجهين لأنظمة الذكاء الاصطناعي.
**Speaker_Notes:** "الذكاء الاصطناعي لن يأخذ وظيفتك، بل المحلل الذي يستخدم الذكاء الاصطناعي هو من سيأخذها. تعلموا كيف تديرون هذه الأنظمة لتكونوا قادة الأمن السيبراني في المستقبل."
**Animation_&_Visual_Prompt:**
- **Visual:** Big, bold pixelated typography in the center of the screen saying "FUTURE IS AUTONOMOUS".
- **Animation:** Use `Three.js` and `GSAP` to make the text 3D and react to mouse movement (parallax effect). As the user scrolls past the end of the page, use `Lenis` to create an infinite smooth scroll loop back to the top, or a seamless fade to black.