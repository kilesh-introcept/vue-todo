<template>
    <div class="grid bg-white rounded shadow-lg overflow-hidden w-30r gap-2 ">
        <div class="p-3">
            <div class="flex justify-between items-center gap-2">
                <input @keyup="error=false" @keyup.enter='addTodo' class="p-3 outline-none w-full bg-gray-100 rounded-sm" type="text" placeholder="Add Todo" v-model="todo">
                <button @click="addTodo" class="btn-icon btn-success "><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </div>
            <p v-if="error" class="text-red-600 font-semibold mt-1">Input field cannot be empty.</p>
        </div>
        <div class="max-h-96 overflow-y-auto scrollbar py-2 border-t border-b mb-12">
            <TodoList :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" :editTodo="editTodo"/>
        </div>
    </div>
</template>

<script>
import TodoList from "./todolist.vue"
import {uid} from "../utils/uid"

export default {
    name:'Todo',
    components: {
        TodoList
    },
    data: function(){
        return {
            todo:"",
            todos: [
                {
                    id: uid(),
                    title: "Learn Vue",
                    completed: false
                },
                {
                    id: uid(),
                    title: "Learn Vuex",
                    completed: false
                },
                {
                    id: uid(),
                    title: "Learn Vue Router",
                    completed: false
                }
            ],
            error: false
        }
    },
    methods: {
        addTodo(){
            if(this.todo.length === 0 ) {
                this.error = true
                return
            }
            this.todos.push({
                id: uid(),
                title:this.todo,
                completed:false,
            })
            this.todo = ""
        },

        deleteTodo(id){
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        updateTodo(id){
            this.todos = this.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            
        },
        editTodo(id){
            this.todo = this.todos.find(todo => todo.id === id).title
            console.log(this.todo);
        }
    }
}

</script>