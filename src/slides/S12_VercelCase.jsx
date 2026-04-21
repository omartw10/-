import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

/* ══════════════════════════════════════════
   SVG Icon System — Professional & Minimalist
══════════════════════════════════════════ */
function Icon({ size = 24, color = 'currentColor', sw = 1.5, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const IcoTarget = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></Icon>;
const IcoBuilding = (p) => <Icon {...p}><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 7h1"/><path d="M9 11h1"/><path d="M9 15h1"/><path d="M14 7h1"/><path d="M14 11h1"/><path d="M14 15h1"/></Icon>;
const IcoShield = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>;
const IcoLaptop = (p) => <Icon {...p}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></Icon>;
const IcoBug = (p) => <Icon {...p}><path d="M12 20v-5"/><path d="M4.7 19.8l.5-1"/><path d="M18.8 19.3l.5-1"/><path d="M12 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/><path d="M6 13h12"/><path d="M6 9h12"/><path d="M6 5.3l-1.3-.7"/><path d="M18 5.3l1.3-.7"/><path d="M12 15l1.3 1.3"/><path d="M12 15l-1.3 1.3"/></Icon>;
const IcoKey = (p) => <Icon {...p}><path d="M21 2l-2 2"/><circle cx="7" cy="17" r="5"/><path d="M11 13l9-9"/><path d="M15 17l-1 1"/><path d="M18 6l2-2"/><path d="M17 11L18 10"/></Icon>;
const IcoAlert = (p) => <Icon {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>;
const IcoCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IcoTrendDown = (p) => <Icon {...p}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></Icon>;

/* ══════════════════════════════════════════
   Design Tokens
══════════════════════════════════════════ */
const COLORS = {
  danger: '#CC3333',
  dangerBg: '#FFF0F0',
  dangerBorder: '#EFAAAA',
  warning: '#C06830',
  warningBg: '#FFF8F0',
  success: '#2E8A50',
  successBg: '#EDF8F1',
};

/* ══════════════════════════════════════════
   Primitive UI Components
══════════════════════════════════════════ */
function Label({ children, color = 'var(--text-muted)' }) {
  return (
    <div style={{
      fontFamily: 'var(--font-pixel)',
      fontSize: 'clamp(8px, 0.9vw, 11px)',
      color,
      letterSpacing: '0.15em',
      marginBottom: 8,
      textTransform: 'uppercase',
    }}>
      {children}
    </div>
  );
}

function Title({ children, color = 'var(--primary)' }) {
  return (
    <div style={{
      fontFamily: 'var(--font-pixel)',
      fontSize: 'clamp(15px, 2vw, 22px)',
      color,
      lineHeight: 1.6,
      direction: 'rtl',
      marginBottom: '0.3rem',
    }}>
      {children}
    </div>
  );
}

function BodyText({ children, style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-arabic)',
      color: 'var(--text-main)',
      fontSize: 'clamp(13px, 1.5vw, 16px)',
      lineHeight: 1.8,
      direction: 'rtl',
      textAlign: 'right',
      fontWeight: 500,
      ...style,
    }}>
      {children}
    </div>
  );
}

