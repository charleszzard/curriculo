import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { DownloadButton } from "./components/DownloadButton";

function App() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 font-sans text-gray-900">
      <Header />

      <Section title="Objetivo">
        Busco integrar uma equipe de tecnologia onde possa aplicar minhas habilidades técnicas e soft skills para resolver problemas de forma criativa, colaborar com inovação e crescer profissionalmente, contribuindo para os resultados da empresa.
      </Section>

      <Section title="Formação Acadêmica">
        Bacharelado em Engenharia da Computação – FAESA (7º período) <br />
        Previsão de conclusão: 2027
      </Section>

      <Section title="Certificações">
        <ul className="list-disc list-inside">
          <li>Curso de Programação em Java</li>
          <li>Pacote Office Completo</li>
          <li>White Belt – Gestão de Processos</li>
          <li>ITIL 4 Foundation</li>
        </ul>
      </Section>

      <Section title="Experiência Profissional">
        <p><strong>Técnico em Manutenção de Equipamentos de Informática Júnior</strong> (2025 – Atual)</p>
        <p>Manutenção de computadores, suporte técnico, Help Desk e Service Desk.</p>
        <p><strong>N M A G COSTA</strong> – Recepcionista / TI (2020 – 2022)</p>
        <p>Organização e suporte técnico interno.</p>
        <p><strong>Mapa Prestação de Serviços LTDA</strong> – Crédito / TI (2017–2019, 2023–2024)</p>
        <p>Recuperação de crédito e manutenção de TI.</p>
        <p><strong>Indústria de Massas Villoni</strong> – Aprendiz (2014 – 2016)</p>
        <p>Atendimento e apoio ao marketing.</p>
      </Section>

      <Section title="Habilidades Técnicas">
        Java, HTML, CSS, JS, Tailwind, Next.js, Vite, Git/GitHub, montagem e manutenção de computadores.
      </Section>

      <Section title="Soft Skills">
        Proatividade, comunicação eficaz, organização, trabalho em equipe, relacionamento interpessoal.
      </Section>

      <DownloadButton />
    </main>
  );
}

export default App;
