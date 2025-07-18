import { Mail, Phone, Github, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="text-center sm:text-left mb-10">
  <h1 className="text-2xl sm:text-3xl font-bold">Charles Junio Gomes dos Santos</h1>
  <p className="text-sm sm:text-base">Rua Dario Araújo, 75 – Espírito Santo</p>

  <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-3 mt-4 text-blue-600 text-sm">
    <a href="tel:+5527998332432" className="flex items-center gap-1 justify-center">
      <Phone size={16} /> (27) 99833-2432
    </a>
    <a href="mailto:cjunniior@gmail.com" className="flex items-center gap-1 justify-center">
      <Mail size={16} /> cjunniior@gmail.com
    </a>
    <a href="https://github.com/charleszzard" target="_blank" className="flex items-center gap-1 justify-center">
      <Github size={16} /> GitHub
    </a>
    <a href="https://linkedin.com/in/charles-junio" target="_blank" className="flex items-center gap-1 justify-center">
      <Linkedin size={16} /> LinkedIn
    </a>
  </div>
</header>
  );
};
