<template>
  <div id="home">
    <h1>Bem Vindo a {{title}}</h1>

    <h3 v-if="horas >= 9 && horas < 17" id="aberta">ABERTA</h3>
    <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">PROXIMA DE FECHAR</h3>
    <h3 v-else id="fechada">FECHADA</h3>

    <div class="row">
      <div class="col">
        <h2>Filmes Encontrados</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      title: "Locadora de Filmes",
      horas: new Date().getHours()
    };
  }
};
</script>