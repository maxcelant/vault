1. Putting multiple inputs and outputs to test the function
```python
import pytest

@pytest.mark.parametrize("player1, player2, expected_result", [
    ('rock', 'rock', 'Draw!'),
    ('paper', 'paper', 'Draw!'),
    ('spock', 'spock', 'Draw!'),
    ('lizard', 'lizard', 'Draw!'),
])
def test_rock_paper_returns_tie(player1, player2, expected_result):
    actual_result = rpsls(player1, player2)
    assert actual_result == expected_result
```

