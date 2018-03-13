import { Injectable } from '@angular/core';

@Injectable()
export class StoreService 
{
  public todos: Array<ToDo>;

  constructor() 
  { 
    this.todos = new Array<ToDo>();    
  }

  add(title: String)
  {
    this.todos.push(new ToDo(title));
  }

  remove(todo: ToDo)
  {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  getItems(selected: Boolean)
  {
    return this.todos.filter((todo: ToDo) => todo.selected == selected);
  }

  IsAllItemsSelected()
  {
    return this.todos.length == this.getItems(true).length;
  }

  SelectAll(selected: Boolean)
  {
    this.todos.forEach((todo: ToDo) => todo.selected = selected);
  }

  removeSelectedItems()
  {
    this.todos = this.getItems(false);
  }
}

export class ToDo
{
  title: String;
  editing: Boolean;
  selected: Boolean;

  constructor(title: String)
  {
    this.title = title;
    this.editing = false;
    this.selected = false;
  }
}
