# ael-modal

A simple and basic reusable modal component using react

<a href="https://www.npmjs.com/package/ael-modal"><img alt="npm" src="https://img.shields.io/npm/dw/ael-modal"></a>

<a href="https://www.npmjs.com/package/ael-modal"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/ael-modal"></a>

<a href="https://www.npmjs.com/package/ael-modal">

<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />

</a>

## Installation

```

npm install ael-modal

```

## Example

```js
import Modal from 'ael-modal'

import { useState } from 'react'

const Example = () => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setModalIsDisplayed(true)
  }

  return (
    <section className="container">
      <h1 className="title">Modale Exemple</h1>

      <form onSubmit={handleSubmit}>
        <button>Click me</button>
      </form>

      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div className="modal">
            <p>Message de la modale </p>
                    <div onClick={onCloseModal} className="custom-modal-btn-close">

          </div>
        }
      />
    </section>
  )
}

export default Example
```
