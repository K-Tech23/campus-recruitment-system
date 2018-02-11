export default {
    root: {
        '& .paper-container': {
            marginTop: 100,
            width: '25%',
            margin: '0 auto',
            padding: '10px 0px 20px 25px',
            '& .loader': {
                width: '20%',
                margin: '0 auto',
                marginTop: '30%',
                position: 'absolute',
                top: -110,
                left: '46%'

            },
            '& Button': {
                display: 'block',
                marginTop: 20,
                marginLeft: 10,
                borderRadius: 5
            },
            '& .textField': {
                margin: 10,
                width: 300
            },
            '& .alreadyLogin-span': {
                fontSize: 15,
                margin: ' 10px 0px 0px 9px',
                display: 'block',
                cursor: 'pointer'
            },
            '& .signup-title': {
                marginLeft: 7
            }
        }
    }

}