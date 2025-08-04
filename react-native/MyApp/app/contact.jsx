import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View } from "react-native";


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}></View>
      <Text style={styles.titleContainer}>
        <Text style={styles.text}>Garvin Chimone</Text>
      </Text>

      <View style={styles.balanceCard}>
        <Text style={styles.cardTitle}>Wallet</Text>
        <Text style={styles.balance}>R 200.00</Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.actionItem}>
          <AntDesign name="arrowright" size={24} color="black" />
          <Text style={styles.actionText}>Send</Text>
        </View>
        <View style={styles.actionItem}>
          <AntDesign name="qrcode" size={24} color="black" />
          <Text style={styles.actionText}>QR Code</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E8E8E8",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#CCCCCC",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 5,
    textAlign: 'center'
  },
  container: {
    flex: 2,
    flexDirection: "column",
    marginTop: "auto",
    backgroundColor: "white",
  },
  text: {
    color: "blue",
    fontSize: 35
  },
  balanceCard: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    height: 'auto',
    width: '75%',
    borderStyle: 'solid',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 16
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15
  },
  actionsContainer: {
    width: 200,
    borderStyle: 'solid',
    height: 60,
    borderColor: 'orange',
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 10
  },
  actionItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  actionText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center'
  }
});
