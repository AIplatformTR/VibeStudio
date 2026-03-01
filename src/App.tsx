import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Bot, Rocket, CheckCircle2, Clock, Layers, Terminal, Workflow, ExternalLink } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-[#00FF94]" />
          <span className="font-display font-bold text-xl tracking-tight">Ai Platform</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#process" className="hover:text-white transition-colors">Процесс</a>
          <a href="#cases" className="hover:text-white transition-colors">Кейсы</a>
          <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
        </div>
        <a href="https://t.me/it_turk" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#00FF94] transition-colors">
          Начать проект
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF94]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-[#888888] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
          SaaS MVP для нетехнических фаундеров
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-8"
        >
          Запустите SaaS MVP за 14 дней.<br />
          <span className="text-gradient-primary">В 5 раз быстрее с AI.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Мы помогаем фаундерам запускать IT-продукты без поиска CTO и долгих месяцев разработки. 
          Используем фиксированный стек (Next.js, Supabase, Stripe, n8n) и AI-инструменты, 
          чтобы выдавать готовый продукт с измеримым ROI.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://t.me/it_turk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#00FF94] transition-all flex items-center justify-center gap-2 group">
            Обсудить проект
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#cases" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all flex items-center justify-center">
            Смотреть кейсы
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Запуск SaaS без CTO — <br/>
              <span className="text-[#888888]">это боль.</span>
            </h2>
            <p className="text-[#888888] text-lg mb-8 leading-relaxed">
              Обычно вам нужен технический кофаундер или бюджет от $50k+ на классическую студию. Мы меняем правила игры с помощью AI-арбитража и стандартизированного стека.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Обычная студия</h3>
                  <p className="text-[#888888]">Оплата за часы. Месяцы на разработку. Раздутый штат.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00FF94]/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#00FF94]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Ai Platform (AI-First)</h3>
                  <p className="text-[#888888]">Фиксированная цена. MVP за 14 дней. Код пишут нейросети под контролем архитектора.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF94]/20 to-transparent blur-3xl rounded-full" />
            <div className="glass-card p-8 rounded-3xl relative">
              <div className="flex justify-between items-center mb-8 pb-8 border-b border-white/10">
                <div>
                  <div className="text-sm text-[#888888] mb-1">Сроки запуска</div>
                  <div className="text-3xl font-display font-bold text-white">14 дней</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#888888] mb-1">Бюджет MVP</div>
                  <div className="text-3xl font-display font-bold text-[#00FF94]">$10,000</div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Фиксированный стек (Next.js + Supabase)',
                  'Платежи Stripe "из коробки"',
                  'Готовность к масштабированию',
                  'Передача всех прав и исходного кода'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#888888]">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF94] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-[#00FF94]" />,
      title: "SaaS MVP за 14 дней",
      price: "$10,000",
      description: "Идеально для проверки гипотезы. Проектируем базу данных, настраиваем авторизацию, платежи и базовый AI-функционал.",
      features: ["Фиксированная цена", "Next.js + Supabase", "Интеграция Stripe", "Деплой на продакшн"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#00FF94]" />,
      title: "AI-интеграции и n8n",
      price: "от $3,000",
      description: "Внедряем AI-агентов, автоматизируем онбординг пользователей и внутренние процессы вашего продукта.",
      features: ["Аудит процессов", "Сборка сценариев n8n", "Подключение LLM (Claude/OpenAI)", "Снижение рутины"]
    },
    {
      icon: <Layers className="w-8 h-8 text-[#00FF94]" />,
      title: "Поддержка и развитие",
      price: "Retainer",
      description: "После запуска MVP мы не бросаем проект. Берем продукт на ежемесячную поддержку для добавления новых фич и масштабирования.",
      features: ["Выделенные часы", "Приоритетная поддержка", "Мониторинг 24/7", "Итеративное развитие"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Что мы предлагаем</h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Мы сфокусированы на результатах, а не на процессе. Выбирайте формат, который решает вашу задачу прямо сейчас.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl hover:border-white/20 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 text-white">{service.title}</h3>
              <div className="text-[#00FF94] font-mono mb-4">{service.price}</div>
              <p className="text-[#888888] mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF94]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Архитектура",
      desc: "Выступаем как Product Owner. Валидируем ваше ТЗ, убираем лишнее, проектируем базу данных и архитектуру."
    },
    {
      num: "02",
      title: "AI-Сборка (Vibecoding)",
      desc: "Используем Cursor, Claude и наш эталонный стек (Next.js + Supabase + Tailwind) для генерации кода без «велосипедов»."
    },
    {
      num: "03",
      title: "QA & Запуск",
      desc: "Проверяем качество кода, тестируем безопасность и производительность. Деплоим проект на ваш хостинг."
    },
    {
      num: "04",
      title: "Поддержка (MRR)",
      desc: "Переводим вас на ежемесячный ретейнер для развития продукта, добавления фич и автоматизации бизнес-процессов."
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Как работает <br/><span className="text-gradient-primary">AI-арбитраж</span></h2>
            <p className="text-[#888888] text-lg mb-8 leading-relaxed">
              Мы объединили экспертизу сильных архитекторов и скорость нейросетей. Вы получаете качество enterprise-уровня по цене и скорости стартапа.
            </p>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Посмотреть наш стек
            </button>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="font-display font-bold text-4xl text-white/10 shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-[#888888] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    { url: 'meslekbul.tr', fullUrl: 'https://www.meslekbul.tr', time: '40 часов', title: 'Онлайн университет' },
    { url: 'supervizai.ru', fullUrl: 'https://www.supervizai.ru', time: '20 часов', title: 'Инструмент для психологов' },
    { url: 'crm-kfs6n5ytn-superviz.vercel.app', fullUrl: 'https://crm-kfs6n5ytn-superviz.vercel.app', time: '8 часов', title: 'Демо CRM системы' },
    { url: 'dostatok.tr', fullUrl: 'https://dostatok.tr', time: '10 часов', title: 'Сайт агентства недвижимости' },
    { url: 'violrit-pro.vercel.app', fullUrl: 'https://violrit-pro.vercel.app', time: '2 часа', title: 'Сайт-визитка' },
    { url: 'automatization-azure.vercel.app', fullUrl: 'https://automatization-azure.vercel.app', time: '2 часа', title: 'Сайт для заказа автоматизации' },
  ];

  return (
    <section id="cases" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Наши кейсы</h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Реальные проекты, собранные с помощью AI-арбитража в рекордные сроки.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <a key={i} href={c.fullUrl} target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-3xl hover:border-[#00FF94]/50 transition-colors group block">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00FF94]/10 transition-colors">
                  <ExternalLink className="w-5 h-5 text-white group-hover:text-[#00FF94] transition-colors" />
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-[#00FF94]">
                  {c.time}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{c.title}</h3>
              <p className="text-[#888888] text-sm truncate">{c.url}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[#00FF94]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF94]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Готовы запустить продукт?</h2>
        <p className="text-xl text-[#888888] mb-10">
          Напишите нам в Telegram для обсуждения архитектуры и оценки сроков.
        </p>
        
        <a 
          href="https://t.me/it_turk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#00FF94] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00e685] transition-transform hover:scale-105"
        >
          Написать в Telegram @it_turk
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-[#00FF94]" />
          <span className="font-display font-bold text-lg">Ai Platform</span>
        </div>
        <div className="text-[#888888] text-sm">
          © {new Date().getFullYear()} Ai Platform. AI-First Development Agency.
        </div>
        <div className="flex gap-4 text-sm text-[#888888]">
          <a href="https://t.me/it_turk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00FF94] selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Process />
        <Cases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