function Card({ children, accent = 'var(--primary)', isDanger, style }) {
  const bg = isDanger ? COLORS.dangerBg : 'var(--bg-card)';
  const border = isDanger ? COLORS.dangerBorder : 'var(--border-light)';
  const topColor = isDanger ? COLORS.danger : accent;

  return (
    <div style={{
      background: bg,
      border: `1px solid ${border}`,
      borderTop: `4px solid ${topColor}`,
      borderRadius: 12,
      padding: 'clamp(1rem, 1.5vw, 1.8rem)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════
   Left Navigation Sidebar
══════════════════════════════════════════ */
const CHAPTERS = [
  'الصيد في المكان الخطأ',
  'الخطأ الذي غيّر كل شيء',
  'شهر كامل في الظلام',
  'السقوط الكلي',
  'الخسارة الحقيقية',
];

function Sidebar({ currentStep }) {
  return (
    <div style={{
      width: 180,
      minWidth: 180,
      background: 'var(--bg-card)',
      borderRight: '1px solid var(--border-light)',
      padding: '1rem 0.8rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: '9px',
        color: 'var(--primary)',
        letterSpacing: '0.18em',
        marginBottom: '0.8rem',
        paddingBottom: '0.6rem',
        borderBottom: '1px solid var(--border-light)',
      }}>
        CHAPTERS · الفصول
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        {CHAPTERS.map((ch, i) => {
          const active = currentStep === i;
          const done = i < currentStep;
          return (
            <motion.div
              key={i}
              animate={{
                color: active ? 'var(--primary)' : done ? 'var(--text-main)' : 'var(--text-muted)',
                x: active ? 4 : 0,
              }}
              style={{
                padding: '8px 8px',
                borderLeft: active ? '3px solid var(--primary)' : '3px solid transparent',
                background: active ? 'rgba(216,120,88,0.08)' : 'transparent',
                borderRadius: '0 4px 4px 0',
                cursor: 'default',
                direction: 'rtl',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  minWidth: 14,
                  textAlign: 'center',
                }}>{active ? '▶' : done ? '✓' : `0${i + 1}`}</span>
                <div style={{
                  fontFamily: 'var(--font-arabic)',
                  fontSize: '12px',
                  fontWeight: active ? 700 : 500,
                  lineHeight: 1.4,
                }}>
                  {ch}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '0.6rem' }}>
        <div style={{
          background: COLORS.danger,
          color: 'white',
          fontFamily: 'var(--font-pixel)',
          fontSize: '8px',
          padding: '6px 10px',
          borderRadius: 4,
          textAlign: 'center',
          letterSpacing: '0.1em',
          animation: 'lpulse 2s infinite',
        }}>
          LIVE INVESTIGATION
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   STEP 0: Supply Chain Attack Diagram
══════════════════════════════════════════ */
function NetworkNode({ title, role, color, icon: IconComp, delay, isTarget }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: `2px solid ${color}`,
        borderRadius: isTarget ? '50%' : '16px',
        width: isTarget ? 140 : 120,
        height: isTarget ? 140 : 120,
        justifyContent: 'center',
        boxShadow: `0 10px 30px ${color}15`,
        position: 'relative',
      }}
    >
      <IconComp size={32} color={color} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px', color }}>{title}</span>
        <span style={{ fontFamily: 'var(--font-arabic)', fontSize: '11px', color: 'var(--text-muted)' }}>{role}</span>
      </div>
      {isTarget && (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            inset: -4,
            border: `1px solid ${color}`,
            borderRadius: '50%',
            opacity: 0.3,
          }}
        />
      )}
    </motion.div>
  );
}

function Step0() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <Label>Chapter 01</Label>
      <Title>الصيد في المكان الخطأ</Title>
      <BodyText>
        Vercel شركة عملاقة، اختراقها مباشرة "مهمة مستحيلة".<br />
        لكن المهاجم وجد ثغرة في <strong>Context.ai</strong>، وهي شركة صغيرة تملك صلاحيات OAuth كاملة داخل بيئة Vercel.
      </BodyText>

      <Card style={{ flex: 1, justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'relative' }}>
          <NetworkNode
            title="ATTACKER"
            role="المهاجم"
            color={COLORS.danger}
            icon={IcoTarget}
            delay={0.2}
          />
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ flex: 1, height: 2, background: 'var(--border-light)', position: 'relative', margin: '0 20px' }}
          >
            <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: '9px', color: COLORS.danger }}>
              EXPLOIT
            </div>
          </motion.div>

          <NetworkNode
            title="SMALL VENDOR"
            role="الحلقة الأضعف"
            color={COLORS.warning}
            icon={IcoBuilding}
            delay={0.4}
          />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{ flex: 1, height: 2, background: 'var(--primary)', position: 'relative', margin: '0 20px' }}
          >
            <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--primary)' }}>
              TRUSTED ACCESS
            </div>
          </motion.div>

          <NetworkNode
            title="VERCEL"
            role="الهدف النهائي"
            color="var(--primary)"
            icon={IcoShield}
            delay={0.6}
            isTarget
          />
        </div>
      </Card>
    </div>
  );
}

