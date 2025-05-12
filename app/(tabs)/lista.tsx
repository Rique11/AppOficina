import React, { useState } from 'react';
import { Image } from 'expo-image';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function TabTwoScreen() {
  //Tarefas
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: 'Comprar mantimentos',
      prioridade: 'Alta',
      prazo: '12/05/2025',
      concluida: false,
    },
    {
      id: 2,
      titulo: 'Finalizar relatório',
      prioridade: 'Média',
      prazo: '14/05/2025',
      concluida: false,
    },
    {
      id: 3,
      titulo: 'Ligar para o Mike',
      prioridade: 'Baixa',
      prazo: '15/05/2025',
      concluida: false,
    },
    {
      id: 4,
      titulo: 'Passear com o cachorro',
      prioridade: 'Média',
      prazo: 'Hoje',
      concluida: false,
    },
  ]);
  // Logica para Concluir tarefa 
  const alternarConclusao = (id: number) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };
  //Logica para Remover tarefa
  const removerTarefa = (id: number) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
         {/*Header com logo*/} 
        <Image
          source={require('../../assets/images/logoTherion.jpg')}
          style={styles.reactLogo}
          contentFit="contain"
          transition={1000}
        />
      </View>
      {/* Corpo com o quadrado com borda arredondada branco*/}
      <View style={styles.corpo}>
          <Text style = {{fontSize: 20, fontWeight: 'bold', color: Colors.Therion.background}}>Lista de Tarefas</Text>
        {/*Mapemento das tarefas*/}
        {tarefas.map((tarefa) => (
          <View key={tarefa.id} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => alternarConclusao(tarefa.id)}>
              {/* Logica para alternar o botao de concluido */}
              <View style={[styles.circle, tarefa.concluida && styles.circleDone]}>
                {tarefa.concluida && <Text style={styles.checkMark}>✓</Text>}
              </View>
            </TouchableOpacity>
            {/* Tarefas mapeadas e mostrando dados de 1 por 1 */}
            <View style={styles.textContainer}>
              <Text style={[styles.itemText, tarefa.concluida && styles.itemTextDone]}>
                {tarefa.titulo}
              </Text>
              <Text style={styles.subText}>Prioridade: {tarefa.prioridade}</Text>
              <Text style={styles.subText}>Prazo: {tarefa.prazo}</Text>
            </View>
            {/* Logica para remoção no X */}
            <TouchableOpacity onPress={() => removerTarefa(tarefa.id)}>
              <Text style={styles.removeButton}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Therion.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    marginTop: 50,
  },
  corpo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#aaa',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  circleDone: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkMark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  itemTextDone: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  subText: {
    fontSize: 13,
    color: '#666',
  },
  removeButton: {
    fontSize: 18,
    color: '#aaa',
    paddingHorizontal: 6,
  },
});
