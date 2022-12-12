import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    Dimensions,
    ScrollView,
    Button,
    Platform,
    StatusBar,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { IcKalender, IcJam } from "../../assets";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
const WINDOW_HEIGHT = Dimensions.get("window").height;
import { PrimaryButton } from "../../Componets";

export default AddNewTaskScreen = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [text, setText] = useState("MM/DD/YYYY");
    const [text1, setText1] = useState("HH:MM");

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios')
        setDate(currentDate);

        const tempDate = new Date(currentDate);
        const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        const fTime1 = tempDate.getHours() + ' Hours | ' + tempDate.getMinutes() + ' Minutes';
        setText(fDate)
        setText1(fTime1)

        console.log(fDate + ' (' + fTime1 + ')')
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#131B63", flex: 1 }}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#131B63" />

            <View style={style.bodyContent}>

                <ScrollView style={{ padding: 30 }}>
                    <View>
                        <Text style={style.text}>Sumary Task</Text>
                        <TextInput
                            numberOfLines={9}
                            maxLength={200}
                            multiline
                            placeholder={"Type Sumary Task"}
                            style={style.inputText}
                        />
                    </View>

                    <View>
                        <Text style={style.text}>Date</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => onChange(setText)}>
                                <Text numberOfLines={2} style={style.inputan1}>{text}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => showMode('date')}>
                                <View style={style.iconbg1}>
                                    <Image source={IcKalender} style={style.iconkalender} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={style.text}>Time Start</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => onChange(setText1)}>
                                <Text numberOfLines={2} style={style.inputan}>{text1}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => showMode("time")}>
                                <View style={style.iconbg}>
                                    <Image source={IcJam} style={style.iconjam} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={style.text}>Time End</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => onChange(setText1)}>
                                <Text numberOfLines={2} style={style.inputan}>{text1}</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => showMode("time")}>
                                <View style={style.iconbg}>
                                    <Image source={IcJam} style={style.iconjam} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {show && (
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                        />)}

                    <PrimaryButton
                        onPress={() => navigation.navigate("MainScreen")}
                        customeStyle={style.btnSubmitStyle}
                        title="Submit Data"
                    />

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    inputText: {
        borderColor: "#261863",
        backgroundColor: "#f7f5ff",
        fontSize: 16,
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 6,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: "top",
    },
    inputan1: {
        borderColor: "#261863",
        backgroundColor: "#f7f5ff",
        fontSize: 16,
        paddingTop: 15,
        paddingRight: 342,
        paddingLeft: 15,
        paddingBottom: 15,
        marginRight: 15,
        marginBottom: 0,
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: "top",
    },
    inputan: {
        borderColor: "#261863",
        backgroundColor: "#f7f5ff",
        fontSize: 16,
        paddingTop: 15,
        paddingRight: 387,
        paddingLeft: 15,
        paddingBottom: 15,
        marginRight: 15,
        marginBottom: 0,
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: "top",
    },
    textNameStyle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#A85CA3",
    },
    textall: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        textAlign: "center",
    },
    iconkalender: {
        resizeMode: "contain",
        borderRadius: 7,
        marginLeft: 10,
        marginRight: 10,
        width: 35,
        height: 39,
        flex: 1,
    },
    iconbg1: {
        padding: 5,
        paddingTop: 10,
        borderRadius: 5,
        backgroundColor: '#131B63',
    },
    iconjam: {
        resizeMode: "contain",
        borderRadius: 7,
        marginLeft: 10,
        marginRight: 10,
        width: 35,
        height: 39,
        flex: 1,
    },
    iconbg: {
        padding: 5,
        paddingTop: 10,
        borderRadius: 5,
        backgroundColor: '#131B63'
    },
    text: {
        marginTop: 30,
        marginLeft: 9,
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
    },
    filter: {
        marginTop: 10,
        marginLeft: 140,
        color: "white",
        fontWeight: "bold",
    },
    textWelcome: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    bodyContent: {
        marginTop: 100,
        height: 150,
        height: WINDOW_HEIGHT,
        backgroundColor: "white",
        borderTopRightRadius: 90,
        borderTopLeftRadius: 90,
    },
    btnSubmitStyle: {
        backgroundColor: "#01af3c",
        marginTop: 60,
    },
});