import useCookie from "./useCookie";

const CookieComponent = () => {
  const [value, deleteTitle, updateTitle] = useCookie("title", "Professor");

  return (
    <>
      <h3>current title : {value}</h3>
      <div className="buttons">
        <button onClick={() => updateTitle("Doctor")}>
          Change Title to Doctor
        </button>
        <button onClick={() => updateTitle("Prime Minister")}>
          Change Title to Prime Minister
        </button>
        <button onClick={() => updateTitle("President")}>
          Change Title to President
        </button>
        <button onClick={deleteTitle}>Delete Title</button>
      </div>
    </>
  );
};

export default CookieComponent;
