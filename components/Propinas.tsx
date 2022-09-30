import React, { useEffect, useState } from "react";
//Importacion de las vistas
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ViewBase,
} from "react-native";

//Declaracion de bariables
const Propinas = () => {
  const [Propina, setPropina] = useState<string>("7.77");
  const [totalPersona, setTotalPersona] = useState<string>("200");
  const [total, setTotal] = useState<number>(464.4);
  const [personas, setPersonas] = useState<number>(9);
  const [porcentaje, setPorcentaje] = useState<number>(16);

//Funciones
  const calcularPropina = () => {
    let clientePropinas: number = total * (porcentaje / 100);
    let propinasIndividuales: number = clientePropinas / personas;
    if (isNaN(propinasIndividuales) || propinasIndividuales === Infinity) {
      propinasIndividuales = 0;
    }
    setPropina(propinasIndividuales.toFixed(2).toString());
    let _total: number = total + clientePropinas;
    setTotalPersona(clientePropinas.toFixed(2).toString());
  };
  const RESETData = () => {
    setTotal(0);
  };

  useEffect(calcularPropina, [total, personas, porcentaje]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeader}> Bill </Text>
        <View>
          <Text style={styles.inputAdd}> C$</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            defaultValue={total.toString()}
            onChangeText={() => setTotal}
          />
        </View>
        <View style={styles.boxSelectTip}>
          <Text style={styles.textHeader}>Select Tip %</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => setPorcentaje(5)}
              style={
                porcentaje == 5
                  ? styles.Porcentage
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 5
                    ? styles.textoPorcentage
                    : styles.textoBotonPorcentaje
                }
              >
                5%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(10)}
              style={
                porcentaje == 10
                  ? styles.Porcentage
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 10
                    ? styles.textoPorcentage
                    : styles.textoBotonPorcentaje
                }
              >
                10%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(15)}
              style={
                porcentaje == 15
                  ? styles.Porcentage
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 15
                    ? styles.textoPorcentage
                    : styles.textoBotonPorcentaje
                }
              >
                15%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(25)}
              style={
                porcentaje == 25
                  ? styles.Porcentage
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 25
                    ? styles.textoPorcentage
                    : styles.textoBotonPorcentaje
                }
              >
                25%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorcentaje(50)}
              style={
                porcentaje == 50
                  ? styles.Porcentage
                  : styles.botonPorcentaje
              }
            >
              <Text
                style={
                  porcentaje == 50
                    ? styles.textoPorcentage
                    : styles.textoBotonPorcentaje
                }
              >
                50%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPorcentaje}>
              <Text style={styles.textoBotonPorcentaje}>Custom</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxSelectTip}>
          <Text style={styles.textHeader}>Number of People</Text>
          <View>

            <TextInput
              style={styles.inputs}
              keyboardType="numeric"
              defaultValue={personas.toString()}
              onChangeText={() => setPersonas}
            />
          </View>
        </View>
        <View style={styles.resum}>
          <View style={styles.filaResum}>
            <Text style={styles.textWheader}>Propina</Text>
            <Text style={styles.textGheader}>Persona</Text>
          </View>
          <View>
            <Text style={styles.textMountResum}>${Propina}</Text>
          </View>
          <TouchableOpacity onPress={() => RESETData()} style={styles.btnRESET}>
          <Text style={styles.textoBtnRESET}>RESET</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

//Estilos
export default Propinas;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  input: {
    backgroundColor: "#F2F8FB",
    borderRadius: 7,
    padding: 10,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#687778",
    borderWidth: 0,
    marginBottom: 7,
    marginTop: 7,
  },
  inputAdd: {
    position: "absolute",
    color: "#A2AABB",
    top: 10,
    left: 10,
    zIndex: 2,
    fontSize: 22,
  },
  boxSelectTip: {
    marginTop: 30,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexWrap: "wrap",
  },
  Porcentage: {
    backgroundColor: "#00C1AC",
    borderRadius: 8,
    width: "48%",
    paddingVertical: 7,
    marginTop: 10,
  },
  botonPorcentaje: {
    backgroundColor: "#00494C",
    borderRadius: 8,
    width: "48%",
    paddingVertical: 7,
    marginTop: 10,
  },
  textoPorcentage: {
    color: "#004B4F",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  textoBotonPorcentaje: {
    color: "#F5FBFC",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  resum: {
    backgroundColor: "#00494C",
    borderRadius: 8,
    marginTop: 25,
    padding: 20,
  },
  filaResum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textWheader: {
    color: "#EDFEFE",
    fontWeight: "bold",
    fontSize: 22,
    borderWidth: 0,
  },
  textGheader: {
    color: "#4F8B8E",
    fontWeight: "bold",
    fontSize: 14,
    borderWidth: 0,
  },
  textMountResum: {
    color: "#00BEAD",
    fontWeight: "bold",
    fontSize: 40,
    borderWidth: 0,
  },
  btnRESET: {
    backgroundColor: "#00C1AC",
    borderRadius: 8,
    width: "100%",
    paddingVertical: 7,
    marginTop: 1,
  },
  textoBtnRESET: {
    color: "#00514E",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  inputs: {
    backgroundColor: "#F2F8FB",
    borderRadius: 8,
    padding: 10,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
  },
});
