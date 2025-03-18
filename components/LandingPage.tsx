import { StyleSheet, Image, Pressable, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function LandingPage() {
  const router = useRouter();

  const handleSend = () => {
    router.push('/send');
  };

  const cryptoData = [
    {
      name: 'Solana',
      symbol: 'SOL',
      amount: '0.3118',
      balance: '$70.55',
      change: '-$3.72',
      isPositive: false,
      icon: require('@/assets/images/icon.png'),
    },
    {
      name: '2025X Before New Year\'s Eve',
      symbol: '2025X',
      amount: '23,018.83887',
      balance: '$2.00',
      change: '+$0.74',
      isPositive: true,
      icon: require('@/assets/images/icon.png'),
    },
    {
      name: 'XRP on Solana',
      symbol: 'XRP',
      amount: '451.37239',
      balance: '$1.72',
      change: '+$0.25',
      isPositive: true,
      icon: require('@/assets/images/icon.png'),
    },
    {
      name: 'CHILLGRINCH',
      symbol: 'CHILLGR',
      amount: '13,127.96505',
      balance: '$1.24',
      change: '-$0.45',
      isPositive: false,
      icon: require('@/assets/images/icon.png'),
    },
    {
      name: 'HUZZMAS',
      symbol: 'HUZZMAS',
      amount: '86,992.91090',
      balance: '$1.19',
      change: '-$0.31',
      isPositive: false,
      icon: require('@/assets/images/icon.png'),
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <LinearGradient
        colors={['#193125', '#0D1117']}
        style={styles.gradient}
      />
      
      <View style={styles.header}>
        <View style={styles.accountRow}>
          <View style={styles.accountSection}>
            <ThemedText style={styles.accountText}>Account 1</ThemedText>
            <Ionicons name="chevron-down" size={20} color="white" />
          </View>
          
          <View style={styles.actionButtons}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" style={styles.menuIcon} />
          </View>
        </View>
      </View>
      
      <View style={styles.balanceContainer}>
        <ThemedText style={styles.balanceAmount}>$1,694.00</ThemedText>
        <View style={styles.profitRow}>
          <ThemedText style={styles.profitAmount}>+$1,172.50</ThemedText>
          <ThemedText style={styles.profitPercentage}>+224.83%</ThemedText>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.actionIconContainer}>
            <MaterialCommunityIcons name="qrcode-scan" size={24} color="#A78BFA" />
          </TouchableOpacity>
          <ThemedText style={styles.actionText}>Receive</ThemedText>
        </View>
        
        <View style={styles.actionItem}>
          <TouchableOpacity 
            style={styles.actionIconContainer}
            onPress={handleSend}
          >
            <Ionicons name="paper-plane" size={24} color="#A78BFA" />
          </TouchableOpacity>
          <ThemedText style={styles.actionText}>Send</ThemedText>
        </View>
        
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.actionIconContainer}>
            <MaterialCommunityIcons name="swap-horizontal" size={24} color="#A78BFA" />
          </TouchableOpacity>
          <ThemedText style={styles.actionText}>Swap</ThemedText>
        </View>
        
        <View style={styles.actionItem}>
          <TouchableOpacity style={styles.actionIconContainer}>
            <FontAwesome5 name="dollar-sign" size={24} color="#A78BFA" />
          </TouchableOpacity>
          <ThemedText style={styles.actionText}>Buy</ThemedText>
        </View>
      </View>
      
      <ScrollView style={styles.tokensContainer}>
        {cryptoData.map((crypto, index) => (
          <View key={index} style={styles.tokenCard}>
            <View style={styles.tokenInfo}>
              <Image source={crypto.icon} style={styles.tokenIcon} />
              <View>
                <ThemedText style={styles.tokenName}>{crypto.name}</ThemedText>
                <View style={styles.tokenAmountRow}>
                  <ThemedText style={styles.tokenAmount}>{crypto.amount} {crypto.symbol}</ThemedText>
                </View>
              </View>
            </View>
            
            <View style={styles.tokenValue}>
              <ThemedText style={styles.tokenBalance}>{crypto.balance}</ThemedText>
              <ThemedText style={[
                styles.tokenChange,
                crypto.isPositive ? styles.positiveChange : styles.negativeChange
              ]}>
                {crypto.change}
              </ThemedText>
            </View>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  accountSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 20,
    color: 'white',
    marginRight: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginLeft: 5,
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  balanceAmount: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    letterSpacing: 1,
  },
  profitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profitAmount: {
    fontSize: 18,
    color: '#4ADE80',
    marginRight: 10,
  },
  profitPercentage: {
    fontSize: 18,
    color: '#4ADE80',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    color: '#E2E8F0',
    fontSize: 14,
  },
  tokensContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tokenCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },
  tokenInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  tokenIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  tokenName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  tokenAmountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  tokenAmount: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  tokenValue: {
    alignItems: 'flex-end',
    flex: 1,
  },
  tokenBalance: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tokenChange: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: '500',
  },
  positiveChange: {
    color: '#4ADE80',
  },
  negativeChange: {
    color: '#F87171',
  },
}); 