export const DownloadButton = () => {
  return (
    <div className="text-center mt-10">
      <a
        href="/curriculo-charles.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Baixar Currículo em PDF
      </a>
    </div>
  );
};
