#### Labels
```http
POST https://api.github.com/graphql
Authorization: bearer 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
Content-Type: application/json

{
    "query": "{ __type(name: \"Label\") { name kind description fields { name description type { kind name ofType { kind name }} }}}"
}
```

### Issues

```http
POST https://api.github.com/graphql
Authorization: bearer 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
Content-Type: application/json

{
    "query": "{ __type(name: \"Issue\") { name fields { name description }}}"
}
```

- This has a `lastEditedAt` field that will be useful.

### ProjectsV2
```http
POST https://api.github.com/graphql
Authorization: bearer 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
Content-Type: application/json

{
    "query": "{ __type(name: \"ProjectV2\") { name kind description fields { name description type { kind name ofType { kind name }} }}}"
}
```
- has an `items` param.

### ProjectV2ItemContent

```http
POST https://api.github.com/graphql
Authorization: bearer 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
Content-Type: application/json

{
    "query": "{ __type(name: \"ProjectV2ItemContent\") { possibleTypes {name}}}"
}
```

- `possibleTypes` include `DraftIssue`, `Issue`, and `PullRequest`.


### Progress v1

```
###
POST https://api.github.com/graphql
Authorization: bearer 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
Content-Type: application/json

{
    "query": "{ organization(login: \"MassimilianoCelant\") { projectV2(number: 1) { items(first: 10) { nodes { createdAt, id, content { ... on Issue { title } } } } } } }"
}
```