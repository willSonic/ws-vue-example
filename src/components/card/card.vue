<template>
    <div id="card-1" class="card">
      <div class="card-content">
        <header>
          <label class="title">{{ title }}</label>
        </header>
        <main>
          <p> {{ message }}</p>
          <button class="mdl-button mdl-js-button  mdl-js-ripple-effect"
                    @click="handleButtonClick">Sign Up</button>
        </main>
        <footer>
          <i class="fa fa-android"></i>
          <i class="fa fa-apple"></i>
          <i class="fa fa-windows"></i>
          <i class="fa fa-blackberry"></i>
        </footer>
      </div>
    </div>
</template>
<style lang="scss" src="./card.scss" scoped></style>
