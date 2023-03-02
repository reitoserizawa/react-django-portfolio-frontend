import "./Loading.css";
import Typewriter from "typewriter-effect";

function Loading({ title, setLoading }) {
  return (
    <div id="loading-parent">
      <div id="loading-child">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(title)
              .deleteAll()
              .callFunction(() => setLoading(false))
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default Loading;
