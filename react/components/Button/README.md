Use Buttons to trigger actions or to perform navigation.

### Chosing a size
Avoid mixing different button sizes in the same screen. Chose the size based on the density of information that your interface needs.

_High density_ interfaces expose more details and offer more options and decisions, thus are suitable to more technical users. _Low density_ interfaces focus in simplifying information, fewer decisions to take and are normally easier to use and oriented to less technical users.

In doubt, use the Default sized buttons.


### Chosing a variation
Our Styleguide defines 3 main variations based on the button visual proeminence. As with any UI element, the proeminence should be proportional to the importance of that element.
 
Do mix variations as needed.

Avoid having more than one Primary button, save this kind for the most important or most recommended action in a given screen.

Use the Danger variation for destructive actions that delete data or lead to a state that is hard to recover. Danger buttons should _always_ have a confirmation dialog.

In doubt, use Secondary buttons.


Examples

```js
<div>
  <div>
    <span className="mr4">
      <Button variation="primary">Primary</Button>
    </span>
    <span className="mr4">
      <Button variation="secondary">Secondary</Button>
    </span>
    <span className="mr4">
      <Button variation="tertiary">Tertiary</Button>
    </span>
    <span className="mr4">
      <Button variation="danger">Danger</Button>
    </span>
  </div>
  <div className="mt4">
    <span className="mr4">
      <Button variation="primary" disabled>Primary</Button>
    </span>
    <span className="mr4">
      <Button variation="secondary" disabled>Secondary</Button>
    </span>
    <span className="mr4">
      <Button variation="tertiary" disabled>Tertiary</Button>
    </span>
    <span className="mr4">
      <Button variation="danger" disabled>Danger</Button>
    </span>
  </div>
</div>
```

Sizes

```js
<div>
  <div className="mb4">
    <span className="mr4">
      <Button variation="primary" size="small">
        Small
      </Button>
    </span>
    <span className="mr4">
      <Button variation="primary">
        Default
      </Button>
    </span>
    <span className="mr4">
      <Button variation="primary" size="large">
        Large
      </Button>
    </span>
  </div>
  <div className="mb4">
    <span className="mr4">
      <Button variation="secondary" size="small">
        Small
      </Button>
    </span>
    <span className="mr4">
      <Button variation="secondary" size="regular">
        Default
      </Button>
    </span>
    <span className="mr4">
      <Button variation="secondary" size="large">
        Large
      </Button>
    </span>
  </div>
  <div className="mb4">
    <span className="mr4">
      <Button variation="tertiary" size="small">
        Small
      </Button>
    </span>
    <span className="mr4">
      <Button variation="tertiary" size="regular">
        Default
      </Button>
    </span>
    <span className="mr4">
      <Button variation="tertiary" size="large">
        Large
      </Button>
    </span>
  </div>
  <div className="mb4">
    <span className="mr4">
      <Button variation="danger" size="small">
        Small
      </Button>
    </span>
    <span className="mr4">
      <Button variation="danger" size="regular">
        Default
      </Button>
    </span>
    <span className="mr4">
      <Button variation="danger" size="large">
        Large
      </Button>
    </span>
  </div>
</div>
```

Box types

```js
<div>
  <div className="mb4">
    <Button variation="primary">Default</Button>
  </div>
  <div className="mb4">
    <Button variation="primary" block>
      Block
    </Button>
  </div>
</div>
```

Colored container background

```js
<div className="bg-washed-blue pa5">
  <div>
    <span className="mr4">
      <Button variation="primary">Primary</Button>
    </span>
    <span className="mr4">
      <Button variation="secondary">Secondary</Button>
    </span>
    <span className="mr4">
      <Button variation="tertiary">Neutral</Button>
    </span>
  </div>
  <div className="mt4">
    <span className="mr4">
      <Button variation="primary" disabled>Primary</Button>
    </span>
    <span className="mr4">
      <Button variation="secondary" disabled>Secondary</Button>
    </span>
    <span className="mr4">
      <Button variation="tertiary" disabled>Neutral</Button>
    </span>
  </div>
</div>
```

With icon

```js
const CloseIcon = require('../icon/Close').default
;<Button icon variation="primary">
  <CloseIcon color="#fff" />
</Button>
```

Loading state

```js
initialState = { isLoading1: false, isLoading2: true };
<div>
  <div>
    <Button
      variation="primary"
      onClick={() => setState({ isLoading1: !state.isLoading1 })}
      isLoading={state.isLoading1}
    >
      Toggle loading state
    </Button>
  </div>
  <div className="mt4">
    <Button
      variation="primary"
      onClick={() => setState({ isLoading2: !state.isLoading2 })}
      isLoading={state.isLoading2}
    >
      Toggle loading state
    </Button>
  </div>
</div>
```
