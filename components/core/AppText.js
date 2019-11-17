import React from 'react';

const getFontSize = ({ massive, big, normal, small }) => {
    if(massive) return 30;
    if(big) return 24;
    if(small) return 12;
    else return 16;
}
const AppTest = props => {
    const { massive, big, normal, small } = props;

    const fontSize = getFontSize(props)

    return <Text style={[styles.textStyle, {fontSize}]} />
};

const styles = StyleSheet.create({
    textStyle: {
        lineHeight: 
    }
})
export default AppTest;
