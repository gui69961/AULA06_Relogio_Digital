import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

export default class App extends Component {
  state = { agora: new Date() };
  intervalo = null;

  componentDidMount() {
    this.intervalo = setInterval(() => this.setState({ agora: new Date() }), 1000);
  }

  componentWillUnmount() {
    if (this.intervalo) clearInterval(this.intervalo);
  }

  render() {
    const { agora } = this.state;
    const hora = agora.toLocaleTimeString('pt-BR', { hour12: false });
    const data = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    return (
      <SafeAreaView style={styles.container}>
       
        <Text style={styles.titulo}>HORA ATUAL</Text>
        <Text style={styles.hora}>{hora}</Text>
        <Text style={styles.data}>{data}</Text>
        <View style={styles.linha} />
        <Text style={styles.rodape}>Relógio digital • CCP150</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101827', alignItems: 'center', justifyContent: 'center', padding: 24 },
  imagem: { width: 190, height: 140, borderRadius: 20, marginBottom: 32 },
  titulo: { color: '#94a3b8', fontSize: 16, letterSpacing: 5, fontWeight: 'bold' },
  hora: { color: '#67e8f9', fontSize: 48, fontWeight: 'bold', marginTop: 16, fontVariant: ['tabular-nums'] },
  data: { color: '#fff', fontSize: 18, textAlign: 'center', marginTop: 16, textTransform: 'capitalize' },
  linha: { width: 90, height: 4, borderRadius: 2, backgroundColor: '#67e8f9', marginTop: 30 },
  rodape: { color: '#64748b', marginTop: 20 },
});
