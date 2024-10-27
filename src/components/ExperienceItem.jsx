import React from "react";
import ExperienceModal from "./ExperienceModal";

function ExperienceItem({ image, name }) {

  return (
    <div className="expItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <ExperienceModal/>
    </div>
  );
}

export default ExperienceItem;
