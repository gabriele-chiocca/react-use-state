export default function Button({ languages, toggleItem }) {
  return (
    <>
      {languages.map((language, index) => {
        return (
          <div key={index} className="me-2">
            <button
              className="btn btn-primary"
              onClick={() => toggleItem(language.id)}
            >
              {language.title}
            </button>
          </div>
        );
      })}
    </>
  );
}
