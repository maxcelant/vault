- Can be used to make shallow copies of an object. This is helpful if you want to change the list within the `map` operation and don't want to change the original list.
`
```ts
const updatedTeams = originalTeams.map(team => {
  if (team.members < 10) {
    return { ...team, members: team.members + 5 };
  }
  return { ...team };
});
```

