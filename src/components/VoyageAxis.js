import styled from "styled-components";
import { useState, useEffect } from "react";

const VoyageAxisStyles = styled.div`
  width: 80vw;
  margin: 40vh 10vw;
  display: flex;
  text-align: center;
  .startingDot span {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
  }
  .destinationDot span {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
  }
  .loadingDot1,
  .loadingDot2,
  .loadingDot3,
  .loadingDot4,
  .loadingDot5,
  .loadingDot6,
  .loadingDot7,
  .loadingDot8,
  .loadingDot9,
  .loadingDot10,
  .loadingDot11,
  .loadingDot12 {
    height: 25px;
    width: 25px;
    margin: 5px;
    border-radius: 50%;
    display: inline-block;
    background-color: var(--standard-color);
  }
`;

const VoyageAxis = () => {
  const today = new Date();
  const currentTime = today.getHours().toString();
  const departureTime = "09";
  const arrivalTime = "21";

  const [portOfLoading, setPortOfLoading] = useState();
  const [portOfDischarge, setPortOfDischarge] = useState();

  useEffect(() => {
    if (currentTime >= departureTime) {
      setPortOfLoading("0");
      document.querySelector(".departureDot").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "10") {
      setPortOfLoading("8.3");
      document.querySelector(".loadingDot1").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "11") {
      setPortOfLoading("16.66");
      document.querySelector(".loadingDot2").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "12") {
      setPortOfLoading("25");
      document.querySelector(".loadingDot3").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "13") {
      setPortOfLoading("33.3");
      document.querySelector(".loadingDot4").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "14") {
      setPortOfLoading("41.6");
      document.querySelector(".loadingDot5").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "15") {
      setPortOfLoading("50");
      document.querySelector(".loadingDot6").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "16") {
      setPortOfLoading("58.3");
      document.querySelector(".loadingDot7").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "17") {
      setPortOfLoading("66.6");
      document.querySelector(".loadingDot8").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "18") {
      setPortOfLoading("75");
      document.querySelector(".loadingDot9").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "19") {
      setPortOfLoading("83.5");
      document.querySelector(".loadingDot10").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "20") {
      setPortOfLoading("91.5");
      document.querySelector(".loadingDot11").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= "21") {
      setPortOfLoading("100");
      document.querySelector(".loadingDot12").style.backgroundColor =
        "var(--loading-color)";
    }
    if (currentTime >= arrivalTime) {
      setPortOfDischarge("100");
      document.querySelector(".arrivalDot").style.backgroundColor =
        "var(--loading-color)";
    }
  }, [currentTime]);

  console.log(portOfLoading, portOfDischarge);

  return (
    <VoyageAxisStyles>
      <div className="startingDot">
        <span
          className="departureDot"
          style={{ backgroundColor: "var(--standard-color)" }}
        />
        <p>Karlshamn</p>
      </div>
      <span className="loadingDot1" />
      <span className="loadingDot2" />
      <span className="loadingDot3" />
      <span className="loadingDot4" />
      <span className="loadingDot5" />
      <span className="loadingDot6" />
      <span className="loadingDot7" />
      <span className="loadingDot8" />
      <span className="loadingDot9" />
      <span className="loadingDot10" />
      <span className="loadingDot11" />
      <span className="loadingDot12" />
      <div className="destinationDot">
        <span
          className="arrivalDot"
          style={{ backgroundColor: "var(--standard-color)" }}
        />
        <p>Klaipeda</p>
      </div>
    </VoyageAxisStyles>
  );
};

export default VoyageAxis;
