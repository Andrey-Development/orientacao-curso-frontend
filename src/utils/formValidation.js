// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido!")
    .required("E-mail é obrigatório"),
  cpf: yup,
  nomeProfessor: yup.string().required("Nome do Professor é obrigatório"),
  codigoDisciplina: yup
    .number()
    .integer("Código da Disciplina deve ser um número inteiro")
    .min(1, "Código da Disciplina deve ser maior ou igual a 1")
    .required("Código da Disciplina é obrigatório"),
  curso: yup.string().required("Curso é obrigatório"),
  avaliacao: yup.number().min(0).max(10).required("Avaliação é obrigatória"),
  comentarios: yup.string().max(255).required("Comentários são obrigatórios"),
  imagem: yup.string(),
  melhorProfessor: yup
    .boolean()
    .required("Escolha se é o Melhor Professor ou não"),
});

export default formSchema;
