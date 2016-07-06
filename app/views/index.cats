<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src='scripts/task-manager.js'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script type="text/javascript" src='scripts/interface.js'></script>
    <link type="text/css" rel="stylesheet" href="stylesheets/stylesheet.css" />
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    HEYA!
    <form id='task-form'>
        <label>
            Task
            <input id='task-content' name='task' type='text'>
        </label>
        <input id='add-task' type='submit' value='Add Task'>
    </form>
    <ul id='task-items'>
				{% loop taskManager.pendingTasks %}
					<li id="{{ index }}" class="pending">
						<input type="checkbox" name="{{ index }}">{{ item }}
					</li>
				{% endloop %}

				<!-- <li> You have no tasks to complete </li> -->
    </ul>

		<ul>
			{% loop taskManager.completedTasks %}
				<li id="{{ index }}" class="complete">
					<input type="checkbox" name="{{ index }}">{{ item }}
				</li>
			{% endloop %}
		</ul>
</body>
</html>