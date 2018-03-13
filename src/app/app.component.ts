import { Component } from '@angular/core';

//  Services
import { StoreService, ToDo } from './services/store.service';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
  newTodoText = '';
  allSelected = false;

  constructor
  (
    //  Services
    public storeService: StoreService
  )
  {
    this.storeService.todos
  }

  selectTodo(todo: ToDo)
  {
    todo.selected = !todo.selected;
  }

  addTodo()
  {
    if(this.newTodoText.length > 0)
    {
      this.storeService.add(this.newTodoText);
      this.newTodoText = '';
    }
  }

  updateTodo(todo: ToDo, editedTitle: String)
  {
    todo.editing = false;
    todo.title = editedTitle;
  }

  removeTodo(todo: ToDo)
  {
    this.storeService.remove(todo);
  }

  removeSelectedTodos()
  {
    this.storeService.removeSelectedItems();
  }
}
