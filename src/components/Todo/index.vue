<template>
    <div class="grid bg-white rounded shadow-lg overflow-hidden w-30r gap-2 ">
        <div class="p-3">
            <div class="text-center text-2xl text-primary-dark mb-2">Todo List</div>
            <div class="flex justify-between items-center gap-2 relative">
                <input @keyup="error=false" @keyup.enter='addTodo' class="p-2 outline-none w-full bg-gray-100 rounded" type="text" placeholder="Add Todo" v-model="todo">
                <button @click="addTodo" class="btn-icon btn-success absolute right-2 "><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </div>
            <p v-if="error" class="text-red-600 font-semibold mt-1">Input field cannot be empty.</p>
        </div>
        <div class="max-h-96 overflow-y-auto scrollbar py-2 border-t border-b mb-12">
            <TodoList :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" :editTodo="editTodo" :viewTodo="viewTodo"/>
        </div>

        <div v-if="isModalVisible">
            <Modal />
        </div>
    </div>
</template>

<script>
    import TodoList from "./todolist.vue"
    import {uid} from "../utils/uid"
    import Modal from "../modal/modal.vue"

    export default {
        name:'Todo',
        components: {
            TodoList,
            Modal
        },
        data: function(){
            return {
                todo:"",
                editedTodo:null,
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
                error: false,
                isModalVisible: false,
            }
        },
        methods: {
            addTodo(){
                if(this.todo.length === 0 ) {
                    this.error = true
                    return
                }
                if(this.editedTodo===null){
                    this.todos.push({
                        id: uid(),
                        title: this.todo,
                        completed: false
                    })
                this.todo = ""
                }else{
                    (this.todos.find(todo => todo.id === this.editedTodo).title = this.todo)
                    this.todo=""
                    this.editedTodo = null
                }
            },
            viewTodo(todo){
                this.isModalVisible = true
                // this.todo = todo.title
                console.log(todo)
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
                this.editedTodo = id
                console.log(this.todo);
            }
        }
    }

</script>