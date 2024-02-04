import React from "react";

interface DifficultyBarProps {
  level: "easy" | "medium" | "hard";
}

const DifficultyBar: React.FC<DifficultyBarProps> = ({ level }) => {
  const getBars = (level: DifficultyBarProps["level"]) => {
    switch (level) {
      case "easy":
        return (
          <>
            <svg
              className="h-full w-[16px]"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="13.1309" width="6" height="11" rx="1" fill="#4E7BBA" />
              <rect
                x="8"
                y="8.13086"
                width="6"
                height="16"
                rx="1"
                fill="#E1E1E1"
              />
              <rect
                x="16"
                y="0.130859"
                width="6"
                height="24"
                rx="1"
                fill="#E1E1E1"
              />
            </svg>
          </>
        );
      case "medium":
        return (
          <>
            <svg
              className="h-full w-[16px]"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="13.1309" width="6" height="11" rx="1" fill="#4E7BBA" />
              <rect
                x="8"
                y="8.13086"
                width="6"
                height="16"
                rx="1"
                fill="#4E7BBA"
              />
              <rect
                x="16"
                y="0.130859"
                width="6"
                height="24"
                rx="1"
                fill="#E1E1E1"
              />
            </svg>
          </>
        );
      case "hard":
        return (
          <>
            <svg
              className="h-full w-[16px]"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="13.1309" width="6" height="11" rx="1" fill="#4E7BBA" />
              <rect
                x="8"
                y="8.13086"
                width="6"
                height="16"
                rx="1"
                fill="#4E7BBA"
              />
              <rect
                x="16"
                y="0.130859"
                width="6"
                height="24"
                rx="1"
                fill="#4E7BBA"
              />
            </svg>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg
      className="h-full w-[16px]"
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {getBars(level)}
    </svg>
  );
};

export default DifficultyBar;
