import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
`;

export const GridContainer = styled(Container).attrs((props) => ({
  cols: props.cols || '100%',
  rows: props.rows || '100%',
  colSpan: props.colSpan || '1/2',
  rowSpan: props.rowSpan || '1/2'
}))`
  display: grid;
  grid-column: ${(props) => props.colSpan};
  grid-row: ${(props) => props.rowSpan};

  &&.1By2Grid {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }

  &&.2By1Grid {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }

  &&.2By2Grid {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }

  &&.multiGrid {
    grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  }

  &&.multiCols {
    grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${props => props.rows};
  }

  &&.multiRows{
    grid-template-columns: ${props => props.cols};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }
`;

export const NestedContainer = styled.div`
  grid-column: ${(props) => props.colSpan};
  grid-row: ${(props) => props.rowSpan};
`;