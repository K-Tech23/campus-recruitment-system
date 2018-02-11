export default {
    root: {
        width: '100%',

        '& .title': {
            flex: 1,
            // textAlign:'center',
            fontSize: 30,
            marginLeft: 20
        },
        '& .menuButton': {
            marginLeft: -12,
            marginRight: 20,
        },
        '& .side-drawer >div': {
            width: '24%',
            marginTop: 65,
            '& .drawerHeader': {
                height: 40,
                fontSize: 14,
                padding: 6,
                fontWeight: 'bold'
            },
            '& .list':{
                padding:10,
                textAlign:'center',
                cursor:'pointer'
            }
        }
    }


}