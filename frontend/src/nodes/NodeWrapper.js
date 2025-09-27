import React, { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import "../index.css";

export const NodeWrapper = ({ id, data, config }) => {
  const [values, setValues] = useState(data || {});
  const [variables, setVariables] = useState([]);
  const wrapperRef = useRef(null);

  const handleChange = (e, field) => {
    const newValues = { ...values, [field.name]: e.target.value };
    setValues(newValues);

    if (config.title === "Text" && field.name === "text") {
      const matches = e.target.value.match(/\{\{(\w+)\}\}/g) || [];
      setVariables(matches.map((m) => m.replace("{{", "").replace("}}", "")));
    }
  };

  useEffect(() => {
    const textarea = document.getElementById(`textarea-${id}`);
    const wrapper = wrapperRef.current;
    if (textarea && wrapper) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
      const newWidth = Math.max(150, textarea.scrollWidth + 20);
      wrapper.style.width = `${newWidth}px`;
    }
  }, [values.text, id]);

  return (
    <div
      ref={wrapperRef}
      className="node-wrapper"
      style={{ border: `2px solid ${config.style.borderColor}`, background: config.style.background }}
    >
      <h4 className="node-title" style={{ color: config.style.borderColor }}>
        {config.title}
      </h4>

      {config.fields.map((field) => (
        <div className="field-group" key={field.name}>
          <label className="field-label">{field.label}</label>
          {field.type === "text" && (
            <input
              className="field-input"
              type="text"
              value={values[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          )}
          {field.type === "select" && (
            <select
              className="field-input"
              value={values[field.name] || field.options[0]}
              onChange={(e) => handleChange(e, field)}
            >
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          {field.type === "textarea" && (
            <textarea
              id={`textarea-${id}`}
              className="field-input"
              style={{ resize: "none", overflow: "hidden" }}
              value={values[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          )}
        </div>
      ))}

      {config.handles.map((h, i) => (
        <Handle
          key={`${id}-${h.id}-${i}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style || {}}
        />
      ))}
      {config.title === "Text" &&
        variables.map((v, idx) => (
          <Handle
            key={`${id}-var-${v}`}
            type="target"
            position={Position.Left}
            id={`${id}-${v}`}
            style={{ top: 40 + idx * 20 }}
          />
        ))}
    </div>
  );
};
