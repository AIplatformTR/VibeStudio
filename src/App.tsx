import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Bot, Rocket, CheckCircle2, Clock, Layers, Terminal, Workflow } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-[#00FF94]" />
          <span className="font-display font-bold text-xl tracking-tight">VibeStudio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#process" className="hover:text-white transition-colors">Процесс</a>
          <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
        </div>
        <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#00FF94] transition-colors">
          Начать проект
        </button>
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
          AI-First Development Agency
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-8"
        >
          Запустите MVP за 14 дней.<br />
          <span className="text-gradient-primary">В 5 раз быстрее с AI.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Мы не продаем часы программистов. Мы продаем готовый продукт. 
          Используем современные AI-инструменты (Cursor, Claude, n8n), чтобы 
          создавать продукты для стартапов и бизнеса быстро и с измеримым ROI.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#00FF94] transition-all flex items-center justify-center gap-2 group">
            Обсудить проект
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
            Смотреть кейсы
          </button>
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
              Классическая разработка <br/>
              <span className="text-[#888888]">сломана.</span>
            </h2>
            <p className="text-[#888888] text-lg mb-8 leading-relaxed">
              Нетехнические фаундеры и малый бизнес хотят запускать продукты, но сталкиваются с бюджетами от $50k+ и сроками в полгода. Мы меняем правила игры с помощью AI-арбитража.
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
                  <h3 className="font-semibold text-lg mb-1 text-white">VibeStudio (AI-First)</h3>
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
                  'Прозрачный процесс без скрытых платежей',
                  'Современный стек (React, Node.js, Tailwind)',
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
      title: "MVP за 14 дней",
      price: "$10,000",
      description: "Идеальный формат для стартапов. Проектируем архитектуру, собираем первую версию продукта с помощью AI, тестируем и запускаем.",
      features: ["Фиксированная цена", "UI/UX дизайн", "Frontend + Backend", "Деплой на продакшн"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#00FF94]" />,
      title: "Бизнес-автоматизация",
      price: "от $3,000",
      description: "Внедряем n8n, AI-агентов и интеграции для малого и среднего бизнеса. Снижаем рутину и операционные косты.",
      features: ["Аудит процессов", "Сборка сценариев n8n", "Интеграция с CRM/ERP", "Подключение LLM"]
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
      desc: "Используем Cursor, Claude и современные фреймворки для генерации кода в 5-10 раз быстрее ручной работы."
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

function CTA() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#00FF94]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF94]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Готовы запустить продукт?</h2>
        <p className="text-xl text-[#888888] mb-10">
          Оставьте заявку, и мы свяжемся с вами для обсуждения архитектуры и оценки сроков.
        </p>
        
        <form className="glass-card p-2 rounded-full flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Ваш email или Telegram" 
            className="flex-1 bg-transparent border-none outline-none px-6 py-3 text-white placeholder:text-white/30"
          />
          <button type="button" className="bg-[#00FF94] text-black px-8 py-3 rounded-full font-bold hover:bg-[#00e685] transition-colors whitespace-nowrap">
            Начать работу
          </button>
        </form>
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
          <span className="font-display font-bold text-lg">VibeStudio</span>
        </div>
        <div className="text-[#888888] text-sm">
          © {new Date().getFullYear()} VibeStudio. AI-First Development Agency.
        </div>
        <div className="flex gap-4 text-sm text-[#888888]">
          <a href="#" className="hover:text-white transition-colors">Telegram</a>
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
