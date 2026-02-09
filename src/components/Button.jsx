export default function Button({ languages, toggleItem, activeItem }) {
  return (
    <>
      {languages.map((language, index) => {
        return (
          <div key={index} className="me-2">
            <button
              className={
                'btn ' +
                (language.id == activeItem ? ' btn-success ' : ' btn-primary ')
              }
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
