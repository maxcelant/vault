Spying allows you to record calls that have been made, along with the arguments that have been passed. They can also have controlled return values.

```javascript
const spy = jest.fn();
spy('arg1', 'arg2');

console.log(spy.mock.calls); // Prints: [ [ 'arg1', 'arg2' ] ]
```

### Alternative to using `jest.Mock`
It really works! Need 

```ts
import * as catalogModel from '@backstage/catalog-model';

const parseEntityRefMock = jest.spyOn(catalogModel, 'parseEntityRef');

parseEntityRefMock.mockReturnValue({ name: 'test' } as any)
```
### Spying on methods of objects
This is useful to see how a function interacts with an object's methods.

```javascript
const myObject = {
	method: () => 'hello world';
}

jest.spyOn(myObject, 'method');

myObject.method();

expect(myObject.method).toHaveBeenCalled();
```

### Spying without affecting original implementation
By default, `jest.spyOn` replaced the spied method with a mock version. You can undo this by adding `true` as a third param

```javascript
jest.spyOn(myObject, 'method', 'true');
```

### Altering the field

```javascript
const myObject = {
	method: () => 'hello world';
}

jest.spyOn(myObject, 'method').mockImplementation(() => 'altered value')
```

### Restoring the original value
After spying , the original implementation can be restored with `mockRestore`

```javascript
const myObject = {
  method: () => "original value"
};

const spy = jest.spyOn(myObject, 'method');

spy.mockRestore();

console.log(myObject.method()); // Prints: 'original value'
```

---
### Example

```ts
import { TemplateAction } from '@backstage/plugin-scaffolder-backend';
import { PassThrough } from 'stream';
import { promises as fsPromises } from 'fs';
import { appendValueToJSON } from './appendValueToJSON';

const readFileSpy = jest.spyOn(fsPromises, 'readFile');
const writeFileSpy = jest.spyOn(fsPromises, 'writeFile');

describe('appendValueToJSON', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    writeFileSpy.mockResolvedValue();
    readFileSpy.mockResolvedValue('{"properties":{"parameters":{"tagValue":{"defaultValue":["Abc","abc","Efg"]}}}}');
  });

  afterAll(() => {
    readFileSpy.mockRestore();
    writeFileSpy.mockRestore();
  });

  it('calls readFile with file path', async () => {
    await action.handler(getContext());

    expect(fsPromises.readFile).toHaveBeenCalledWith('lol/test/file/path.js', 'utf-8');
  });

  it('calls writeFile with correctly updated JSON', async () => {
    await action.handler(getContext());

    const updatedJSON = {
      properties: {
        parameters: {
          tagValue: {
            defaultValue: ['Abc', 'abc', 'bga', 'Efg'],
          },
        },
      },
    };

    expect(writeFileSpy).toHaveBeenCalledWith('lol/test/file/path.js', JSON.stringify(updatedJSON, null, 4), 'utf-8');
  });
```