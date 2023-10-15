import React, { useState } from "react";

interface Props {
  title?: string;
  value: object;
  expanded?: boolean;
}

export const Dump: React.FC<Props> = ({
  title = "Dump",
  value,
  expanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

  function toggleValues() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        margin: "15px 0",
        padding: "12px",
      }}
    >
      <div
        style={{ alignItems: "center", cursor: "pointer", display: "flex" }}
        onClick={toggleValues}
      >
        {title}
        <span style={{ color: "#393939", fontSize: "10px", marginLeft: "7px" }}>
          {isExpanded ? "▲" : "▼"}
        </span>
      </div>

      {isExpanded && (
        <pre style={{ marginTop: "10px" }}>
          {JSON.stringify(value, null, 2)}
        </pre>
      )}
    </div>
  );
};
