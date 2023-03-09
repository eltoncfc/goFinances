import React, { useState } from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import { Input } from "../../componentes/Forms/Input";
import { Button } from "../../componentes/Forms/Button";
import { TransactionTypeButton } from "../../componentes/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../componentes/Forms/CategorySelectButton";
import { CategorySelet as CategorySelect } from "../CategorySelect";
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
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="nome" />
          <Input placeholder="Preço" />
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
        <Button title="Enviar" />
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
