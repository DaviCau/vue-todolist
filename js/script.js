var app = new Vue ({
    el: "#root",
    data: {
        toDoList: [
            {
                testo: "Fare la spesa",
                completed: false
            },
            {
                testo: "Pulire casa",
                completed: false
            },
            {
                testo: "Fare da mangiare",
                completed: false
            },
            {
                testo: "Lavare i piatti",
                completed: false
            }
        ],
        inputField: ""
    },
    methods: {
        removeToDo: function(indexToRemove) {
            this.toDoList.splice(indexToRemove, 1)
        },
        addToDo: function() {
            var newToDo = {
                testo: this.inputField,
                completed: false
            };
            if (newToDo.testo.trim() != "")
            this.toDoList.push(newToDo);
            this.inputField = "";
        }
    }
});