import React, { ReactNode } from 'react';
import styles from './grid.module.css';
import { useWindowSize } from '../../hooks';

interface GridProps {
  children: ReactNode | ReactNode[];
  smCols?: string;
  mdCols?: string;
  lgCols?: string;
  xlCols?: string;
  xxlCols?: string;
  space?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  xxlCols,
  space,
}) => {
  const { width, height } = useWindowSize();

  console.log('Width: ', width, 'Height: ', height);

  const gridCols = (() => {
    if (smCols === '1' && width === 768) {
      return styles.gridCols1;
    } else if (smCols === '2' && width === 768) {
      return styles.gridCols2;
    } else if (mdCols === '2' && width === 768) {
      return styles.gridCols2;
    } else if (mdCols === '2' && width === 1024) {
      return styles.gridCols2;
    } else if (mdCols === '3' && width === 1024) {
      return styles.gridCols3;
    } else if (lgCols === '3' && width > 1024) {
      return styles.gridCols3;
    } else if (lgCols === '4' && width > 1024) {
      return styles.gridCols4;
    } else if (lgCols === '5' && width > 1024) {
      return styles.gridCols5;
    } else if (xlCols === '6' && width > 1280) {
      return styles.gridCols6;
    } else if (xlCols === '7' && width > 1280) {
      return styles.gridCols7;
    } else if (xlCols === '8' && width > 1280) {
      return styles.gridCols8;
    } else if (xxlCols === '9' && width > 1536) {
      return styles.gridCols9;
    } else if (xxlCols === '10' && width > 1536) {
      return styles.gridCols10;
    } else if (xxlCols === '11' && width > 1536) {
      return styles.gridCols11;
    } else if (xxlCols === '12' && width > 1536) {
      return styles.gridCols12;
    }
  })();

  // const gridStyles = [styles.baseGrid, gridCols()]

  return <div className={`${styles.baseGrid} ${gridCols}`}>{children}</div>;
};
