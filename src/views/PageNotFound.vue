<template lang="html">
  <v-app dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card light>
              <v-card-title>
                <div>
                  <h1>404 Page not found</h1>
                  <p>Beep boop, the AI did it's best, but it could not find the page you where looking for.</p>
                  <p>The URL may be misspelled or the page you're looking for is no longer available.</p>
                  <v-btn ripple :to="{ name: 'Home' }">
                    Take Me Home
                  </v-btn>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'PageNotFound'
};
</script>

<style lang="css">
</style>
