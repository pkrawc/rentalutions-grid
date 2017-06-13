# A Flexible Grid Package. Use it, or don't


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
