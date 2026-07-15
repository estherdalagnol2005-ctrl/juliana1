import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, ArrowRight, MessageCircle, Star, Target, Users, Landmark, UserCircle, LineChart, Calendar, Mail, Phone, MapPin, Instagram, Globe } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#EAE0D6] text-[#471C19] font-sans selection:bg-[#471C19] selection:text-[#EAE0D6] overflow-x-hidden">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <div className="text-2xl font-serif text-[#471C19] flex items-start gap-1 leading-none">
            <div>Juliana <br/><span className="font-light">Baldissera</span></div>
            <Star className="w-3 h-3 text-[#C49A6C] mt-1" />
          </div>
          <nav className="hidden md:flex gap-8 text-[12px] font-medium tracking-widest text-[#471C19] uppercase">
            <a href="#inicio" className="hover:text-[#C49A6C] transition-colors border-b border-[#471C19] pb-1">Início</a>
            <a href="#sobre" className="hover:text-[#C49A6C] transition-colors pb-1">Sobre</a>
            <a href="#servicos" className="hover:text-[#C49A6C] transition-colors pb-1">Serviços</a>
            <a href="#palestras" className="hover:text-[#C49A6C] transition-colors pb-1">Palestras</a>
            <a href="#contato" className="hover:text-[#C49A6C] transition-colors pb-1">Contato</a>
          </nav>
          <div className="hidden md:block w-32"></div> {/* Visual balance spacer */}
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-[100svh] pt-32 pb-12 overflow-hidden flex flex-col justify-center">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 bg-[#EAE0D6]">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000" 
            alt="Juliana Baldissera Desktop" 
            className="hidden md:block w-full h-full object-cover object-top opacity-70 grayscale mix-blend-multiply"
          />
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Juliana Baldissera Mobile" 
            className="block md:hidden w-full h-full object-cover object-top opacity-70 grayscale mix-blend-multiply"
          />
          {/* Gradient para garantir a leitura do texto, sem criar sombra escura em cima */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAE0D6] via-[#EAE0D6]/80 to-transparent"></div>
          {/* Gradient suave apenas na base para misturar com o resto do site, caso necessário */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EAE0D6] to-transparent"></div>
        </div>

        {/* Background JB Monogram */}
        <div className="absolute right-[-5%] top-[20%] text-[400px] font-serif font-light text-[#C49A6C]/20 leading-none pointer-events-none select-none z-0 hidden md:block">
          JB
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full h-full flex-1 flex flex-col justify-center">
          <div className="space-y-8 max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl md:text-[72px] lg:text-[84px] font-serif font-light leading-[1.05] tracking-tight text-[#471C19]"
            >
              Autenticidade <br/>para ocupar o <br/><span className="italic">seu lugar.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="max-w-md text-[#471C19]/80 text-lg leading-relaxed"
            >
              Mentoria, coaching e consultoria para profissionais, líderes e organizações.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
            >
              <button className="bg-[#471C19] text-[#EAE0D6] px-8 py-4 text-sm font-medium hover:bg-[#341512] transition-colors flex items-center justify-center gap-3 w-full sm:w-auto rounded-sm border border-[#471C19]">
                Quero conhecer <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-[#471C19] text-[#471C19] px-8 py-4 text-sm font-medium hover:bg-[#471C19] hover:text-[#EAE0D6] transition-colors flex items-center justify-center gap-3 w-full sm:w-auto rounded-sm backdrop-blur-sm bg-[#EAE0D6]/30">
                Falar com Juliana <MessageCircle className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAIXA DE AUTORIDADE */}
      <section className="bg-[#471C19] text-[#EAE0D6] py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
          <div className="flex items-center gap-4">
            <div className="border border-[#C49A6C] rounded-full p-3"><UserCircle className="w-8 h-8 text-[#C49A6C] stroke-[1.5]" /></div>
            <div>
              <div className="text-2xl font-serif text-white">+18</div>
              <div className="text-sm font-light text-[#EAE0D6]/80">anos de experiência</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="flex items-center gap-4">
            <div className="border border-[#C49A6C] rounded-full p-3"><Landmark className="w-8 h-8 text-[#C49A6C] stroke-[1.5]" /></div>
            <div>
              <div className="text-2xl font-serif text-white">+12</div>
              <div className="text-sm font-light text-[#EAE0D6]/80">anos à frente da JBC</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="flex items-center gap-4">
            <div className="border border-[#C49A6C] rounded-full p-3"><Globe className="w-8 h-8 text-[#C49A6C] stroke-[1.5]" /></div>
            <div>
              <div className="text-2xl font-serif text-white">Certificações</div>
              <div className="text-sm font-light text-[#EAE0D6]/80">internacionais</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6 md:px-12 bg-[#F6EFEB]">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#471C19]/60 mb-4">Serviços</div>
            <h2 className="text-4xl md:text-[42px] font-serif font-light text-[#471C19] mb-16">
              Soluções para pessoas e organizações <br className="hidden md:block" />
              que querem crescer com propósito.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UserCircle, title: "Mentoria de Autenticidade", desc: "Reconecte-se com quem você é e lide com confiança." },
              { icon: Briefcase, title: "Coaching Executivo e de Carreira", desc: "Claridade, estratégia e ação para alavancar sua trajetória." },
              { icon: Users, title: "Consultoria Organizacional", desc: "Desenvolvimento de líderes, equipes e culturas de alta performance." },
              { icon: Target, title: "Palestras e Treinamentos", desc: "Conteúdo inspirador e prático para transformar pessoas e resultados." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-xl shadow-sm border border-[#471C19]/5 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-[#471C19] flex items-center justify-center mb-6 text-[#EAE0D6] group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-serif text-[#471C19] mb-4 h-14 flex items-center justify-center">{item.title}</h3>
                <p className="text-sm text-[#471C19]/70 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-[#EAE0D6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#471C19]/60 mb-4">Sobre Juliana</div>
            <h2 className="text-4xl md:text-[48px] font-serif font-light text-[#471C19] mb-8 leading-[1.1]">
              Desenvolvimento humano que gera <br/>
              resultados reais e sustentáveis.
            </h2>
            <div className="space-y-6 text-[#471C19]/80 text-[15px] leading-relaxed mb-10">
              <p>
                Sou Juliana Baldissera, especialista em desenvolvimento humano e organizacional, mentora de autenticidade e posicionamento pessoal, Master Coach, Executive & Business Coach e fundadora da JBC.
              </p>
              <p>
                Há mais de 18 anos, ajudo pessoas e organizações a se desenvolverem com profundidade, alinhamento e estratégia para ocuparem o lugar que é seu por direito.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {[
              { icon: Star, text: "Mais de 18 anos de experiência em desenvolvimento de pessoas, líderes e organizações." },
              { icon: Globe, text: "Atuação nacional e internacional com profissionais, executivos e empresas." },
              { icon: Users, text: "Abordagem humanizada e estratégica para transformar potencial em performance." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#471C19]/20 flex items-center justify-center text-[#C49A6C]">
                  <item.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <p className="text-[15px] text-[#471C19]/80 leading-relaxed max-w-sm">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="py-24 px-6 md:px-12 bg-[#F6EFEB]">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#471C19]/60 mb-4">Meu Método</div>
            <h2 className="text-4xl md:text-[42px] font-serif font-light text-[#471C19] mb-20">
              Um caminho claro para transformações consistentes.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-[#471C19]/10"></div>

            {[
              { num: "01", icon: Star, title: "Clareza", desc: "Autoconhecimento e consciência para entender quem você é e onde quer chegar." },
              { num: "02", icon: UserCircle, title: "Posicionamento", desc: "Estratégia e autenticidade para se posicionar com confiança e gerar impacto." },
              { num: "03", icon: LineChart, title: "Movimento", desc: "Ação consistente e apoio certo para transformar planos em resultados reais." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#F6EFEB] border border-[#471C19]/20 flex items-center justify-center mb-8 text-[#471C19] bg-white">
                  <item.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="text-[#C49A6C] font-serif text-2xl mb-2">{item.num}</div>
                <h3 className="text-2xl font-serif text-[#471C19] mb-4">{item.title}</h3>
                <p className="text-sm text-[#471C19]/70 leading-relaxed max-w-[250px]">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="py-12 px-6 md:px-12 bg-[#F6EFEB]">
        <div className="max-w-6xl mx-auto bg-[#471C19] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-6 text-[#EAE0D6]">
            <Star className="w-10 h-10 text-[#C49A6C]" />
            <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight">
              O seu próximo nível começa <br/>com uma conversa.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[#EAE0D6]/80 text-sm max-w-[250px] text-center md:text-left">
              Vamos entender seus desafios e traçar juntos o caminho ideal para você ou sua empresa.
            </p>
            <button className="bg-[#C49A6C] text-[#471C19] px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors flex items-center justify-center gap-3 rounded-sm whitespace-nowrap">
              Agende uma conversa <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#311613] text-[#EAE0D6] pt-16 pb-8 border-t border-[#471C19]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-3xl font-serif text-[#C49A6C] flex items-start gap-1 leading-none mb-4">
                <div>Juliana <br/><span className="font-light text-[#EAE0D6]">Baldissera</span></div>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#EAE0D6]/50 mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-[#EAE0D6]/80">
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#C49A6C]" /> contato@julianabaldissera.com.br</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#C49A6C]" /> (11) 99999-9999</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#C49A6C]" /> São Paulo – SP | Atendimento online</li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#EAE0D6]/50 mb-6">Me Acompanhe</h4>
              <ul className="space-y-4 text-sm text-[#EAE0D6]/80">
                <li className="flex items-center gap-3"><Instagram className="w-4 h-4 text-[#C49A6C]" /> @julianabaldissera</li>
              </ul>
              <p className="mt-6 text-xs text-[#EAE0D6]/60 leading-relaxed pr-4">
                Construindo caminhos de autenticidade, liderança e realização.
              </p>
            </div>

            <div className="col-span-1 flex justify-end items-end hidden md:flex">
              <div className="text-[120px] font-serif font-light text-[#EAE0D6]/5 leading-none">
                JB
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-[10px] text-white/40 uppercase tracking-widest text-center">
            <p>© 2026 Juliana Baldissera. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
