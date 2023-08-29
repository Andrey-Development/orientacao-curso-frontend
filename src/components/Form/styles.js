import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  labels: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  nameProfessor: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  course: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    height: 50,
    marginBottom: 24,
  },
  avaliacao: {
    width: "100%",
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 24,
  },
  premiacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  comentario: {
    width: "100%",
    maxWidth: 250,
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 10,
    textAlignVertical: "top", // Alinhar o texto ao topo da caixa
  },
  botaoCadastro: {
    alignItems: "center",
    marginBottom: 24,
    padding: 8,
    backgroundColor: "#2196F3",
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 1,
  },
  botaoTexto: {
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    paddingBottom: 8,
    textAlign: "center",
  },
  spinnerText: {
    color: "black", // Defina a cor do texto
    fontSize: 16, // Defina o tamanho da fonte
  },
});

export default styles;
