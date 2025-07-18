export const DownloadButton = () => {
  return (
   <div className="flex justify-center mt-10">
      <a
        href="../src/assets/Curriculo Charles Junio.pdf"
        download
        className="w-full sm:w-auto text-center bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Baixar Currículo em PDF
      </a>
    </div>
  );
};
