import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function Send() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('SOL');

  const handleSend = () => {
    // Here you would implement actual transaction logic
    console.log(`Sending ${amount} ${selectedCrypto} to ${address}`);
    // Show success message and go back
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const cryptoOptions = [
    { symbol: 'SOL', name: 'Solana', balance: '0.3118', icon: require('@/assets/images/icon.png') },
    { symbol: '2025X', name: '2025X', balance: '23,018.83887', icon: require('@/assets/images/icon.png') },
    { symbol: 'XRP', name: 'XRP on Solana', balance: '451.37239', icon: require('@/assets/images/icon.png') },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Send</ThemedText>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Select Asset</ThemedText>
          <View style={styles.cryptoList}>
            {cryptoOptions.map((crypto) => (
              <TouchableOpacity
                key={crypto.symbol}
                style={[
                  styles.cryptoOption,
                  selectedCrypto === crypto.symbol && styles.selectedCrypto
                ]}
                onPress={() => setSelectedCrypto(crypto.symbol)}
              >
                <Image source={crypto.icon} style={styles.cryptoIcon} />
                <View>
                  <ThemedText style={styles.cryptoName}>{crypto.name}</ThemedText>
                  <ThemedText style={styles.cryptoBalance}>
                    {crypto.balance} {crypto.symbol}
                  </ThemedText>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>To</ThemedText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter address or Solana domain"
              placeholderTextColor="#8896A6"
              value={address}
              onChangeText={setAddress}
            />
            <TouchableOpacity style={styles.scanButton}>
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="#A78BFA" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Amount</ThemedText>
          <View style={styles.amountContainer}>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              placeholderTextColor="#8896A6"
              keyboardType="decimal-pad"
              value={amount}
              onChangeText={setAmount}
            />
            <ThemedText style={styles.amountSymbol}>{selectedCrypto}</ThemedText>
          </View>
          <TouchableOpacity style={styles.maxButton}>
            <ThemedText style={styles.maxButtonText}>MAX</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.sendButton, (!amount || !address) && styles.disabledButton]}
          onPress={handleSend}
          disabled={!amount || !address}
        >
          <ThemedText style={styles.sendButtonText}>Send {selectedCrypto}</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1729',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#A0AEC0',
    marginBottom: 12,
  },
  cryptoList: {
    gap: 12,
  },
  cryptoOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCrypto: {
    borderColor: '#A78BFA',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  cryptoName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  cryptoBalance: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: 16,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 16,
    color: 'white',
    fontSize: 16,
  },
  scanButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 12,
  },
  amountInput: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  amountSymbol: {
    color: '#A0AEC0',
    fontSize: 18,
  },
  maxButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: 8,
  },
  maxButtonText: {
    color: '#A78BFA',
    fontWeight: 'bold',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sendButton: {
    backgroundColor: '#A78BFA',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'rgba(167, 139, 250, 0.4)',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 