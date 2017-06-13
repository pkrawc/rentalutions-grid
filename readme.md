# A Flexible Grid Package. Use it, or don't

Just a small grid built with `styled-components`. Grids should be modern and
easy. Tested down to IE8.

## Installation
`yarn add @rentalutions/grid`

## Documentation
1. [API](#api)
1. [Examples](#examples)

## API

### Row
```javascript
<Row></Row>
```
Properties:
- columns: an optional column prop. Defaults to 12

### Column
```javascript
<Column></Column>
```
Properties:
- sm: span on small screens
- md: span on medium screens
- lg: span on large screens
- offset: number of columns pushed right

## Examples
```javascript
import { Column, Row } from '@rentalutions/grid'

const App = props => (
  <Row columns={12}> // columns default to 12
    <Column sm={3}>
      hello column 1
    </Column>
    <Column sm={3}>
      hello column 2
    </Column>
    <Column sm={3}>
      hello column 3
    </Column>
    <Column sm={3}>
      hello column 4
    </Column>
  </Row>
)
```
