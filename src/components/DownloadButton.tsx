export const DownloadButton = () => {
  // Usando caminho absoluto baseado na URL do site
  const pdfUrl = "/Curriculo_Charles_Junio.pdf";
  
  return (
    <div className="flex justify-center mt-10">
      <a
        href={pdfUrl}
        download="Curriculo_Charles_Junio.pdf"
        className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Baixar Currículo em PDF
      </a>
    </div>
  );
};