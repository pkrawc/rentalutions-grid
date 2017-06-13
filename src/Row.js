import React, { Children, cloneElement } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RowWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  .rnt-column {
    box-sizing: border-box;
  }
`

Row.propTypes = {
  columns: PropTypes.number
}

export default function Row({children, className, columns, style, ...rest}) {
  return (
    <RowWrapper className={className} style={style}>
      {
        columns ? Children.map(children, (child, i) => (
          cloneElement(child, {columns})
        )) : children
      }
    </RowWrapper>
  )
}
