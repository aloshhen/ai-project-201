import { TrendingUp, Target, Award, Users, CheckCircle, Star, ChevronRight, BookOpen, BarChart3, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md z-50 border-b border-white/5 noise-texture">
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between mobile-safe-container">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-red-600" />
            <span className="text-xl md:text-2xl font-black text-white tracking-tight">TRADING<span className="text-red-600">PRO</span></span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#course" className="text-gray-300 hover:text-red-500 transition-colors font-medium">О курсе</a>
            <a href="#benefits" className="text-gray-300 hover:text-red-500 transition-colors font-medium">Преимущества</a>
            <a href="#reviews" className="text-gray-300 hover:text-red-500 transition-colors font-medium">Отзывы</a>
            <a href="#pricing" className="text-gray-300 hover:text-red-500 transition-colors font-medium">Тарифы</a>
          </div>
          <button className="neo-button bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base min-h-[44px] min-w-[100px]">
            Записаться
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 noise-texture mobile-safe-container">
        <div className="container mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight">
              Освойте Трейдинг<br />
              <span className="text-red-600">За 60 Дней</span>
            </h1>
          </motion.div>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-500 mb-6 md:mb-8 font-bold tracking-tight"
          >
            От новичка до уверенного трейдера
          </motion.p>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Пошаговая система обучения с практическими заданиями, реальными кейсами и поддержкой наставника. Начните зарабатывать на финансовых рынках уже через 2 месяца.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <button className="neo-button bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-black transition-all flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px]">
              Начать Обучение
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="neo-button bg-transparent text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-black border border-white/10 w-full sm:w-auto min-h-[56px]">
              Программа Курса
            </button>
          </motion.div>
        </div>
      </section>

      {/* COURSE INFO */}
      <section id="course" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent to-red-950/5 mobile-safe-container">
        <div className="container mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-8 md:mb-16 tracking-tighter">
            О <span className="text-red-600">Курсе</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 noise-texture"
            >
              <div className="bg-red-600/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-red-600 mb-4 tracking-tight">Программа</h3>
              <ul className="space-y-3 md:space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Основы технического анализа и графиков</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Торговые стратегии для разных рынков</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Управление рисками и капиталом</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Психология трейдинга и дисциплина</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Реальная практика на демо-счетах</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 noise-texture"
            >
              <div className="bg-red-600/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-red-600 mb-4 tracking-tight">Результаты</h3>
              <ul className="space-y-3 md:space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Уверенность в торговых решениях</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Собственная прибыльная стратегия</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Навыки управления капиталом</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Доступ к закрытому сообществу трейдеров</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base leading-relaxed">Сертификат о прохождении курса</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-16 md:py-24 px-4 md:px-6 noise-texture mobile-safe-container">
        <div className="container mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-8 md:mb-16 tracking-tighter">
            Почему <span className="text-red-600">Выбирают Нас?</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 tracking-tight">Практика</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                80% времени — реальная торговля под контролем наставника
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 tracking-tight">Поддержка</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Личный наставник и закрытый чат с опытными трейдерами
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 tracking-tight">Скорость</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Первые результаты уже через 2 недели обучения
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all transform hover:scale-105"
            >
              <div className="bg-red-600/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 tracking-tight">Гарантия</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Возврат средств, если не увидите прогресс за 30 дней
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-red-950/5 to-transparent mobile-safe-container">
        <div className="container mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-8 md:mb-16 tracking-tighter">
            Отзывы <span className="text-red-600">Учеников</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 noise-texture"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                "Прошел курс 3 месяца назад. Сейчас стабильно зарабатываю 15-20% в месяц. Наставник всегда на связи, помогает разбирать сложные ситуации."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-base md:text-lg font-bold text-red-500">АМ</span>
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-white">Александр М.</p>
                  <p className="text-xs md:text-sm text-gray-500">Предприниматель</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 noise-texture"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                "Начинала с нуля, боялась сложности. Курс структурирован так, что каждый шаг понятен. Теперь трейдинг — мой дополнительный доход."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-base md:text-lg font-bold text-red-500">ЕК</span>
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-white">Елена К.</p>
                  <p className="text-xs md:text-sm text-gray-500">Маркетолог</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 noise-texture"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                "Лучшее вложение в себя! Практические задания и разбор реальных сделок дали больше, чем год самостоятельного изучения."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-base md:text-lg font-bold text-red-500">ДС</span>
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-white">Дмитрий С.</p>
                  <p className="text-xs md:text-sm text-gray-500">IT-специалист</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 noise-texture telegram-safe-bottom mobile-safe-container">
        <div className="container mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-8 md:mb-16 tracking-tighter">
            Выберите <span className="text-red-600">Тариф</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">Базовый</h3>
              <p className="text-sm md:text-base text-gray-500 mb-6">Для начинающих</p>
              <div className="mb-6 md:mb-8">
                <span className="text-4xl md:text-5xl font-black text-red-600">₽29,900</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Доступ к курсу на 3 месяца</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Все видеоуроки и материалы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Общий чат поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Сертификат</span>
                </li>
              </ul>
              <button className="neo-button w-full bg-transparent text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base border border-white/10 min-h-[50px]">
                Выбрать тариф
              </button>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border-2 border-red-600 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                ПОПУЛЯРНЫЙ
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">Стандарт</h3>
              <p className="text-sm md:text-base text-gray-500 mb-6">Оптимальный выбор</p>
              <div className="mb-6 md:mb-8">
                <span className="text-4xl md:text-5xl font-black text-red-600">₽49,900</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Доступ к курсу на 6 месяцев</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Все материалы + бонусы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Личный наставник</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Разбор ваших сделок</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Закрытое сообщество</span>
                </li>
              </ul>
              <button className="neo-button w-full bg-red-600 hover:bg-red-700 text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base min-h-[50px]">
                Выбрать тариф
              </button>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="neo-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">Премиум</h3>
              <p className="text-sm md:text-base text-gray-500 mb-6">Максимум результата</p>
              <div className="mb-6 md:mb-8">
                <span className="text-4xl md:text-5xl font-black text-red-600">₽79,900</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Безлимитный доступ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Все материалы + VIP бонусы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Персональный наставник 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Еженедельные созвоны 1-на-1</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">Готовые торговые стратегии</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-gray-300">VIP сообщество</span>
                </li>
              </ul>
              <button className="neo-button w-full bg-red-600 hover:bg-red-700 text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base min-h-[50px]">
                Выбрать тариф
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-red-950/10 to-transparent noise-texture mobile-safe-container">
        <div className="container mx-auto text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter">
            Готовы Начать <span className="text-red-600">Зарабатывать?</span>
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Присоединяйтесь к сотням успешных трейдеров. Первый урок бесплатно!
          </motion.p>
          <motion.button 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="neo-button bg-red-600 hover:bg-red-700 text-white px-10 md:px-16 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-black shadow-2xl shadow-red-600/30 min-h-[60px] mx-auto"
          >
            Записаться на Курс
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/50 border-t border-white/5 py-8 md:py-12 px-4 md:px-6 noise-texture mobile-safe-container">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <span className="text-lg md:text-xl font-black text-white tracking-tight">TRADING<span className="text-red-600">PRO</span></span>
            </div>
            <div className="text-gray-500 text-xs md:text-sm text-center">
              © 2024 TradingPro. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App