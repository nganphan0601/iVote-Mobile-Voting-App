import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          {/* some random formatting for syntax practice */}
          <View style={styles.tasksWrapper}>
              <Text style={styles.sectionTitle}>Welcome to iVote</Text>

              <Text style={styles.sectionExtra}>this is the initial startup screen, change the colors or whatever how u want</Text>
              <Text style={styles.sectionExtra2}>i am only viewed once on first startup</Text>
              <Text style={styles.sectionExtra3}>some simple imagery as an intuitive tutorial could be nice here</Text>
              <Text style={styles.sectionExtra4}>ill probably add a scroll here to fit some images in. finish here with a button for location input + transition</Text>
              <View style={styles.items}>

              </View>
          </View>



    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
            backgroundColor: '#6CB6EC',
    },

    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,

    },

    sectionTitle: {
        fontSize: 44,
        fontWeight: 'bold',
    },

    sectionExtra: {
        paddingTop: 20,
        fontSize: 20,
    },

    sectionExtra2: {
        paddingTop: 80,
        fontSize: 20,
    },

    sectionExtra3: {
        paddingTop: 80,
        fontSize: 20,
    },

    sectionExtra4: {
        paddingTop: 80,
        fontSize: 20,
    },

    items: {

    },



  
});
