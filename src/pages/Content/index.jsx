import {Text, View, ScrollView, FlatList} from "react-native";
import {useState} from "react";
import styles from "./styles";
import Form from "../../components/Form";
import DataCard from "../../components/DataCard";

function Content() {
  const [cpaForm, setCpaForm] = useState({
    nomeProfessor: "",
    codigoDisciplina: 0,
    curso: "Sistemas de Informação",
    avaliacao: 5,
    melhorProfessor: false,
    comentarios: "",
    imagem: "",
  });
  const [cpaData, setCpaData] = useState([]);

  const renderData = ({item}) => <DataCard cpaData={item} />;

  const resetForm = () => {
    setCpaForm({
      email: "",
      cpf: "",
      nomeProfessor: "",
      codigoDisciplina: 0,
      curso: "Sistemas de Informação",
      avaliacao: 5,
      melhorProfessor: false,
      comentarios: "",
      imagem: "",
    });
  };

  return (
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Avaliação do Professor 🎓</Text>
        <Form
          cpaForm={cpaForm}
          setCpaForm={setCpaForm}
          cpaData={cpaData}
          setCpaData={setCpaData}
          resetForm={resetForm}
        />
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={cpaData}
          renderItem={renderData}
          keyExtractor={(item, index) => index.toString()} // Use index as key
        />
      </ScrollView>
    </View>
  );
}

export default Content;
