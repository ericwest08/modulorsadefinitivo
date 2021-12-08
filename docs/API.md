# @my-scope/my-package-name - v0.9.4

My module description. Please update with your module data.

**`remarks`**
This module runs perfectly in node.js and browsers

## Table of contents

### Classes

- [RsaPrivateKey](classes/RsaPrivateKey.md)
- [RsaPublicKey](classes/RsaPublicKey.md)

### Interfaces

- [rsaKeyPair](interfaces/rsaKeyPair.md)

### Type aliases

- [Response](API.md#response)

### Functions

- [default](API.md#default)
- [generateKeys](API.md#generatekeys)
- [helloWorld](API.md#helloworld)

## Type aliases

### Response

Ƭ **Response**: `string`

#### Defined in

[hello-world.ts:1](https://github.com/ericwest08/modulorsadefinitivo/blob/0283f30/src/ts/hello-world.ts#L1)

## Functions

### default

▸ **default**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:11](https://github.com/ericwest08/modulorsadefinitivo/blob/0283f30/src/ts/index.ts#L11)

___

### generateKeys

▸ `Const` **generateKeys**(`bitLength`): `Promise`<[`rsaKeyPair`](interfaces/rsaKeyPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitLength` | `number` |

#### Returns

`Promise`<[`rsaKeyPair`](interfaces/rsaKeyPair.md)\>

#### Defined in

rsa.ts:44

___

### helloWorld

▸ **helloWorld**(`name`): [`Response`](API.md#response)

Returns the a Hello to the input string name

**`remarks`** An example function that runs different code in Node and Browser javascript

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name to say hello to |

#### Returns

[`Response`](API.md#response)

A gratifying Hello to the input name

#### Defined in

[hello-world.ts:12](https://github.com/ericwest08/modulorsadefinitivo/blob/0283f30/src/ts/hello-world.ts#L12)
