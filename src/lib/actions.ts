"use server";
import type { Todo } from "./types";

export async function getTodos(): Promise<Todo[]> {
  // todo
  return [];
}

export async function addTodo(text: string): Promise<Todo | null> {
  // todo
  return null;
}

export async function deleteTodo(id: number): Promise<boolean> {
  // todo
  return false;
}

export async function toggleTodo(id: number): Promise<Todo | null> {
  // todo
  return null;
}
