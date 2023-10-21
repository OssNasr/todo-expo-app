import React from 'react';
import { Keyboard, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import modalStyles from './ModalForm.styles';


export default function ModalForm({ visible, title, inputValue, handleChange, cancleForm, submitForm }) {

    const inputRef = React.useRef();

    const { modal, modalContent, modalTitle, modalInput, modalFooter, modalButton, cancle, submit } = modalStyles;

    return (
            <Modal
                visible={visible}
                transparent={true}
                onShow={() => inputRef.current.focus()}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={modal}>
                        <View style={modalContent}>

                            <Text style={modalTitle}>{ title }</Text>

                            <TextInput
                                value={inputValue}
                                onChangeText={handleChange}
                                onSubmitEditing={submitForm}
                                ref={inputRef}
                                style={modalInput}
                                />

                            <View style={modalFooter}>
                                <TouchableOpacity onPress={cancleForm}>
                                    <Text style={[modalButton, cancle]}>
                                        Cancle
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={submitForm}>
                                    <Text style={[modalButton, submit]}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
    );
}
