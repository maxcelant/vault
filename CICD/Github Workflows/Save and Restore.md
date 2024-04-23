---
tags:
  - caching
  - "#workflows"
---
- Save is part of [[Caching]], and allows you to specify when you want a cache to be saved.
- Restore allows you to specify when you want a cache to be restored (aka fetched).

```yaml
      - name: yarn install
        if: steps.setup-node.outputs.cache-hit != 'true'
        run: yarn install --immutable

      - name: Restore Cache.json
        id: cache-dependencies
        uses: actions/cache/restore@v3
        with:
          path: ./packages/cli/src/commands/test-coverage/cache.json
          key: ${{ runner.os }}-${{ github.ref_name }}

      - run: yarn tsc
      - run: yarn lint:all
      - run: yarn cli test-coverage

      - name: Save Cache.json
        id: cache-dependencies
        uses: actions/cache/save@v3
        if: always()
        with:
          path: ./packages/cli/src/commands/test-coverage/cache.json
          key: ${{ runner.os }}-${{ github.ref_name }}

```