/* ══════════════════════════════════════════
   STEP 1: Infection Chain
══════════════════════════════════════════ */
function InfectionCard({ title, body, icon: IconComp, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      style={{ flex: 1 }}
    >
      <Card accent={color} style={{ height: '100%' }}>
        <div style={{ background: `${color}15`, width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <IconComp size={24} color={color} />
        </div>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color, marginBottom: '0.5rem' }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{body}</div>
      </Card>
    </motion.div>
  );
}

function Step1() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <Label>Chapter 02</Label>
      <Title color={COLORS.danger}>الخطأ الذي غيّر كل شيء</Title>
      <BodyText>
        موظف في Context.ai، على جهاز العمل، قام بتحميل سكريبت غش بسيط للعبة <strong>Roblox</strong>.<br />
        لم يكن يعلم أن السكريبت يحتوي على برمجية خبيثة متطورة.
      </BodyText>

      <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
        <InfectionCard
          title="INITIAL DOWNLOAD"
          body="تحميل سكريبت من مصدر غير موثوق به"
          icon={IcoLaptop}
          color="var(--primary)"
          delay={0.2}
        />
        <InfectionCard
          title="MALWARE ACTIVATION"
          body="تشغيل Lumma Stealer بصمت تام في الخلفية"
          icon={IcoBug}
          color={COLORS.danger}
          delay={0.4}
        />
        <InfectionCard
          title="DATA HARVEST"
          body="سرقة جميع ملفات تعريف الارتباط والـ Tokens"
          icon={IcoKey}
          color={COLORS.danger}
          delay={0.6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ background: '#111', color: '#0F0', fontFamily: 'var(--font-mono)', padding: '1rem 1.2rem', borderRadius: 8, fontSize: '12px', lineHeight: 1.7, direction: 'ltr' }}
      >
        &gt; lumen_stealer.exe -harvest all --silent<br />
        &gt; Found 12 candidate session tokens...<br />
        &gt; Found OAuth app access for: Vercel Production API<br />
        &gt; Exfiltrating to remote C2 server... [SUCCESS]
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════
   STEP 2: Timeline
══════════════════════════════════════════ */
function Step2() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: '100%', transition: { duration: 3, ease: 'linear' } });
  }, []);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <Label>Chapter 03</Label>
      <Title color={COLORS.warning}>شهر كامل في الظلام</Title>
      <BodyText>
        أبريل 2026. المهاجم يتجول بحرية داخل أنظمة Vercel.<br />
        الأكثر غرابة؟ أن شركة <strong>Hudson Rock</strong> حذرت من وجود هذه البيانات المسروقة قبل شهر، لكن لم يتم اتخاذ أي إجراء!
      </BodyText>

      <Card style={{ padding: '1.2rem 1.4rem', flex: 1, justifyContent: 'center' }}>
        <Label>اختراق دام 31 يوماً بدون أن يلاحظه أحد</Label>
        <div style={{ position: 'relative', height: 44, background: 'var(--bg-page)', borderRadius: 22, marginBottom: '1.4rem', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={controls}
            style={{ height: '100%', background: `linear-gradient(270deg, ${COLORS.danger}, ${COLORS.warning})` }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 22px', fontFamily: 'var(--font-pixel)', fontSize: '10px', color: 'rgba(255,255,255,0.85)' }}>
            <span>START · FEB 25</span>
            <span>DISCOVERY · APR 19</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem' }}>
          <div style={{ borderRight: `4px solid ${COLORS.danger}`, paddingRight: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color: COLORS.danger, marginBottom: 6 }}>LOST WARNING</div>
            <BodyText style={{ fontSize: '15px' }}>
              بيانات مسروقة ظهرت في "الويب المظلم" وتم إرسال بلاغ لم يُقرأ.
            </BodyText>
          </div>
          <div style={{ borderRight: `4px solid ${COLORS.warning}`, paddingRight: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '11px', color: COLORS.warning, marginBottom: 6 }}>OAUTH RISK</div>
            <BodyText style={{ fontSize: '15px' }}>
              المخترق لم يحتَج كلمة مرور، الصلاحية كانت ممنوحة مسبقاً.
            </BodyText>
          </div>
        </div>
      </Card>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, alignSelf: 'center', direction: 'rtl' }}>
        <IcoAlert size={18} color={COLORS.danger} />
        <span style={{ fontFamily: 'var(--font-arabic)', fontSize: '14px', color: COLORS.danger, fontWeight: 700 }}>السرعة في الاستجابة كانت ستمنع كل ما حدث لاحقاً.</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   STEP 3: The Fallout
══════════════════════════════════════════ */
function Metric({ label, val, color }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-light)', padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <span style={{ fontFamily: 'var(--font-arabic)', fontSize: '15px', color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '18px', color }}>{val}</span>
    </div>
  );
}

