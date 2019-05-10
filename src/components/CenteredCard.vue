<template lang="html">
  <VContent>
    <VContainer fluid>
      <VLayout align-center justify-center>
        <VFlex xs12 sm6>
          <VCard light>
            <slot></slot>
          </VCard>
        </VFlex>
      </VLayout>
    </VContainer>
  </VContent>
</template>

<script>
export default {
  name: 'CenteredCard'
};
</script>

<style lang="css" scoped>
</style>
