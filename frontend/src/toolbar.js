import {
  FaKeyboard,
  FaRobot,
  FaFileUpload,
  FaFont,
  FaCalculator,
  FaLink,
  FaImage,
  FaSortAlphaDown,
  FaHashtag,
  FaSlidersH,
  FaRandom,
} from "react-icons/fa";
import "./index.css";

const types = [
  "customInput",
  "llm",
  "output",
  "text",
  "math",
  "api",
  "image",
  "uppercase",
  "counter",
  "join",
  "condition",
  "random",
];

const labels = {
  customInput: "Input",
  llm: "LLM",
  output: "Output",
  text: "Text",
  math: "Math",
  api: "API",
  image: "Image",
  uppercase: "Uppercase",
  counter: "Counter",
  join: "Join",
  condition: "Condition",
  random: "Random",
};

const iconsMap = {
  customInput: FaKeyboard,
  llm: FaRobot,
  output: FaFileUpload,
  text: FaFont,
  math: FaCalculator,
  api: FaLink,
  image: FaImage,
  uppercase: FaSortAlphaDown,
  counter: FaHashtag,
  join: FaLink,
  condition: FaSlidersH,
  random: FaRandom,
};

const Toolbar = () => {
  const onDragStart = (e, nodeType) => {
    e.dataTransfer.setData("application/reactflow", nodeType);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="toolbar">
      {types.map((type) => {
        const Icon = iconsMap[type];
        return (
          <button
            key={type}
            className="toolbar-button"
            draggable
            onDragStart={(e) => onDragStart(e, type)}
          >
            <Icon className="toolbar-icon" />
            <span className="toolbar-label">{labels[type]}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default Toolbar;
