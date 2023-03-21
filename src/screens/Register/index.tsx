import React, { useState } from "react";
import { Modal } from "react-native";
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

  const { control, handleSubmit } = useForm();

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm name="name" control={control} placeholder="Nome" />
          <InputForm name="amount" control={control} placeholder="Preço" />
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
  );
}
