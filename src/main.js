import Vue from 'vue'
import App from './App.vue' //Aqui é importado um componente Vue chamado App

Vue.config.productionTip = false

new Vue({ //Chamando o construtor para a criação da instância Vue.
   render: h => h(App), //o atributo “render” é utilizado, que é responsável por renderizar um componente dentro do elemento HTML que for a raiz da instância
}).$mount('#app') //é executado um método da instância Vue, chamado de .mount() que é utilizado para a inicialização da instância em um elemento HTML com o id “#app”.

