The Observer pattern is highly beneficial in scenarios where you have an object (the subject) whose state changes and many other objects (the observers) need to be notified about these changes.

---

First we create the subject that we want others to be notified about.

```python
class NotificationService:
    def __init__(self):
        self.__subscribers: list[Observer] = []

    def add(self, subscriber):
        self.__subscribers.append(subscriber)

    def remove(self, subscriber):
        self.__subscribers.remove(subscriber)

    def notify(self, message: str):
        for subscriber in self.__subscribers:
            subscriber.update(message)
```

Then we create the abstract `Observer` class that the observers will implement.

```python
class Observer(ABC):
    @abstractmethod
    def update(self):
        pass
```

Next, we implement the possible different observers.

```python
class SlackBot(Observer):
    def update(self, message: str):
        print(f'Slack message sent: {message}')

class DiscordBot(Observer):
    def update(self, message: str):
        print(f'Discord message sent: {message}')

class TeamsBot(Observer):
    def update(self, message: str):
        print(f'Teams message sent: {message}')
```

Lastly, we test it out!

```python
if __name__ == '__main__':
    service = NotificationService()
    service.add(SlackBot())
    service.add(DiscordBot())
    service.add(TeamsBot())
    service.notify("Hello this is a test message")
```

```bash
Slack message sent: Hello this is a test message
Discord message sent: Hello this is a test message
Teams message sent: Hello this is a test message
```