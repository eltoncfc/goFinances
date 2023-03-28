import React, { useState } from "react";
import { Keyboard, Modal, Alert, TouchableWithoutFeedback } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { InputForm } from "../../componentes/Forms/InputForm";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import { Button } from "../../componentes/Forms/Button";
import { TransactionTypeButton } from "../../componentes/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../componentes/Forms/CategorySelectButton";
import { CategorySelet as CategorySelect } from "../CategorySelect";

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor número")
    .positive("O valor não pode ser negativo")
    .required("Valor é obrigatório"),
});
export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, SetCategoryOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Category",
  });

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    SetCategoryOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    SetCategoryOpen(false);
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleRegister(form: FormData) {
    if (!transactionType) return Alert.alert("Selecione o tipo de transação");
    if (category.key === "category")
      return Alert.alert("Selecione a categoria");

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionsTypeSelect("up")}
                isActive={transactionType === "up"}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionsTypeSelect("down")}
                isActive={transactionType === "down"}
              />
            </TransactionsTypes>
            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategory}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSlectCatecategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
