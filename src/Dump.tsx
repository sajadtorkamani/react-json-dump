import React, { useState } from "react";

interface Props {
  label?: string;
  value: object;
  expand?: boolean;
}

export const Dump: React.FC<Props> = ({
  label = "Dump",
  value,
  expand = true,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expand);

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
        {label}
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
