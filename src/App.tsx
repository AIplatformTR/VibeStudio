import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Bot, Rocket, CheckCircle2, Workflow, X, 
  Globe, ChevronDown, BrainCircuit, Sparkles, 
  Video, MessageSquare, Award, Layers, Terminal
} from 'lucide-react';

type Lang = 'tr' | 'ru' | 'en';

const dict = {
  tr: {
    nav: { courses: 'Eğitimler', how: 'Nasıl Çalışır', contact: 'İletişim', start: 'Kayıt Ol', lang: 'TR' },
    hero: {
      badge: 'Yapay Zeka Eğitim Platformu',
      title: 'Yapay Zekaya Hükmetmeyi',
      span: 'Öğrenin.',
      desc: 'ChatGPT, Midjourney ve Claude gibi araçları profesyonel düzeyde kullanarak işinizde 10 kat daha üretken olun. Sıfırdan ileri seviyeye uygulamalı eğitimler.',
      btn1: 'Eğitimlere Göz At',
      btn2: 'Uzmana Danış'
    },
    problem: {
      title: 'Yapay zeka işinizi elinizden almayacak. ',
      span: 'AI kullanan biri alacak.',
      desc: 'Rakipleriniz süreçlerini hızlandırırken geride kalmayın. Doğru prompt yazmayı öğrenerek kariyerinizde sıçrama yapın.',
      card1Title: 'Sıfırdan İleri Seviyeye',
      card1Desc: 'Başlamak için hiçbir teknik bilgiye veya kodlama geçmişine ihtiyacınız yok.',
      card2Title: 'Pratik Odaklı',
      card2Desc: 'Sadece teori değil, günlük hayatınızda kullanabileceğiniz gerçek senaryolarla öğrenin.'
    },
    courses: {
      title: 'Eğitim Programlarımız',
      desc: 'Seviyenize ve hedeflerinize uygun eğitimi seçin.',
      c1: 'AI Temelleri & ChatGPT',
      c1p: '₺3.000',
      c1d: 'Günlük görevlerinizi otomatikleştirmek, içerik üretmek ve yapay zeka ile tanışmak için temel seviye eğitimi.',
      c2: 'İleri Seviye Prompt Mühendisliği',
      c2p: '₺7.500',
      c2d: 'Karmaşık sorunlar, API mantığı, kendi GPT ajanlarınızı oluşturma ve Claude/GPT-4 ustalığı üzerine masterclass.',
      c3: 'İşletmeler ve Takımlar için AI',
      c3p: 'Özel Fiyat',
      c3d: 'Şirket içi süreçleri otomatikleştirme, çalışanları eğitme ve n8n/Zapier ile AI otomasyonları kurma.',
      feature: 'Canlı Uygulama'
    },
    process: {
      title: 'Nasıl',
      span: 'Öğretiyoruz?',
      desc: 'Sıkıcı teoriler yerine, doğrudan sonucunu görebileceğiniz interaktif bir öğrenme modeli.',
      s1: 'Canlı Dersler',
      s1d: 'Uzman eğitmenlerle interaktif, soru-cevap formatında online seanslar.',
      s2: 'Pratik Görevler',
      s2d: 'Kendi projeleriniz üzerinde anında uygulama ve ödev geri bildirimleri.',
      s3: 'Premium Topluluk',
      s3d: 'Eğitim sonrası devam eden destek ve mezunlar ağına katılım.',
      s4: 'Sertifika',
      s4d: 'Başarı belgesi ile yeni becerilerinizi CV\'nize ekleyin.'
    },
    cta: {
      title: 'Yapay Zeka Devrimine Katılın',
      desc: 'Kontenjanlar dolmadan yerinizi ayırtın veya eğitim danışmanımızla iletişime geçin.',
      btn: 'Telegram\'dan Bize Ulaşın @it_turk'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları',
      cookies: 'Çerez Politikası'
    }
  },
  ru: {
    nav: { courses: 'Курсы', how: 'Как это работает', contact: 'Контакты', start: 'Записаться', lang: 'RU' },
    hero: {
      badge: 'Платформа обучения ИИ',
      title: 'Научитесь управлять',
      span: 'Нейросетями.',
      desc: 'Используйте ChatGPT, Midjourney и Claude на профессиональном уровне. Увеличьте свою продуктивность в 10 раз с помощью практических курсов от нуля до профи.',
      btn1: 'Смотреть курсы',
      btn2: 'Консультация'
    },
    problem: {
      title: 'ИИ не отнимет вашу работу. ',
      span: 'Ее заберет тот, кто использует ИИ.',
      desc: 'Не отставайте от конкурентов, которые уже ускоряют свои процессы. Научитесь писать правильные промпты и сделайте рывок в карьере.',
      card1Title: 'С нуля до профи',
      card1Desc: 'Вам не нужны технические знания или опыт программирования для старта.',
      card2Title: 'Фокус на практике',
      card2Desc: 'Не только теория — мы обучаем на реальных сценариях, применимых в вашей работе.'
    },
    courses: {
      title: 'Наши обучающие программы',
      desc: 'Выберите курс, подходящий под ваш уровень и цели.',
      c1: 'Основы ИИ и ChatGPT',
      c1p: 'От 10 000 ₽',
      c1d: 'Базовый курс для автоматизации повседневных задач, создания контента и знакомства с нейросетями.',
      c2: 'Продвинутый Prompt Engineering',
      c2p: 'От 25 000 ₽',
      c2d: 'Мастер-класс по сложным задачам, логике API, созданию собственных GPT-агентов и мастерству Claude/GPT-4.',
      c3: 'ИИ для бизнеса и команд',
      c3p: 'Индивидуально',
      c3d: 'Автоматизация внутренних процессов компании, обучение сотрудников и внедрение AI-автоматизаций через n8n/Zapier.',
      feature: 'Практика'
    },
    process: {
      title: 'Как мы',
      span: 'Обучаем?',
      desc: 'Вместо скучной теории — интерактивная модель обучения, где вы сразу видите результат.',
      s1: 'Живые уроки',
      s1d: 'Онлайн-сессии с экспертами в формате интерактива и вопросов-ответов.',
      s2: 'Практические задания',
      s2d: 'Мгновенное применение на ваших собственных проектах и фидбек по домашним заданиям.',
      s3: 'Премиум сообщество',
      s3d: 'Продолжающаяся поддержка после обучения и доступ к сети выпускников.',
      s4: 'Сертификация',
      s4d: 'Добавьте новые навыки в резюме с нашим сертификатом об окончании.'
    },
    cta: {
      title: 'Присоединяйтесь к AI-революции',
      desc: 'Забронируйте место, пока есть свободные места, или свяжитесь с нашим консультантом по обучению.',
      btn: 'Написать в Telegram @it_turk'
    },
    footer: {
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      cookies: 'Политика Cookie'
    }
  },
  en: {
    nav: { courses: 'Courses', how: 'How it Works', contact: 'Contact', start: 'Enroll Now', lang: 'EN' },
    hero: {
      badge: 'AI Education Platform',
      title: 'Master the Power of',
      span: 'Artificial Intelligence.',
      desc: 'Use tools like ChatGPT, Midjourney, and Claude at a professional level. Become 10x more productive with practical courses from scratch to advanced.',
      btn1: 'View Courses',
      btn2: 'Consult Expert'
    },
    problem: {
      title: 'AI won\'t take your job. ',
      span: 'Someone using AI will.',
      desc: 'Don\'t get left behind as your competitors speed up their workflows. Learn to write the right prompts and make a leap in your career.',
      card1Title: 'From Zero to Pro',
      card1Desc: 'You do not need any technical knowledge or coding background to start.',
      card2Title: 'Practice-Oriented',
      card2Desc: 'Not just theory—learn with real-world scenarios you can apply in your daily life.'
    },
    courses: {
      title: 'Our Training Programs',
      desc: 'Choose the training that fits your level and goals.',
      c1: 'AI Fundamentals & ChatGPT',
      c1p: '$150',
      c1d: 'Basic level training to automate your daily tasks, produce content, and get acquainted with artificial intelligence.',
      c2: 'Advanced Prompt Engineering',
      c2p: '$350',
      c2d: 'Masterclass on complex problem solving, API logic, building custom GPT agents, and Claude/GPT-4 mastery.',
      c3: 'AI for Business & Teams',
      c3p: 'Custom Price',
      c3d: 'Automating internal company processes, training employees, and setting up AI automations with n8n/Zapier.',
      feature: 'Live Practice'
    },
    process: {
      title: 'How do we',
      span: 'Teach?',
      desc: 'Instead of boring theories, an interactive learning model where you directly see results.',
      s1: 'Live Classes',
      s1d: 'Interactive, Q&A format online sessions with expert instructors.',
      s2: 'Practical Tasks',
      s2d: 'Immediate application on your own projects and homework feedback.',
      s3: 'Premium Community',
      s3d: 'Ongoing support after training and participation in the alumni network.',
      s4: 'Certification',
      s4d: 'Add your new skills to your resume with a certificate of achievement.'
    },
    cta: {
      title: 'Join the AI Revolution',
      desc: 'Reserve your spot before quotas are filled or contact our education consultant.',
      btn: 'Contact via Telegram @it_turk'
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy'
    }
  }
};

