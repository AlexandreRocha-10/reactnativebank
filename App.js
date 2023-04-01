import { StyleSheet, View, FlatList } from 'react-native';

// import Account from './src/components/Account';
import CreateAccount from './src/components/CreateAccount';

export default function App() {
  const data = [
    { id: '1', component: <CreateAccount />  },
    // { id: '2', component: <Account />  },
  ]

  const renderItem = ({item}) => {
    return (
      <View>
        {item.component}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      style={styles.flatList}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
});
