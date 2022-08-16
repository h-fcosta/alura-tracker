<template>
  <Box>
<<<<<<< Updated upstream
    <div class="columns">
      <div class="column is-7">
=======
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
>>>>>>> Stashed changes
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";
import ITarefa from "@/Interfaces/ITarefa";

export default defineComponent({
  name: "TarefaVue",
  emits: ["aoTarefaClicada"],
  components: {
    Cronometro,
    Box,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },

  methods: {
    tarefaClicada(): void {
      this.$emit("aoTarefaClicada", this.tarefa);
    },
  },
});
</script>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
