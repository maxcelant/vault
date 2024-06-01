You can create threads like this:
```python
import threading

thread_name = threading.Thread(target=func_name)
thread_name.start()

...
thread_name.join() # Waits for thread to complete it's execution
```