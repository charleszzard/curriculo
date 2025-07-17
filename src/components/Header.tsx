import { Mail, Phone, Github, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="text-center mb-10">
      <h1 className="text-3xl font-bold">Charles Junio Gomes dos Santos</h1>
      <p className="text-sm">Rua Dario Araújo, 75 – Espírito Santo</p>
      <div className="flex justify-center gap-6 mt-4 text-blue-600">
        <a href="tel:+5527998332432" className="flex items-center gap-1">
          <Phone size={16} /> (27) 99833-2432
        </a>
        <a href="mailto:cjunniior@gmail.com" className="flex items-center gap-1">
          <Mail size={16} /> cjunniior@gmail.com
        </a>
        <a href="https://github.com/charleszzard" target="_blank" className="flex items-center gap-1">
          <Github size={16} /> GitHub
        </a>
        <a href="https://linkedin.com/in/charles-junio" target="_blank" className="flex items-center gap-1">
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </header>
  );
};
