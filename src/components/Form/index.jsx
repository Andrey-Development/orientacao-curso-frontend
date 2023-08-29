/* eslint-disable import/no-extraneous-dependencies */
import {View, Text, TextInput, Switch, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import Spinner from "react-native-loading-spinner-overlay";
import * as yup from "yup";
import {useState, useEffect} from "react";
import formSchema from "../../utils/formValidation";

import styles from "./styles";

function Form({cpaForm, setCpaForm, cpaData, setCpaData, resetForm}) {
  const [imageName, setImageName] = useState("");
  const [validationErrors, setValidationErrors] = useState({}); // Estado para armazenar os erros de validação
  const [loading, setLoading] = useState(false);

  const handleFieldChange = (field, value) => {
    setCpaForm(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleImageUpload = async () => {
    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!image.canceled) {
        setImageName("Imagem Anexada");
        handleFieldChange("imagem", image.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await formSchema.validate(cpaForm, {abortEarly: false});
      const cpaFormWithId = {...cpaForm, id: uuid.v4()};
      setCpaData([...cpaData, cpaFormWithId]);
      setImageName("Selecionar Imagem");
      resetForm();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = {};
        error.inner.forEach(detail => {
          errors[detail.path] = detail.message;
        });
        setValidationErrors(errors);
      }
    }
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Defina o tempo em milissegundos (2000 ms = 2 segundos)

      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);

  return (
    <View style={styles.content}>
      <Spinner
        visible={loading} // Define a visibilidade do spinner
        textContent="Carregando..." // Texto exibido abaixo do spinner
        textStyle={styles.spinnerText} // Estilo para o texto do spinner
        color="black"
        animation="fade"
      />

      <Text style={styles.labels}>E-mail</Text>
      <TextInput
        style={styles.nameProfessor}
        placeholder="Digite seu e-mail"
        value={cpaForm.email}
        onChangeText={text => handleFieldChange("email", text)}
        maxLength={100}
      />

      <Text style={styles.labels}>CPF</Text>
      <TextInput
        style={styles.nameProfessor}
        placeholder="xxx.xxx.xxx-xx"
        value={cpaForm.cpf}
        onChangeText={text => handleFieldChange("cpf", text)}
        maxLength={13}
      />

      <Text style={styles.labels}>Nome do Professor</Text>
      <TextInput
        style={styles.nameProfessor}
        placeholder="Digite seu nome aqui"
        value={cpaForm.nomeProfessor}
        onChangeText={text => handleFieldChange("nomeProfessor", text)}
        maxLength={100}
      />

      <Text style={styles.labels}>Código da Disciplina</Text>
      <TextInput
        style={styles.nameProfessor}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        maxLength={999}
        value={cpaForm.codigoDisciplina.toString()}
        onChangeText={number => handleFieldChange("codigoDisciplina", number)}
      />

      <Text style={styles.labels}>Curso</Text>
      <Picker
        selectedValue={cpaForm.curso}
        onValueChange={itemValue => handleFieldChange("curso", itemValue)}
        style={styles.course}>
        <Picker.Item
          label="Sistemas de Informação"
          value="Sistemas de Informação"
        />
        <Picker.Item label="Ontopsicologia" value="Ontopsicologia" />
        <Picker.Item label="Direito" value="Direito" />
        <Picker.Item label="Pedagogia" value="Pedagogia" />
        <Picker.Item label="Ciências Contábeis" value="Ciências Contábeis" />
        <Picker.Item label="Administração" value="Administração" />
        <Picker.Item label="Direito" value="Direito" />
        <Picker.Item label="Pedagogia" value="Pedagogia" />
      </Picker>

      <Text style={styles.labels}>Avaliação</Text>
      <Text>{cpaForm.avaliacao.toFixed(0)}</Text>
      <Slider
        style={styles.avaliacao}
        minimumValue={0}
        maximumValue={10}
        value={cpaForm.avaliacao}
        onValueChange={value => handleFieldChange("avaliacao", value)}
      />

      <Text style={styles.labels}>Comentários</Text>
      <TextInput
        style={styles.comentario}
        placeholder="Digite seus comentários aqui"
        multiline
        maxLength={255}
        numberOfLines={4} // Defina o número máximo de linhas visíveis
        value={cpaForm.comentarios}
        onChangeText={text => handleFieldChange("comentarios", text)}
      />

      <Text style={styles.labels}>Anexar relatório</Text>
      <TouchableOpacity style={styles.image} onPress={handleImageUpload}>
        <Text>{imageName || "Selecionar Imagem"}</Text>
      </TouchableOpacity>

      <View style={styles.premiacao}>
        <Text style={styles.labels}>Melhor Professor</Text>
        <Switch
          value={cpaForm.melhorProfessor}
          onValueChange={() =>
            handleFieldChange("melhorProfessor", !cpaForm.melhorProfessor)
          }
        />
      </View>

      <TouchableOpacity
        style={styles.botaoCadastro} // Aplicando estilo ao TouchableOpacity
        onPress={handleSubmit}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>

      {Object.keys(validationErrors).map(fieldName => (
        <Text key={fieldName} style={styles.errorText}>
          {validationErrors[fieldName]}
        </Text>
      ))}
    </View>
  );
}

export default Form;