type T = typeof dict.tr;

// --- LEGAL DOCS ---
const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy Policy / Gizlilik Politikası',
    content: `
      <h2>1. General / Genel</h2>
      <p>This privacy policy outlines how we handle personal data collected for educational services. / Bu gizlilik politikası, eğitim hizmetleri için toplanan kişisel verilerin nasıl işlendiğini özetler.</p>
      
      <h2>2. Data Collection / Veri Toplama</h2>
      <p>We may collect your name, email, and Telegram handle to provide you course materials and updates. / Size kurs materyalleri ve güncellemeler sağlamak için adınızı, e-postanızı ve Telegram kullanıcı adınızı toplayabiliriz.</p>
      
      <h2>3. Communication / İletişim</h2>
      <p>You can opt out or request data deletion via Telegram at any time. / İstediğiniz zaman Telegram üzerinden veri silme talebinde bulunabilirsiniz.</p>
    `
  },
  terms: {
    title: 'Terms of Service / Kullanım Şartları',
    content: `
      <h2>1. Agreement / Sözleşme</h2>
      <p>By purchasing our AI training courses, you agree to these terms. / Yapay zeka eğitim kurslarımızı satın alarak bu şartları kabul etmiş olursunuz.</p>
      
      <h2>2. Intellectual Property / Fikri Mülkiyet</h2>
      <p>All course materials, videos, and documentation are proprietary and cannot be shared publicly. / Tüm kurs materyalleri, videolar ve dokümantasyon tescillidir ve herkese açık olarak paylaşılamaz.</p>
      
      <h2>3. Refunds / İade</h2>
      <p>Consult with our manager via Telegram regarding specific course refund policies. / Belirli kurs iade politikaları hakkında Telegram üzerinden yöneticimizle iletişime geçin.</p>
    `
  },
  cookies: {
    title: 'Cookie Policy / Çerez Politikası',
    content: `
      <h2>Usage of Cookies / Çerez Kullanımı</h2>
      <p>We use essential and analytics cookies to improve our educational platform. / Eğitim platformumuzu geliştirmek için temel ve analitik çerezler kullanıyoruz.</p>
      <p>You can manage your cookie preferences through your browser settings. / Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.</p>
    `
  }
};

