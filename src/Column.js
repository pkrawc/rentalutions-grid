import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { sizes } from './variables'

const getPercent = (span = 1, totalColumns = 12) => `${(100 / totalColumns) * span}%`

const Column = styled.div.attrs({
  className: 'row-column'
})`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: ${ ({xs, columns}) => xs ? getPercent(xs, columns) : '100%' };
  max-width: ${ ({xs, columns}) => xs ? getPercent(xs, columns) : '100%' };
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-left: ${ ({offset, columns}) => offset ? getPercent(offset, columns) : '0' };
  @media (min-width: ${sizes.small}) {
    flex-basis: ${
      ({xs, sm, columns}) =>
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100%'
    };
    max-width: ${
      ({xs, sm, columns}) =>
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100%'
    };
  }
  @media (min-width: ${sizes.medium}) {
    flex-basis: ${
      ({xs, sm, md, columns}) =>
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100%'
    };
    max-width: ${
      ({xs, sm, md, columns}) =>
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100%'
    };
  }
  @media (min-width: ${sizes.large}) {
    flex-basis: ${
      ({xs, sm, md, lg, columns}) =>
        lg ? getPercent(lg, columns) :
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100'
    };
    max-width: ${
      ({xs, sm, md, lg, columns}) =>
        lg ? getPercent(lg, columns) :
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100%'
    };
  }
  @media (min-width: ${sizes.xLarge}) {
    flex-basis: ${
      ({xs, sm, md, lg, xl, columns}) =>
        xl ? getPercent(xLg, columns) :
        lg ? getPercent(lg, columns) :
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100'
    };
    max-width: ${
      ({xs, sm, md, lg, xl, columns}) =>
        xl ? getPercent(xLg, columns) :
        lg ? getPercent(lg, columns) :
        md ? getPercent(md, columns) :
        sm ? getPercent(sm, columns) :
        xs ? getPercent(xs, columns) : '100%'
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
