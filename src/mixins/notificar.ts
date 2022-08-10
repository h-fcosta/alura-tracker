import { TipoNotificacao } from "@/Interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-mutacoes";
import { store } from "@/store";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, titulo: string, texto: string) {
      store.commit(NOTIFICAR, {
        titulo,
        texto,
        tipo: TipoNotificacao.SUCESSO,
      });
    },
  },
};
