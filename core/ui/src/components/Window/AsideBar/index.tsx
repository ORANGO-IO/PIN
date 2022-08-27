import useDimension from "../../../services/hooks/useDimension";
import React, { useEffect, useRef, useState } from "react";
import Container, { ButtonStyle, ButtonContainer } from "./styles";
import Button from "../../Button";
/* global HTMLButtonElement */
/* global HTMLElement */

interface AsideBarProps {
  children: React.ReactNode;
}

const AsideBar: React.FC<AsideBarProps> = ({ children }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const refAside = useRef<HTMLElement>(null);
  const { width: widthAside } = useDimension(refAside);
  const { width } = useDimension(ref);
  const [sizeType, setSizeType] = useState<"normal" | "small">("normal");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let newSizeType: "normal" | "small" = "normal";

    if (width <= 600) {
      newSizeType = "small";
      setOpen(false);
    }

    setSizeType(newSizeType);
  }, [width]);

  return (
    <>
      <Container
        width={widthAside}
        ref={refAside}
        sizeType={sizeType}
        open={open}
      >
        <button
          ref={ref}
          className="modal"
          onClick={() => setOpen(false)}
        ></button>
        <ul>{children}</ul>
      </Container>
      {!open && sizeType === "small" && (
        <>
          <ButtonContainer></ButtonContainer>
          <Button
            style={{ position: "absolute", top: "8px", left: "8px" }}
            onClick={() => setOpen(!open)}
          >
            <ButtonStyle>
              <span className="span1" />
              <span className="span2" />
              <span className="span3" />
            </ButtonStyle>
          </Button>
        </>
      )}
    </>
  );
};

export default AsideBar;
