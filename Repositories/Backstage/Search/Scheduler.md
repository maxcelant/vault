**[Link](https://github.com/backstage/backstage/blob/master/plugins/search-backend-node/src/Scheduler.ts)**

- Designed to manage the execution of tasks over time. 
- **Constructor (`constructor`):**
   - When a `Scheduler` object is created, it initializes with a logger, an empty schedule object, an empty array of abort controllers, and a flag `isRunning` set to false. These properties are set up to manage and control the scheduled tasks.

- **Add to Schedule (`addToSchedule`):**
   - This method allows a new task to be added to the scheduler's schedule. It takes an object with three properties: an `id` to uniquely identify the task, a `task` function that defines the work to be done, and a `scheduledRunner` that defines when and how often the task should run.
   - It checks if the scheduler is already running, in which case it throws an error because tasks cannot be added once the scheduler has started.
   - It also checks if a task with the given `id` already exists in the schedule, in which case it throws an error to prevent duplicate tasks.

- **Start (`start`):**
   - This method starts the scheduling process for each task in the schedule.
   - It logs that the scheduling process is starting, sets the `isRunning` flag to true, and then iterates through each task in the schedule.
   - For each task, it creates a new `AbortController` to provide a way to signal a task should be aborted. It stores these controllers in the `abortControllers` array for later use.
   - It then calls the `scheduledRunner.run` method for each task, passing in the task `id`, the task function `fn`, and the abort signal `signal` from the `AbortController`. This begins the process of running the task according to its schedule.

- **Stop (`stop`):**
   - This method stops all scheduled tasks.
   - It logs that the scheduling process is stopping, iterates through each `AbortController` in the `abortControllers` array, calling the `abort` method to signal each task to stop.
   - It then clears the `abortControllers` array and sets the `isRunning` flag to false.

In summary, the `Scheduler` class provides a mechanism to add tasks to a schedule, start the scheduled execution of those tasks, and stop the scheduled tasks. The `addToSchedule` method allows tasks to be added, the `start` method begins the scheduled execution, and the `stop` method provides a way to halt all scheduled tasks. Through this design, the `Scheduler` class orchestrates the timing and execution of tasks, allowing the `IndexBuilder` to focus on defining the tasks themselves.


