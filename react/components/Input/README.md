Sizes

```js
<div>
  <div className="mb5">
    <Input
      label="Label"
      placeholder="Placeholder"
      helpText="Default input"
    />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      placeholder="Placeholder"
      helpText="Large input"
      size="large"
    />
  </div>

  <div>
    <Input
      label="Label"
      placeholder="Placeholder"
      helpText="Extra Large"
      size="x-large"
    />
  </div>
</div>
```

Prefix and suffix

```js
<div className="w-40">
  <div className="mb5">
    <Input
      label="Label"
      value="test"
      helpText="Input with prefix"
      prefix="R$"
    />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      value="test"
      helpText="Input with prefix, size large"
      size="large"
      prefix="R$"
    />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      value="test" 
      helpText="Input with prefix, size x-large"
      size="x-large"
      prefix="R$"
    />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      value="test"
      helpText="Input with prefix"
      suffix="R$"
    />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      value="test"
      helpText="Input with suffix, size large"
      size="large"
      suffix="R$"
    />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      value="test"
      helpText="Input with suffix, size x-large"
      size="x-large"
      suffix="R$"
    />
  </div>
</div>
```

```js
initialState = { value1: '', value2: '', value3: '' };
<div className="w-40">
  <div className="mb5">
    <Input
      type="search"
      placeholder="Search..."
      value={state.value1}
      onChange={(e) => setState({ value1: e.target.value })}
    />
  </div>

  <div className="mb5">
    <Input
      type="search"
      placeholder="Search..."
      value={state.value2}
      onChange={(e) => setState({ value2: e.target.value })}
      size="large"
    />
  </div>

  <div className="mb5">
    <Input
      type="search"
      placeholder="Search..."
      value={state.value3}
      onChange={(e) => setState({ value3: e.target.value })}
      size="x-large"
    />
  </div>
</div>
```

Other variations

```js
<div className="w-40">
  <div className="mb5">
    <Input disabled value="Hayao Miyazaki" label="Name" />
  </div>

  <div className="mb5">
    <Input type="password" label="Password" value="hunter2" />
  </div>

  <div className="mb5">
    <Input label="Token" token value="DUq0xuJZAD7Rvezv" />
  </div>

  <div className="mb5">
    <Input label="Label" value="43" errorMessage="Invalid field value" helpText="Olar" />
  </div>

  <div className="mb5">
    <Input
      label="Label"
      placeholder="Placeholder"
      dataAttributes={{ 'hj-white-list': true, test: 'string' }}
      helpText="Your help text goes here"
    />
  </div>
</div>
```
