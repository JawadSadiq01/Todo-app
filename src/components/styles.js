import { StyleSheet } from "react-native";

export const ListStyles = StyleSheet.create({
    item: {
      backgroundColor: "#e9e9e9",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:20
    },
    timeStamp:{
      textAlign:'right',
    },
    mainTodo:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    todoActions:{
      alignItems:'center',
      flexDirection:'row'
    },
    title: {
      fontSize: 20,
      fontWeight:'900'
    },
    description:{
      fontSize: 15,
      color:'gray',
    },
    actionText:{
      fontSize:25,
      marginHorizontal:5,
      fontWeight:'bold',
    },
    delete: {
      fontSize: 24,
      color: "red",
    },
  });


  export const HeaderStyles = StyleSheet.create({
    heading:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    mainContainer:{
        justifyContent: "center",
        alignItems: "center",
    },
    textInput:{
      textAlignVertical:"top",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: "90%",
        borderRadius: 5,
    },
    submitButton:{
    
        backgroundColor: 'blue',
    opacity:0.5,

        padding: 10,
        margin: 10,
        width: "90%",
        borderRadius: 5,
        alignItems: "center",
    }
  });

  export const FloatingButtonStyles = StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      bottom: 15,
      padding:10,
      right: 20,
      backgroundColor: 'blue',
      opacity:0.5,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 20,
    },
    buttonText: {
      fontSize:30,
      color: 'white',
      opacity:1,
      textAlign:'center',
      fontWeight: 'bold',
    },
  });