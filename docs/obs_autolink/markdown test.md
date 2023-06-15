# Heading 1

## Heading 2

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Heading 3

`test_main.py`

```python
import unittest
from unittest.mock import MagicMock
from main import *

class TestMain(unittest.TestCase):
	def test_times_two_add_one(self):
		num = 11
		times_two = MagicMock(return_value=22)
		actual = times_two_add_one(num)
		expected = 23
		self.assertEqual(expected, actual)

		# optional
		times_two = assert_called_with(num)
		# or
		times_two.assert_called_with(num)
```
