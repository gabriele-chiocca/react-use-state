export default function Button({ languages }) {
  return (
    <>
      {languages.map((language, index) => {
        return (
          <div key={index} className="flex-item mx-2">
            <button className="btn btn-primary">{language.title}</button>
          </div>
        );
      })}
    </>
  );
}
