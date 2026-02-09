export default function Paragraph({ languages, activeItem }) {
  if (!languages && !activeItem) return null;

  return (
    <>
      {languages.map((language, index) => {
        if (language.id !== activeItem) return null;

        return (
          <div key={language.id} className="mt-2">
            <p>{language.description}</p>
          </div>
        );
      })}
    </>
  );
}
