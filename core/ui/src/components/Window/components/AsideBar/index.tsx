import useDimension from '@core/ui/src/services/hooks/useDimension';
import React, { useEffect, useRef, useState } from 'react';
import Container, { ButtonStyle, ButtonContainer, Modal } from './styles';
import Button from '@core/ui/src/components/Button';
/* global HTMLButtonElement */
/* global HTMLElement */

interface IAsideBarProps {
  children: React.ReactNode;
}

const AsideBar: React.FC<IAsideBarProps> = ({ children }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const refAside = useRef<HTMLElement>(null);
  const { width: widthAside } = useDimension(refAside);
  const { width } = useDimension(ref);
  const [sizeType, setSizeType] = useState<'normal' | 'small'>('normal');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let newSizeType: 'normal' | 'small' = 'normal';
    console.log('width', width);
    if (width <= 600) {
      newSizeType = 'small';
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
        <nav>
          <ul>{children}</ul>
        </nav>
      </Container>
      <Modal
        ref={ref}
        className="modal"
        sizeType={sizeType}
        open={open}
        onClick={() => setOpen(false)}
      ></Modal>
      {!open && sizeType === 'small' && (
        <>
          <ButtonContainer></ButtonContainer>
          <Button
            style={{ position: 'absolute', top: '8px', left: '8px' }}
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
