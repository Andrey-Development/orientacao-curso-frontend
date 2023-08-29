import {View, Text, Image} from "react-native";
import styles from "./styles";

function DataCard({cpaData}) {
  return (
    <View style={styles.card}>
      {cpaData.imagem && <Image src={cpaData.imagem} style={styles.image} />}
      <Text style={styles.title}>{`Professor ${cpaData.nomeProfessor}`}</Text>
      <Text style={styles.data}>{`E-mail: ${cpaData.email}`}</Text>
      <Text style={styles.data}>{`CPF: ${cpaData.cpf}`}</Text>
      <Text style={styles.data}>
        {`Código da Disciplina: ${cpaData.codigoDisciplina}`}
      </Text>
      <Text style={styles.data}>{`Curso: ${cpaData.curso}`}</Text>
      <Text style={styles.data}>
        {`Avaliação: ${Number(cpaData.avaliacao.toFixed(0))}`}
      </Text>
      <Text style={styles.data}>{`Comentários: ${cpaData.comentarios}`}</Text>
      <Text style={styles.data}>
        {`Premiação: ${
          cpaData.melhorProfessor ? "Melhor Professor" : "Sem Indicação"
        }`}
      </Text>
    </View>
  );
}

export default DataCard;
