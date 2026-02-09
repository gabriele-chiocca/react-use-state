export default function Paragraph({ languages }) {
  return (
    <>
      {languages.map((language, index) => {
        return (
          <div key={index} className="mt-2">
            <p>{language.description}</p>
          </div>
        );
      })}
    </>
  );
}
