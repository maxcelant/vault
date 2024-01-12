Specified by the three dots `...` it basically means:
- `... on ProjectV2Field`: If the node is of type `ProjectV2Field`, then the query asks for the `id` and `name` of that field.
- `... on ProjectV2SingleSelectField`: If the node is of type `ProjectV2SingleSelectField`, then the query asks for the `id`, `name`, and `options` of that field.
- We are doing this because `nodes` could be many different types.

```json
query($org: String!, $number: Int!) {
  organization(login: $org){
    projectV2(number: $number) {
      id
      fields(first:20) {
        nodes {
          ... on ProjectV2Field {
            id
            name
          }
          ... on ProjectV2SingleSelectField {
            id
            name
            options {
              id
              name
            }
          }
        }
      }
    }
  }
}
```