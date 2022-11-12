

const SetThemeButton = ({theme,setTheme}) => {
    return(
        <button onClick={()=> {theme === true ? setTheme(!theme) : setTheme(!theme)}}>
            Change Theme
        </button>
    );
}

export default SetThemeButton;