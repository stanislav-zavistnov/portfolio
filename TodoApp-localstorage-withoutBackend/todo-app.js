(function () {
    let todoItemArray = [];

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function generateId() {
        let maxId = 0;
        for (let i = 0; i < todoItemArray.length; i++) {
            if (todoItemArray[i].id > maxId) {
                maxId = todoItemArray[i].id;
            }
        }
        return maxId + 1;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary', 'disabled');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(todoItem) {
        let item = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = todoItem.name;
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';
        if (todoItem.done) {
            item.classList.toggle('list-group-item-success');
        }

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function localStorageSaver(storageName) {
        localStorage.setItem(storageName, JSON.stringify(todoItemArray));
    }

    function localStorageLoader(storageName, todoList) {
        let memory = localStorage.getItem(storageName);
        todoItemArray = JSON.parse(memory) || [];
        for (let b of todoItemArray) {
            appendTodoItem(b, todoList, storageName);
        }
    }

    function appendTodoItem(itemObject, todoList, storageName) {
        let todoItem = createTodoItem(itemObject);


        todoItem.doneButton.addEventListener('click', function () {
            todoItem.item.classList.toggle('list-group-item-success');
            for (let i = 0; i < todoItemArray.length; i++) {
                if (itemObject.id === todoItemArray[i].id) {
                    todoItemArray[i].done = !todoItemArray[i].done;
                }
            }
            localStorageSaver(storageName);
        });
        todoItem.deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                todoItem.item.remove();
                for (let i = 0; i < todoItemArray.length; i++) {
                    if (itemObject.id === todoItemArray[i].id) {
                        todoItemArray.splice(i, 1);
                    }
                }
                localStorageSaver(storageName);
            }
        });

        todoList.append(todoItem.item);
    }

    function createTodoApp(container, title, storageName) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();


        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        localStorageLoader(storageName, todoList);

        todoItemForm.input.addEventListener('input', function () {
            if (todoItemForm.input.value != '') {
                todoItemForm.button.classList.remove('disabled');
            } else {
                todoItemForm.button.classList.add('disabled');
            }
        });


        todoItemForm.form.addEventListener('submit', function (e) {
            e.preventDefault(); //избежать перезапуска страницы при отправке формы

            if (!todoItemForm.input.value) {
                return; // если пользователь ничего не ввел чтобы ничего не происходило
            }


            // todoList.append(createTodoItem(todoItemForm.input.value).item); //создание нового элемента списка с названием из поля ввода
            let itemObject = {
                id: generateId(),
                name: todoItemForm.input.value,
                done: false
            };

            todoItemArray.push(itemObject);
            localStorageSaver(storageName);
            appendTodoItem(itemObject, todoList, storageName);

            todoItemForm.input.value = ''; //обнуление поля ввода, чтобы каждый раз не стирать прошлое наименование, для внесения следующего
        });
    }

    window.createTodoApp = createTodoApp;
})();

