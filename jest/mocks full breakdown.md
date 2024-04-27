Types important for the thing being mocked.
```ts
type MockMetadataType = any;

type MockMetadata<T, MetadataType = MockMetadataType> = {
  ref?: number;
  members?: Record<string, MockMetadata<T>>;
  mockImpl?: T;
  name?: string;
  refID?: number;
  type?: MetadataType;
  value?: T;
  length?: number;
}

type Mocked<T> = any;
```

>**What is the purpose of `refs`?**
>In complex objects, there might be properties that reference each other or even reference themselves. This can create circular references.
>To handle this, each mockable entity is given a unique reference ID (`refID`), and a corresponding mock is stored in the `refs` object with this ID as the key.

Lets talk about `MockMetadata.members` in the context of mock generation typically represents the properties (including methods) of the object that is being mocked.

Suppose we have an object with two properties: a method `calculate` and a data property `value`.

```ts
{
  "calculate": {
    type: "function",
    mockImpl: /* some function or undefined */,
    // ...other metadata for the calculate method
  },
  "value": {
    type: "constant",
    value: /* the actual value or mock value */,
    // ...other metadata for the value property
  }
}
```

Generates then returns the mock. Also calls the callback functions once all references are accounted for. Does it this way because some mocks may depend on others that arent created yet, thus its better to wait and do it at the end.
```ts
function generateFromMetadata<T>(
  metadata: MockMetadata<T>,
): Mocked<T> {
  const callbacks: Array<Function> = [];
  const refs: Record<number, any> = {};
  const mock = this._generateMock(metadata, callbacks, refs);

  callbacks.forEach(callback => callback());

  return mock;
}
```

This function handles the generation of the item and all reference items of that item by calling this function recursively. It also adds those callbacks to update the mocks slots later in the function above.
```ts
function generateMock<T>(
  metadata: MockMetadata<T>,
  callbacks: Array<Function>,
  refs: Record<number, any>
  ): Mocked<T> {
  // Create a mock component based on the provided metadata
  const mock = makeComponent(metadata);

  // If this mock has a reference ID, store it in the refs object
  if (metadata.refID != null) {
    refs[metadata.refID] = mock;
  }

  // Iterate over each property (slot) in the metadata
  for (const slot in metadata.members) {
    const slotMetadata = metadata.members[slot];

    // If the slot has no reference, recursively generate a mock for it
    if (!slotMetadata.ref) {
      mock[slot] = this._generateMock(slotMetadata, callbacks, refs);
    } else {
      // If the slot has a reference, add a callback to update the mock's slot
      callbacks.push(() => {
        mock[slot] = refs[slotMetadata.ref];
      });
    }
  }

  // Set the mock's constructor if it's not a null or undefined type
  if (metadata.type !== 'undefined' && metadata.type !== 'null' && mock.prototype) {
    mock.prototype.constructor = mock;
  }

  return mock as Mocked<T>;
}
```

This function deals will figuring out which kind of mock it needs to make. Since it can be anything from arrays to functions. We will only be looking at functions in this example.

```ts
function makeComponent<T>(metadata: MockMetadata<T>) {
  if (metadata.type === 'function') {
      ...
    }
  }
}
```



Explanation for how `_createMockFuncton` works is here [[mocking functions]].

```ts
private _createMockFunction<T extends UnknownFunction>(
    metadata: MockMetadata<T>,
    mockConstructor: Function,
  ): Function {
    let name = metadata.name;
    if (!name) {
      return mockConstructor;
    }

    const boundFunctionPrefix = 'bound ';
    let bindCall = '';
    if (name.startsWith(boundFunctionPrefix)) {
      do {
        name = name.slice(boundFunctionPrefix.length);
        bindCall = '.bind(null)';
      } while (name && name.startsWith(boundFunctionPrefix));
    }

    if (name === MOCK_CONSTRUCTOR_NAME) {
      return mockConstructor;
    }

    if (
      RESERVED_KEYWORDS.has(name) ||
      /^\d/.test(name)
    ) {
      name = `$${name}`;
    }

    if (FUNCTION_NAME_RESERVED_PATTERN.test(name)) {
      name = name.replace(FUNCTION_NAME_RESERVED_REPLACE, '$');
    }

    const body =
      `return function ${name}() {` +
      `  return ${MOCK_CONSTRUCTOR_NAME}.apply(this,arguments);` +
      `}${bindCall}`;
    const createConstructor = new this._environmentGlobal.Function(
      MOCK_CONSTRUCTOR_NAME,
      body,
    );

    return createConstructor(mockConstructor);
  }
```