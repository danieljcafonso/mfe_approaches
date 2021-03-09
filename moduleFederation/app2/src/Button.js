import * as React from "react";

const Button = ({accessToken}) => {
    console.log(accessToken)
    React.useEffect(() => {
       const sessionStorage = window.sessionStorage.getItem('access_token');
       console.log(sessionStorage)
    }, [])
    return <button>App2</button>
}

export default Button;