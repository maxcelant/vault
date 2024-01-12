**`jest.resetAllMocks()`**: This method does everything that `jest.clearAllMocks()` does, but it also restores the mock functions to their initial state. If you had replaced real implementations with mock implementations, `jest.resetAllMocks()` would remove those mock implementations. It's like doing a factory reset on your mock functions.

