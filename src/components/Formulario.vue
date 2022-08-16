<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
<<<<<<< Updated upstream
=======
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjetos">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
>>>>>>> Stashed changes
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="salvarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
<<<<<<< Updated upstream
import { defineComponent } from "vue";
=======
import { key } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
>>>>>>> Stashed changes
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "FormularioVue",
  emits: ["aoSalvarTarefa"],
  components: { Temporizador },
<<<<<<< Updated upstream
  data() {
    return {
      descricao: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      });
      this.descricao = "";
    },
=======

  setup(props, { emit }) {
    const store = useStore(key);

    const descricao = ref("");
    const idProjetos = ref("");

    const projetos = computed(() => store.state.projeto.projetos);

    const salvarTarefa = (tempoDecorrido: number): void => {
      emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find((proj) => proj.id == idProjetos.value),
      });
      descricao.value = "";
    };

    return {
      descricao,
      idProjetos,
      projetos,
      salvarTarefa,
    };
>>>>>>> Stashed changes
  },
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
