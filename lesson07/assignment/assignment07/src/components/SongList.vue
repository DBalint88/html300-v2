<template>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-'+indexRef" variant="info">{{ name }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+indexRef" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
</template>


<script>
export default {
  name: "SongList",
  props: {
    name: String,
    indexRef: Number
  },
};
</script>
