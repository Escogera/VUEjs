"use strict";
// Создание простого счетчика: Создайте компонент счетчика, который имеет кнопку "+"
// и кнопку "-", и отображает текущее значение счетчика.При нажатии на кнопки счетчик должен увеличиваться или уменьшаться соответственно.

// Vue.component("counter", {
//     template: `
//     <div>
//     <p>{{counter}}</p>
//     <button @click="counterIncrease">+</button>
//     <button @click="counterDecrease">-</button>
//     </div>
//     `,
//     data() {
//         return {
//             counter: 0,
//         };
//     },
//     methods: {
//         counterDecrease() {
//             this.counter--;
//         },
//         counterIncrease() {
//             this.counter++;
//         },
//     },
// });


// Создайте компонент списка дел, в котором можно добавлять и удалять элементы.Каждый элемент списка должен иметь кнопку удаления, при нажатии на которую элемент списка будет удаляться.

// Vue.component("to-do-list", {
//     template: `
//     <div>
//     <input type="text" placeholder="Добавить элемент" v-model="toDoName">
//     <button @click="addToDoItem">Добавить</button>
//     <ul>
//     <li v-for="(item, index) in toDoList" :key="index">{{item}} <button @click="removeToDoItem(index)">Удалить</button></li>
//     </ul>
//     </div>
//     `,
//     data() {
//         return {
//             toDoList: ["Первый элемент", "Второй элемент", "Третий элемент"],
//             toDoName: "",
//         };
//     },
//     methods: {
//         addToDoItem() {
//             this.toDoList.push(this.toDoName);
//             this.toDoName = "";
//         },
//         removeToDoItem(index) {
//             this.toDoList.splice(index, 1);
//         },
//     },
// });

// Создайте компонент списка, который отображает массив элементов.Добавьте текстовое поле для фильтрации списка.При вводе текста в поле, список должен автоматически обновляться, отображая только элементы, содержащие введенный текст.

// Vue.component("to-do-list", {
//     template: `
//     <div>
//     <input type="text" placeholder="Добавить элемент" v-model="toDoName">
//     <button @click="addToDoItem">Добавить</button>
//     <ul>
//     <li v-for="(item, index) in filteredList" :key="index">{{item}} <button @click="removeToDoItem(index)">Удалить</button></li>
//     </ul>
//     <input type="text" placeholder="Фильтр" v-model="filterText">
//     </div>
//     `,
//     data() {
//         return {
//             toDoList: ["list 1", "list 2", "list 3"],
//             toDoName: "",
//             filterText: "",
//         };
//     },
//     methods: {
//         addToDoItem() {
//             this.toDoList.push(this.toDoName);
//             this.toDoName = "";
//         },
//         removeToDoItem(index) {
//             this.toDoList.splice(index, 1);
//         },
//     },
//     computed: {
//         filteredList() {
//             if (this.filterText) {
//                 return this.toDoList.filter((item) => item.includes(this.filterText));
//             } else {
//                 return this.toDoList;
//             }
//         },
//     },
// });

Vue.component("product", {
    props: {},
    template: `
    <div>
    <ul>
    <li v-for="item in sortedList" :key="item.id">{{item.productName}}, {{item.price}}</li>
    </ul>
    <button @click="sortDirection='up'">up</button>
    <button @click="sortDirection='down'">down</button>
    <button @click="sortDirection=''">Сброс</button>
    </div>
    `,
    data() {
        return {
            products: [{
                    id: 1,
                    productName: "Apple",
                    price: 15,
                },
                {
                    id: 2,
                    productName: "Pineapple",
                    price: 35,
                },
                {
                    id: 3,
                    productName: "Orange",
                    price: 20,
                },
            ],
            sortDirection: "",
        };
    },

    computed: {
        sortedList() {
            const sortedArrProducts = [...this.products];
            switch (this.sortDirection) {
                case "up":
                    return sortedArrProducts.sort((a, b) => a.price - b.price);
                case "down":
                    return sortedArrProducts.sort((a, b) => b.price - a.price);
                default:
                    return this.products;
            }
        },
    },
});

new Vue({
    el: "#app",
    data: {},
});