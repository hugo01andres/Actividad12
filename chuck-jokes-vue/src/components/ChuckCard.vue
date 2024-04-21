<template>
    <div class="col-md-4 mb-4">
      <div class="card">
        <img :src="iconUrl" class="card-img-top" alt="Chuck Norris">
        <div class="card-body">
          <p class="card-text">{{ value }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      iconUrl: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style>
  </style>
  