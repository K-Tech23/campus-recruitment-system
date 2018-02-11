
export default {
    root: {
        // border:'1px solid black',
        marginTop: 5,
        '& .appBody-div': {
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid black',
            width: '100%',
            height: '86vh',
            padding: 5,

            '& .appRightSider-div': {
                width: '20vw',
                border: '1px solid black'
            },
            '& .appContent-active-div': {
                width: 'calc(59vw - 15px)',
                border: '1px solid black'
            },
            '& .appContent-div': {
                margin: '0 auto',
                width: 'calc(59vw - 15px)',
                border: '1px solid black'
            },
            '& .appLeftSider-div': {
                width: '20vw',
                border: '1px solid black'
            }

        }
    }


}