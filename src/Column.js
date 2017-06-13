import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const getPercent = (span = 1, totalColumns = 12) => `${(100 / totalColumns) * span}%`

const Column = styled.div.attrs({
  className: 'rnt-column'
})`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: ${ ({sm, columns}) => sm ? getPercent(sm, columns) : '100%' };
  max-width: ${ ({sm, columns}) => sm ? getPercent(sm, columns) : '100%' };
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-left: ${ ({offset, columns}) => offset ? getPercent(offset, columns) : '0' };
  @media (min-width: 540px) {
    flex-basis: ${
      ({sm, md, columns}) =>
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) : '100%'
    };
    max-width: ${
      ({sm, md, columns}) =>
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) : '100%'
    };
  }
  @media (min-width: 720px) {
    flex-basis: ${
      ({sm, md, lg, columns}) =>
        lg ? getPercent(lg, columns) :
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) : '100'
    };
    max-width: ${
      ({sm, md, lg, columns}) =>
        lg ? getPercent(lg, columns) :
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) : '100%'
    };
  }
`

Column.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  columns: PropTypes.number,
  offset: PropTypes.number
}

export default Column
