A Checkbox is simple solutions for asking the user for a binary, required and indendendent choice. 
They are always accompanied by a text label, which should be intuitive and provide sufficient context for the user take that decision. Avoid negative labels.

Checkboxes will often require the use of a button (like "SAVE" or "OK") to commit that choice. That means the checkbox shouldn't "autosave"

It may be initialized with a default value.

If the choice could be read as "turning something on or off" do consider using a Toggle.


Default

```js
initialState = { check1: true, check2: false };
<div>
  <Checkbox
    checked={state.check1}
    id="option-0"
    label="Option 0"
    name="default-checkbox-group"
    onChange={e => setState({ check1: !state.check1 })}
    value="option-0"
  />
  <Checkbox
    checked={state.check2}
    id="option-1"
    label="Option 1"
    name="default-checkbox-group"
    onChange={e => setState({ check2: !state.check2 })}
    value="option-1"
    />
</div>
```

Disabled

```js
initialState = { check1: true, check2: false };
<div>
  <Checkbox
    checked={state.check1}
    disabled
    label="Option 0"
    name="disabled-checkbox-group"
    onChange={() => {}}
    value="option-0"
  />
  <Checkbox
    checked={state.check2}
    disabled
    label="Option 1"
    name="disabled-checkbox-group"
    onChange={() => {}}
    value="option-1"
    />
</div>
```

