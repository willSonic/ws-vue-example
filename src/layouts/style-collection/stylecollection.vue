<template>
  <div class="jumbotron">
        <div v-for="garment in styleCollection.products" track-by="id">
          <p>{{garment.id}}</p>
        </div>
  </div>
</template>