function Step3() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <Label>Chapter 04</Label>
      <Title color={COLORS.danger}>السقوط الكلي</Title>
      <BodyText>
        عندما استفاق الجميع، كان المخترق قد حصل على كل شيء.<br />
        البيانات لم تكن مجرد أرقام، بل كانت مفاتيح المملكة.
      </BodyText>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.2rem', flex: 1 }}>
        <Card isDanger style={{ justifyContent: 'center' }}>
          <Metric label="عدد الموظفين المخترقين" val="580" color={COLORS.danger} />
          <Metric label="مفاتيح الـ API المسروقة" val="NPM Tokens" color={COLORS.danger} />
          <Metric label="بيانات العملاء الحساسة" val="ENV VARS" color={COLORS.danger} />
          <Metric label="الوصول للكود المصدري" val="FULL" color={COLORS.danger} />
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <Card accent={COLORS.danger} style={{ background: '#111', border: 'none' }}>
            <div style={{ color: '#E44', fontFamily: 'var(--font-mono)', fontSize: '12px', textAlign: 'center' }}>
              <div style={{ marginBottom: 10 }}>[ BREACH FORUMS ]</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>FOR SALE</div>
              <div style={{ margin: '15px 0', color: '#FFF' }}>VERCEL EMPLOYEE DB</div>
              <div style={{ fontSize: '18px', color: '#FF0' }}>$2,000,000</div>
            </div>
          </Card>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-light)', borderRadius: 12, padding: '1rem' }}>
            <BodyText style={{ fontSize: '14px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              تُباع البيانات كـ "مدخل لشركات التكنولوجيا الكبرى"
            </BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   STEP 4: Real Loss
══════════════════════════════════════════ */
function OutcomeCard({ title, items, color, isLost }) {
  return (
    <Card accent={color} style={{ flex: 1, background: isLost ? COLORS.dangerBg : COLORS.successBg }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
        {isLost ? <IcoTrendDown size={22} color={color} /> : <IcoCheck size={22} color={color} />}
        <Label color={color}>{title}</Label>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, direction: 'rtl' }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: color }} />
            <BodyText style={{ fontSize: '15px', color: isLost ? '#944' : '#264' }}>{it}</BodyText>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Step4() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <Label>Chapter 05</Label>
      <Title>الخسارة الحقيقية</Title>
      
      <div style={{ display: 'flex', gap: '1.2rem', flex: 1 }}>
        <OutcomeCard
          title="ما الذي نجا؟"
          items={['كود Next.js لم يتم حقنه بخبث', 'الأموال لم تُسرق بشكل مباشر', 'تم التحكم بالضرر قبل اتساعه']}
          color={COLORS.success}
        />
        <OutcomeCard
          title="ما الذي سُرق للأبد؟"
          items={['الثقة: أهم ركن لدى المبرمجين', 'السمعة كمنصة "الأمان أولاً"', 'الشعور بالاستقرار لـ 580 عائلة']}
          color={COLORS.danger}
          isLost
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: 'var(--bg-card)',
          border: '2px solid var(--primary)',
          borderRadius: 16,
          padding: '1.1rem 1.4rem',
          textAlign: 'center',
          boxShadow: '0 15px 40px rgba(216,120,88,0.15)',
        }}
      >
        <BodyText style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)', textAlign: 'center', marginBottom: 8 }}>
          كم أداة SaaS منحتَها صلاحيات OAuth على حساباتك في العمل؟
        </BodyText>
        <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>
          هذا السؤال لو طرحته Vercel قبل فبراير 2026، لتغيّر التاريخ.
        </div>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════
   Main Component Assembly
══════════════════════════════════════════ */
const STEPS = [Step0, Step1, Step2, Step3, Step4];

export default function S12_VercelCase({ currentStep }) {
  const StepContent = STEPS[currentStep] || Step0;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--bg-page)',
      borderRadius: 12,
      overflow: 'hidden',
    }}>
      {/* Top Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.7rem 1.2rem',
        background: 'var(--bg-card)',
        borderBottom: '2px solid var(--primary)',
        direction: 'rtl',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: 8, height: 8,
            background: COLORS.danger,
            borderRadius: '50%',
            animation: 'lpulse 1.6s infinite',
          }} />
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(13px, 1.6vw, 16px)',
            color: 'var(--primary)',
          }}>
            قصة اختراق Vercel
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}>
            · APRIL 2026 CASE
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'rgba(216,120,88,0.08)',
          border: '1px dashed var(--primary)',
          borderRadius: 20,
          padding: '4px 12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '8px',
            color: 'var(--primary)',
            letterSpacing: '0.1em',
          }}>
            SIDE STORY
          </span>
          <span style={{ color: 'var(--border-light)' }}>|</span>
          <span style={{
            fontFamily: 'var(--font-arabic)',
            fontSize: '11px',
            color: 'var(--primary)',
            fontWeight: 700,
          }}>
            قصة جانبية · ليست ضمن المقرر
          </span>
        </div>
      </div>

      {/* Body: Sidebar + Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        flex: 1,
        overflow: 'hidden',
      }}>
        <Sidebar currentStep={currentStep} />

        <div style={{ padding: 'clamp(1rem, 1.6vw, 1.8rem)', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{ height: '100%' }}
            >
              <StepContent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
