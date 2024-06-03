import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CustomeInput, FbButton } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setfirstName, setsureName } from "../../store/reducer/registerReducer";

export default function RegisterInputNameScreen() {
  const register = useSelector((state) => state.register.formInput);
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHeader}>What's your name?</Text>
      <Text>Enter the name you use in real life.</Text>

      <View style={styles.containerInput}>
        <CustomeInput
          value={register.firstName}
          onChangeText={(value) => dispatch(setfirstName(value))}
          label="First name"
        />

        <CustomeInput
          value={register.sureName}
          onChangeText={(value) => dispatch(setsureName(value))}
          label="Surename"
        />
      </View>

      <FbButton title="Next" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  containerInput: {
    marginTop: 20,
    marginBottom: 20,
  },
  textHeader: {
    fontWeight: "700",
    fontSize: 24,
  },
});
