<template>
  <a href="/help">
    <div class="help">
      <h1 class="title">HELP??</h1>
    </div>
  </a>
</template>

<style>
  .help{
    background-image: url("../assets/img/help.gif");
    /*background-color: blue ;*/
    position: absolute;
    background-size: 100% 100%;
    bottom: 0;
    right: 0;
    margin: 50px;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
      h1{
        animation: help 5s infinite;
        @keyframes help {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
  }
</style>
