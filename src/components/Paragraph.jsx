export default function Paragraph({ languages, activeItem }) {
  if (!activeItem)
    return (
      <h2 className="bg bg-danger p-5 mt-5">Nessun elemento selezionato</h2>
    );

  return (
    <>
      {languages.map((language, index) => {
        if (language.id !== activeItem) return null;

        return (
          <div
            key={language.id}
            className="mt-2 p-5 bg bg-primary text-light rounded"
          >
            <p className="display-6">{language.description}</p>
          </div>
        );
      })}
    </>
  );
}
