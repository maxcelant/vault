This file provides a default entity transformer so that if the user doesn't provide a custom implementation, this one will be used.

## `getDocumentText()`
- Adds some metadata and the joins it with `:` split.
```ts
const getDocumentText = (entity: Entity): string => {
  const documentTexts: string[] = [];
  documentTexts.push(entity.metadata.description || '');

  if (isUserEntity(entity) || isGroupEntity(entity)) {
    if (entity.spec?.profile?.displayName) {
      documentTexts.push(entity.spec.profile.displayName);
    }
  }

  if (isUserEntity(entity)) {
    if (entity.spec?.profile?.email) {
      documentTexts.push(entity.spec.profile.email);
    }
  }

  return documentTexts.join(' : ');
};
```

## `defaultCatalogCollatorEntityTransformer`
- Returns a default transformer.
- Basically is just saying "This is what an entity looks like"
```ts
export const defaultCatalogCollatorEntityTransformer: CatalogCollatorEntityTransformer =
  (entity: Entity) => {
    return {
      title: entity.metadata.title ?? entity.metadata.name,
      text: getDocumentText(entity),
      componentType: entity.spec?.type?.toString() || 'other',
      type: entity.spec?.type?.toString() || 'other',
      namespace: entity.metadata.namespace || 'default',
      kind: entity.kind,
      lifecycle: (entity.spec?.lifecycle as string) || '',
      owner: (entity.spec?.owner as string) || '',
    };
  };
```