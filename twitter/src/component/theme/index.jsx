const { createMuiTheme } = require("@material-ui/core");

const Theme = createMuiTheme({
overrides:{
    MultiTypography : {
        root:{
            fontFamily : 'shabnam !important',
        }
    }
}
})
export default Theme;