function LegalModal({ type, onClose }: { type: keyof typeof LEGAL_DOCS; onClose: () => void }) {
  const doc = LEGAL_DOCS[type];
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl max-h-[80vh] bg-[#111111] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#111111]">
          <h2 className="text-xl md:text-2xl font-display font-bold text-white pr-4">{doc.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors shrink-0">
            <X className="w-6 h-6 text-[#888888]" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto custom-scrollbar prose prose-invert prose-green max-w-none">
          <div 
            className="text-[#888888] leading-relaxed space-y-6 legal-content"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// --- MAIN COMPONENTS ---

function LanguageSwitcher({ lang, setLang }: { lang: Lang, setLang: (l: Lang) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const langs: Lang[] = ['tr', 'en', 'ru'];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-colors"
      >
        <Globe className="w-4 h-4 text-[#00FF94]" />
        {lang.toUpperCase()}
        <ChevronDown className="w-3 h-3" />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 right-0 w-24 bg-[#111] border border-white/10 rounded-xl overflow-hidden flex flex-col z-50 shadow-xl">
            {langs.map(l => (
              <button 
                key={l} 
                onClick={() => { setLang(l); setIsOpen(false); }} 
                className={`px-4 py-2.5 text-sm text-left hover:bg-white/5 transition-colors ${lang === l ? 'text-[#00FF94]' : 'text-white'}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Navbar({ lang, setLang, t }: { lang: Lang, setLang: (l: Lang) => void, t: T }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-[#00FF94]" />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Ai Platform</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
          <a href="#courses" className="hover:text-white transition-colors">{t.nav.courses}</a>
          <a href="#process" className="hover:text-white transition-colors">{t.nav.how}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <a href="https://t.me/it_turk" target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#00FF94] transition-colors">
            {t.nav.start}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }: { t: T }) {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF94]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#888888] mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#00FF94]" />
          {t.hero.badge}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-8"
        >
          {t.hero.title} <br className="hidden md:block" />
          <span className="text-gradient-primary">{t.hero.span}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#courses" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#00FF94] transition-all flex items-center justify-center gap-2 group">
            {t.hero.btn1}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all flex items-center justify-center">
            {t.hero.btn2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSolution({ t }: { t: T }) {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t.problem.title} <br/>
              <span className="text-[#888888]">{t.problem.span}</span>
            </h2>
            <p className="text-[#888888] text-lg mb-8 leading-relaxed">
              {t.problem.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00FF94]/10 flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6 text-[#00FF94]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">{t.problem.card1Title}</h3>
                  <p className="text-[#888888]">{t.problem.card1Desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Workflow className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">{t.problem.card2Title}</h3>
                  <p className="text-[#888888]">{t.problem.card2Desc}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF94]/20 to-transparent blur-3xl rounded-full" />
            <div className="glass-card p-1 rounded-3xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000&h=800" 
                alt="AI Dashboard Concept" 
                className="w-full h-auto rounded-[20px] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses({ t }: { t: T }) {
  const cData = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#00FF94]" />,
      title: t.courses.c1,
      price: t.courses.c1p,
      description: t.courses.c1d,
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#00FF94]" />,
      title: t.courses.c2,
      price: t.courses.c2p,
      description: t.courses.c2d,
    },
    {
      icon: <Layers className="w-8 h-8 text-[#00FF94]" />,
      title: t.courses.c3,
      price: t.courses.c3p,
      description: t.courses.c3d,
    }
  ];

  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t.courses.title}</h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            {t.courses.desc}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {cData.map((course, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl hover:border-white/20 transition-colors group flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {course.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 text-white">{course.title}</h3>
              <div className="text-[#00FF94] font-mono mb-4">{course.price}</div>
              <p className="text-[#888888] mb-8 leading-relaxed flex-grow">
                {course.description}
              </p>
              <div className="flex items-center gap-3 text-sm text-white/80 mt-auto pt-6 border-t border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#00FF94]" />
                {t.courses.feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ t }: { t: T }) {
  const steps = [
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: t.process.s1,
      desc: t.process.s1d
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: t.process.s2,
      desc: t.process.s2d
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: t.process.s3,
      desc: t.process.s3d
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: t.process.s4,
      desc: t.process.s4d
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t.process.title} <br/><span className="text-gradient-primary">{t.process.span}</span></h2>
            <p className="text-[#888888] text-lg mb-8 leading-relaxed">
              {t.process.desc}
            </p>
            <a href="#courses" className="inline-flex px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors items-center gap-2">
              <Award className="w-4 h-4" />
              {t.hero.btn1}
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 group-hover:opacity-10 transition-all">
                  <div className="w-24 h-24 font-display font-bold text-8xl leading-none tracking-tighter">
                    0{i + 1}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ t }: { t: T }) {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#00FF94]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF94]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">{t.cta.title}</h2>
        <p className="text-xl text-[#888888] mb-10">
          {t.cta.desc}
        </p>
        
        <a 
          href="https://t.me/it_turk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#00FF94] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00e685] transition-transform hover:scale-105 shadow-[0_0_40px_rgba(0,255,148,0.3)]"
        >
          {t.cta.btn}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

function Footer({ t, onOpenLegal }: { t: T, onOpenLegal: (type: keyof typeof LEGAL_DOCS) => void }) {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-[#00FF94]" />
            <span className="font-display font-bold text-lg">Ai Platform</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#888888]">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">{t.footer.privacy}</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">{t.footer.terms}</button>
            <button onClick={() => onOpenLegal('cookies')} className="hover:text-white transition-colors">{t.footer.cookies}</button>
          </div>
          <div className="flex gap-4 text-sm text-[#888888]">
            <a href="https://t.me/it_turk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="text-center text-[#444444] text-xs pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Ai Platform. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('tr');
  const [activeLegal, setActiveLegal] = useState<keyof typeof LEGAL_DOCS | null>(null);

  const t = dict[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00FF94] selection:text-black font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <ProblemSolution t={t} />
        <Courses t={t} />
        <Process t={t} />
        <CTA t={t} />
      </main>
      <Footer t={t} onOpenLegal={setActiveLegal} />
      
      {activeLegal && (
        <LegalModal 
          type={activeLegal} 
          onClose={() => setActiveLegal(null)} 
        />
      )}
    </div>
  );
}
