import React, { useState } from "react";
import SessionType from "./SessionType";
import TimeSelectionPopup from "./TimeSelectionPopup";

export default function ParentComponent({ selectedTarotReaderId }) {
  const [showSessionType, setShowSessionType] = useState(true);
  const [showTimeSelection, setShowTimeSelection] = useState(false);

  const handleCloseSessionType = () => {
    setShowSessionType(false);
  };

  const handleOpenTimeSelection = () => {
    setShowSessionType(false);
    setShowTimeSelection(true);
  };

  const handleCloseTimeSelection = () => {
    setShowTimeSelection(false);
  };

  return (
    <div>
      {showSessionType && (
        <SessionType
          onClose={handleCloseSessionType}
          onSelectSchedule={handleOpenTimeSelection}
          selectedTarotReaderId={selectedTarotReaderId}
        />
      )}
      {showTimeSelection && (
        <TimeSelectionPopup onClose={handleCloseTimeSelection} />
      )}
    </div>
  );
}
