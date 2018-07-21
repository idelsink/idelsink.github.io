<template lang="html">
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6>
          <v-card light>
            <slot></slot>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'CenteredCard'
};
</script>

<style lang="css" scoped>
</style>
