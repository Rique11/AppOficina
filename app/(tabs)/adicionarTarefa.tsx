import React, { useState } from 'react';
import { Image } from 'expo-image';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Colors} from '../../constants/Colors';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Platform, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function HomeScreen() {
  //Define as variaveis do Titulo da tarefa
  const [titulo, setTitulo] = useState('');

  // Define o tipo Prioridade  criar tipo nesse formato é uma propriedade do Typescript que ajuda em alguns casos
  type Prioridade = {  
    id: string;
    label: string;
    icon: string;
    color: string;
  };
  // Define as prioridades
  const prioridades: Prioridade[] = [ 
    { id: 'baixa', label: 'Baixa', icon: 'free-breakfast', color: '#52c41a' },
    { id: 'media', label: 'Média', icon: 'report-problem', color: '#faad14' },
    { id: 'alta', label: 'Alta', icon: 'priority-high', color: '#ff4d4f' },
  ];

   // Estado para armazenar a prioridade selecionada
  const [prioridade, setPrioridade] = useState<string | null>(null);

  const [dataPrazo, setDataPrazo] = useState<Date | null>(null);
  const [mostrarPicker, setMostrarPicker] = useState(false);

  //Botao final 
  const handleInserirTask = () => {
    if (!titulo.trim()) {
      alert('Por favor, digite o nome da tarefa.');
      return;
    }
  
    const novaTask = {
      titulo,
      prioridade,
      prazo: dataPrazo,
    };
  
    console.log('Tarefa criada:', novaTask);
  
    // Aqui você pode adicionar lógica para salvar no estado, banco de dados, etc.
    // (Opcional) Limpar os campos
    setTitulo('');
    setPrioridade(null);
    setDataPrazo(null);
  };
  return (
    /*Scroll View para inciar a pagina*/
   <ScrollView style ={styles.container}>    
    {/* Header da tela */}
    <View style={styles.header}> 
      <Image 
        source={require('../../assets/images/logoTherion.jpg')}
        style={styles.reactLogo}
        contentFit="contain"
        transition={1000}
        ></Image> 
      {/*Logo do Therion*/}
      </View>
       {/* Formulário para adicionar tarefa */}    
    <View style={styles.formulario}> 
      <Text style = {{fontSize: 20, fontWeight: 'bold', color: Colors.Therion.background}}>Adicionar Tarefa</Text>
      {/* Campo de texto para adicionar tarefa*/}
      <TextInput 
        placeholder="Digite o nome da tarefa"
        style={{marginTop:'auto', height: 40, borderColor: Colors.Therion.background, borderWidth: 1, marginBottom: 'auto', width: '100%', paddingLeft: 10 }}
        value={titulo}
        onChangeText ={setTitulo}
       > 
      </TextInput>
      {/* Espaçamento entre os botões */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, gap: 8, width: '100%' }}> 
      {/* Formulário para adicionar tarefa */} 
      {prioridades.map((p) => ( 
      <TouchableOpacity
        key={p.id}
        onPress={() => setPrioridade(p.id)}
        style={[
          styles.botoesPrioridade,
          { backgroundColor: prioridade === p.id ? Colors.Therion.backgroundopaco : '#eee' }, // Cor de fundo do botão selecionado com o rosa apaco
        ]}>
          {/*// Ícone de prioridade*/}
          <MaterialIcons 
            name={p.icon as any}
            size={20}
            /*Cor do ícone (mesma logica da cor do botao)*/
            color={prioridade === p.id ? '#fff' : '#000'} 
          />
          
          <Text style={{ marginLeft: 8, color: prioridade === p.id ? '#fff' : '#000' }}> 
            {p.label}  {/* Nome da prioridade */}
          </Text>
      </TouchableOpacity> 
      ))}
    </View> 
    {/* Fim secção dos botões */}
      {/* Campo de data para adicionar prazo da tarefa */}
      <View style={{ marginTop: 'auto', width: '100%' }}>
        <TouchableOpacity
          onPress={() => setMostrarPicker(true)}
          style={{
            padding: 12,
            backgroundColor: '#eee',
            borderRadius: 8,
          }}
        >
          <Text>
            {dataPrazo ? dataPrazo.toLocaleDateString() : 'Selecionar prazo'}
          </Text>
        </TouchableOpacity>
        {/*Mostrar datePicker (Elemento nativo, funciona apenas no celular*/}
        {mostrarPicker && (
          <DateTimePicker
            value={dataPrazo || new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setMostrarPicker(Platform.OS === 'ios'); // fecha se Android
              if (selectedDate) setDataPrazo(selectedDate);
            }}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => handleInserirTask()}
        style= {styles.botaoInserir}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Inserir Tarefa</Text>
      </TouchableOpacity>
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
  formulario: {
    backgroundColor: '#fff',       // Define o fundo branco
    borderRadius: 10,              // Deixa as bordas arredondadas
    padding: 20,                   // Espaçamento interno para o conteúdo
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',           // Centraliza horizontalmente
    width: '80%',  
    height: '70%'                // Define a largura para não ocupar a tela toda
  },
  reactLogo: {
    height: 178,
    width: 290,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  picker: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.Therion.background,
    marginVertical: 10,
    //backgroundColor: Colors.Therion.backgroundopaco, // Cor de fundo do Picker
  },
  botoesPrioridade:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  botaoInserir:{
    marginTop: 'auto',
    backgroundColor: Colors.Therion.backgroundopaco,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  }
});
